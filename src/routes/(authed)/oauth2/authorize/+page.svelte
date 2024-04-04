<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import {
		oauth2Application,
		getOAuth2Application,
		resetOAuth2Application
	} from '$lib/stores/oauth2';
	import type { PageData } from './$types';

	export let data: PageData;

	$: if (data.code) {
		getOAuth2Application(data.code);
	}

	$: application = $oauth2Application?.application;
	$: redirectUri = $oauth2Application?.redirect_uri;
	$: scopes = $oauth2Application?.scope || [];

	async function onCancel() {
		resetOAuth2Application();
		if (redirectUri) {
			await goto(redirectUri);
		} else {
			await goto(`${base}/`);
		}
	}
	async function onAllow() {
		resetOAuth2Application();
		if (redirectUri) {
			await goto(redirectUri);
		} else {
			await goto(`${base}/`);
		}
	}
</script>

<svelte:head>
	<title>OAuth2 Authorize Application</title>
</svelte:head>

<div class="flex flex-col flex-grow justify-end md:justify-start">
	<div class="flex flex-col flex-shrink mx-auto my-10 bg-white dark:bg-gray-800 shadow p-4">
		<h1 class="mb-1">Allow {application?.name} Access?</h1>
		<ul>
			{#each scopes as scope (scope)}
				<li>{scope}</li>
			{/each}
		</ul>
		<div class="flex flex-row justify-end">
			<button class="btn secondary" on:click={onCancel}>Cancel</button>
			<button class="btn primary" on:click={onAllow}>Allow</button>
		</div>
	</div>
</div>
