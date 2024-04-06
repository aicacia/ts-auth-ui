<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type NewPhoneNumberForm = {
		phoneNumber: string;
	};

	const createSuite = () =>
		create((data: Partial<NewPhoneNumberForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('phoneNumber', 'required', () => {
				enforce(data.phoneNumber).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import classNames from 'vest/classnames';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	export let onCreate: (phoneNumber: string) => Promise<void>;

	const suite = createSuite();

	let phoneNumber = '';
	let phoneNumberFormatted = '';

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
		suite({ phoneNumber: phoneNumberFormatted }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('phoneNumber');
		validate();
		validate.flush();
	}
	function onPhoneNumberChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		phoneNumberFormatted = phoneNumber.replace(/\D/g, '');
		validate();
	}

	let adding = false;
	function onAddPhoneNumber() {
		adding = true;
	}
	function onCancelPhoneNumber() {
		adding = false;
	}

	let loading = false;
	async function onSubmit() {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await onCreate(phoneNumberFormatted);
				adding = false;
				phoneNumber = '';
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex flex-row flex-grow justify-end mt-4">
	<form class="flex flex-col flex-grow" on:submit|preventDefault={onSubmit} class:hidden={!adding}>
		<div class="mb-2">
			<input
				class="w-full {cn('phoneNumber')}"
				type="text"
				name="phoneNumber"
				autocomplete="tel"
				placeholder="New PhoneNumber"
				bind:value={phoneNumber}
				on:input={onPhoneNumberChange}
			/>
			<InputResults name="phoneNumber" {result} />
		</div>
		<div class="flex flex-row justify-end">
			<button class="btn secondary flex flex-shrink" on:click={onCancelPhoneNumber} {disabled}>
				Cancel
			</button>
			<button type="submit" class="btn primary flex flex-shrink" {disabled}>
				{#if loading}<div class="flex flex-row justify-center mr-2">
						<div class="inline-block w-6 h-6"><Spinner /></div>
					</div>{/if}
				Add
			</button>
		</div>
	</form>
	<button class="btn primary icon" on:click={onAddPhoneNumber} class:hidden={adding}>
		<Plus />
	</button>
</div>
