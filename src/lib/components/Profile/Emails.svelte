<svelte:options immutable />

<script lang="ts">
	import type { User } from '$lib/openapi/auth';
	import { createEmail } from '$lib/stores/user';
	import Email from './Email.svelte';
	import NewEmail from './NewEmail.svelte';

	export let user: User;
</script>

<h3 class="mb-1">Emails</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#if user.email}
		<Email email={user.email} primary />
		{#if user.emails.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.emails as email, index (email.id)}
		<Email {email} />
		{#if index < user.emails.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>

<NewEmail onCreate={createEmail} />
