<svelte:options immutable />

<script lang="ts">
	import type { PaginationApplication, User } from '$lib/openapi/auth';
	import Emails from './Emails.svelte';
	import PhoneNumbers from './PhoneNumbers.svelte';
	import ResetPassword from './ResetPassword.svelte';
	import Username from './Username.svelte';
	import Applications from './Applications.svelte';
	import { currentUser } from '$lib/stores/user';

	export let user: User;
	export let applications: PaginationApplication;
</script>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-lg mx-auto my-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Applications bind:user bind:applications />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-lg mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Username bind:user />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-lg mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Emails bind:user />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-lg mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<PhoneNumbers bind:user />
		</div>
	</div>
</div>
{#if user.id === $currentUser?.id}
	<div class="flex flex-col justify-end md:justify-start px-4">
		<div
			class="flex flex-col flex-shrink w-full max-w-lg mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
		>
			<div class="mb-2">
				<ResetPassword />
			</div>
		</div>
	</div>
{/if}
