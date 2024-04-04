<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type ProfileForm = {
		password: string;
		passwordConfirmation: string;
	};

	const createSuite = () =>
		create((data: Partial<ProfileForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('password', 'required', () => {
				enforce(data.password).isNotBlank();
			});
			test('passwordConfirmation', 'required', () => {
				enforce(data.passwordConfirmation).isNotBlank();
			});
			test('passwordConfirmation', 'password_confirmation_mismatch', () => {
				enforce(data.passwordConfirmation).equals(data.password);
			});
		});
</script>

<script lang="ts">
	import classNames from 'vest/classnames';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { userApi } from '$lib/openapi';
	import { createNotification } from '$lib/stores/notifications';

	const suite = createSuite();

	let password = '';
	let passwordConfirmation = '';

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
		suite({ password, passwordConfirmation }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('password');
		fields.add('passwordConfirmation');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	let loading = false;
	async function onSubmit(e: SubmitEvent) {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await userApi.resetPassword({
					password,
					password_confirmation: passwordConfirmation
				});
				password = '';
				passwordConfirmation = '';
				suite.reset();
				result = suite.get();
				createNotification('password_reset', 'success');
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<h3 class="mb-1">Reset Password</h3>
<form on:submit|preventDefault={onSubmit}>
	<div class="mb-2">
		<input
			class="w-full {cn('password')}"
			type="password"
			name="password"
			autocomplete="new-password"
			placeholder="Password"
			bind:value={password}
			on:input={onChange}
		/>
		<InputResults name="password" {result} />
	</div>
	<div class="mb-2">
		<input
			class="w-full {cn('passwordConfirmation')}"
			type="password"
			name="passwordConfirmation"
			autocomplete="new-password"
			placeholder="Password Confirmation"
			bind:value={passwordConfirmation}
			on:input={onChange}
		/>
		<InputResults name="passwordConfirmation" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="flex flex-row justify-center mr-2">
					<div class="inline-block w-6 h-6"><Spinner /></div>
				</div>{/if}
			Reset
		</button>
	</div>
</form>
