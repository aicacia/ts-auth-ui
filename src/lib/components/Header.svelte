<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { signOut, signedIn } from '$lib/stores/user';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Menu from 'lucide-svelte/icons/menu';
	import AppWindow from 'lucide-svelte/icons/app-window';
	import { page } from '$app/stores';

	async function onSignOut() {
		signOut();
		onGoto();
		await goto(`${base}/signin`);
	}

	let open = false;
	function onGoto() {
		open = false;
	}
</script>

<div class="flex flex-row flex-shrink justify-between bg-white dark:bg-gray-800 shadow z-20">
	<div class="flex flex-row flex-shrink ms-2">
		<a class="btn text-lg" href={`${base}/`}>Auth</a>
	</div>
	<div class="flex flex-row flex-shrink me-2">
		<div class="flex flex-col justify-center content-center">
			{#if $signedIn}
				<Dropdown bind:open>
					<Menu slot="button" />
					<a
						href={`${base}/applications`}
						class="default flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						class:active={$page.route.id === '/(authed)/applications'}
						on:click={onGoto}
					>
						<AppWindow /><span class="ms-4">Applications</span>
					</a>
					<hr />
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<li
						class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						on:click={onSignOut}
					>
						<LogOut /><span class="ms-4">Sign out</span>
					</li>
				</Dropdown>
			{:else}
				<a href={`${base}/signin`}>Sign in</a>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	li.active,
	a.active {
		@apply bg-gray-200 dark:bg-gray-600;
	}
</style>
