<svelte:options immutable />

<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { userApi } from '$lib/openapi';
	import type { User, Email } from '$lib/openapi/auth';
	import { updateCurrentUser } from '$lib/stores/user';
	import EmailComponent from './Email.svelte';
	import NewEmail from './NewEmail.svelte';

	export let user: User;

	let newEmail: Email | undefined;
	async function onCreateEmail(email: string) {
		newEmail = await userApi.createEmail(user.id as number, { email });
		user = { ...user, emails: [...user.emails, newEmail] };
		updateCurrentUser(user);
		await invalidateAll();
	}
</script>

<h3 class="mb-1">Emails</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#if user.email}
		<EmailComponent bind:user bind:email={user.email} primary />
		{#if user.emails.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.emails as email, index (email.id)}
		<EmailComponent bind:user bind:email sentEmailConfirmation={newEmail?.id === email.id} />
		{#if index < user.emails.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>

<NewEmail onCreate={onCreateEmail} />
