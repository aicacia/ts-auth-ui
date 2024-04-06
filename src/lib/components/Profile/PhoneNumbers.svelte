<svelte:options immutable />

<script lang="ts">
	import { handleError } from '$lib/errors';
	import type { User, PhoneNumber } from '$lib/openapi/auth';
	import { createPhoneNumber } from '$lib/stores/user';
	import PhoneNumberComponent from './PhoneNumber.svelte';
	import NewPhoneNumber from './NewPhoneNumber.svelte';

	export let user: User;

	let newPhoneNumber: PhoneNumber | undefined;
	async function onCreatePhoneNumber(phoneNumber: string) {
		try {
			newPhoneNumber = await createPhoneNumber(phoneNumber);
		} catch (error) {
			handleError(error);
		}
	}
</script>

<h3 class="mb-1">Phone Numbers</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#if user.phone_number}
		<PhoneNumberComponent phoneNumber={user.phone_number} primary />
		{#if user.phone_numbers.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.phone_numbers as phoneNumber, index (phoneNumber.id)}
		<PhoneNumberComponent
			{phoneNumber}
			sentPhoneNumberConfirmation={newPhoneNumber?.id === phoneNumber.id}
		/>
		{#if index < user.phone_numbers.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>

<NewPhoneNumber onCreate={onCreatePhoneNumber} />
