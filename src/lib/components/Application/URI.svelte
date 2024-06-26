<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type URIForm = {
		uri: string;
	};

	const createSuite = () =>
		create((data: Partial<URIForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

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
	import Undo from 'lucide-svelte/icons/undo-2';

	export let id: number;
	export let uri: string = '';

	let initialUri = uri;
	const suite = createSuite();

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
		suite({ uri }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('uri');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	function onReset() {
		uri = initialUri;
		suite.reset();
	}

	let loading = false;
	async function onSubmit() {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await applicationApi.updateConfig(id, { key: 'uri', value: uri });
				initialUri = uri;
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
	<label for="uri">URI</label>
	<div class="flex flex-row">
		{#if uri !== initialUri}
			<div class="flex flex-shrink">
				<button
					type="submit"
					title="Undo"
					class="btn icon secondary flex flex-shrink"
					on:click|preventDefault={onReset}
				>
					<Undo />
				</button>
			</div>
		{/if}
		<div class="flex flex-grow relative">
			<input
				id="uri"
				class="flex flex-grow {cn('uri')}"
				type="text"
				name="uri"
				placeholder="URI"
				bind:value={uri}
				on:input={onChange}
			/>
		</div>
	</div>
	<InputResults name="uri" {result} />
	{#if initialUri !== uri}
		<div class="flex flex-row justify-end mt-2">
			<button type="submit" class="btn primary flex flex-shrink" {disabled}>
				{#if loading}<div class="flex flex-row justify-center mr-2">
						<div class="inline-block w-6 h-6"><Spinner /></div>
					</div>{/if}
				Update
			</button>
		</div>
	{/if}
</form>
