<svelte:options immutable />

<script lang="ts">
	import type { Application } from '$lib/openapi/auth';
	import { user } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import { userApi } from '$lib/openapi';
	import { handleError } from '$lib/errors';
	import Profile from '$lib/components/Profile/Profile.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let applications: Application[] = [];
	onMount(async () => {
		try {
			applications = await userApi.usersIdApplicationsGet(data.user.id);
		} catch (error) {
			await handleError(error);
		}
	});
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<Profile user={data.user} {applications} />
