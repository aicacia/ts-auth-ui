<svelte:options immutable />

<script lang="ts">
	import type { User, PhoneNumber } from '$lib/openapi/auth';
	import PhoneNumberComponent from './PhoneNumber.svelte';
	import NewPhoneNumber from './NewPhoneNumber.svelte';
	import { userApi } from '$lib/openapi';
	import { invalidateAll } from '$app/navigation';
	import { updateCurrentUser } from '$lib/stores/user';

	export let user: User;

	let newPhoneNumber: PhoneNumber | undefined;
	async function onCreatePhoneNumber(phoneNumber: string) {
		newPhoneNumber = await userApi.createPhoneNumber(user.id as number, {
			phone_number: phoneNumber
		});
		user = { ...user, phone_numbers: [...user.phone_numbers, newPhoneNumber] };
		updateCurrentUser(user);
		await invalidateAll();
	}
</script>

<h3 class="mb-1">Phone Numbers</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#if user.phone_number}
		<PhoneNumberComponent bind:user bind:phoneNumber={user.phone_number} primary />
		{#if user.phone_numbers.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.phone_numbers as phoneNumber, index (phoneNumber.id)}
		<PhoneNumberComponent
			bind:user
			bind:phoneNumber
			sentPhoneNumberConfirmation={newPhoneNumber?.id === phoneNumber.id}
		/>
		{#if index < user.phone_numbers.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>

<NewPhoneNumber onCreate={onCreatePhoneNumber} />
