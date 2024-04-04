<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type ApplicationForm = {
		description: string;
		uri: string;
	};

	const createSuite = () =>
		create((data: Partial<ApplicationForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('description', 'required', () => {
				enforce(data.description).isNotBlank();
			});
			test('uri', 'required', () => {
				enforce(data.uri).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import classNames from 'vest/classnames';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { applicationApi } from '$lib/openapi';
	import type { Application } from '$lib/openapi/auth';
	import { toURLSafe } from '$lib/util';
	import { invalidate } from '$app/navigation';
	import { base } from '$app/paths';

	export let id: number | undefined = undefined;
	export let description: string = '';
	export let uri: string = '';
	export let onDone: (application: Application) => void;

	const suite = createSuite();
	let initalDescription = description;
	let initalURI = uri;

	let result = suite.get();
	$: disabled = loading;
	$: cn = classNames(result, {
		untested: 'untested',
		tested: 'tested',
		invalid: 'invalid',
		valid: 'valid',
		warning: 'warning'
	});

	const fields = new Set<string>();
	const validate = debounce(() => {
		suite({ description, uri }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('description');
		fields.add('uri');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}
	function onNameChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		uri = toURLSafe(description);
		onChange(e);
	}
	function onURIChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		uri = toURLSafe(uri);
		onChange(e);
	}

	let loading = false;
	async function onSubmit() {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				const application =
					id == null
						? await applicationApi.create({ description, uri })
						: await applicationApi.update(id, { description, uri });
				if (id == null) {
					await invalidate(`${base}/applications`);
				}
				initalDescription = application.description;
				initalURI = application.uri;
				onDone(application);
				suite.reset();
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form class="flex flex-col flex-grow" on:submit|preventDefault={onSubmit}>
	<div class="mb-2">
		<label for="application-description">Description</label>
		<input
			id="application-description"
			class="w-full {cn('description')}"
			type="text"
			name="description"
			placeholder="Description"
			bind:value={description}
			on:input={onNameChange}
		/>
		<InputResults name="description" {result} />
	</div>
	<div class="mb-2">
		<label for="application-uri">URL Safe Short Name</label>
		<input
			id="application-uri"
			class="w-full {cn('uri')}"
			type="text"
			name="uri"
			placeholder="URL Safe Short Name"
			bind:value={uri}
			on:input={onURIChange}
		/>
		<InputResults name="uri" {result} />
	</div>
	{#if initalDescription !== description || initalURI !== uri}
		<div class="flex flex-row justify-end">
			<button type="submit" class="btn primary flex flex-shrink" {disabled}>
				{#if loading}<div class="flex flex-row justify-center mr-2">
						<div class="inline-block w-6 h-6"><Spinner /></div>
					</div>{/if}
				{#if id == null}Create{:else}Update{/if}
			</button>
		</div>
	{/if}
</form>
