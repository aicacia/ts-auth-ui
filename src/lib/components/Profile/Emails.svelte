<svelte:options immutable />

<script lang="ts">
	import { handleError } from '$lib/errors';
	import type { User, Email } from '$lib/openapi/auth';
	import { createEmail } from '$lib/stores/user';
	import EmailComponent from './Email.svelte';
	import NewEmail from './NewEmail.svelte';

	export let user: User;

	let newEmail: Email | undefined;
	async function onCreateEmail(email: string) {
		try {
			newEmail = await createEmail(email);
		} catch (error) {
			handleError(error);
		}
	}
</script>

<h3 class="mb-1">Emails</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#if user.email}
		<EmailComponent email={user.email} primary />
		{#if user.emails.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.emails as email, index (email.id)}
		<EmailComponent {email} sentEmailConfirmation={newEmail?.id === email.id} />
		{#if index < user.emails.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>

<NewEmail onCreate={onCreateEmail} />
