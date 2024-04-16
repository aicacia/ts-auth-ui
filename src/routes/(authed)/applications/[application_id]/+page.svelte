<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
	import Application from '$lib/components/Application/Application.svelte';
	import type { PageData } from './$types';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	export let data: PageData;

	$: application = data.application;
</script>

<svelte:head>
	<title>{application.description}</title>
</svelte:head>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="flex flex-row">
			<a class="btn icon primary me-2" href={`${base}/applications`}>
				<ArrowLeft />
			</a>
			<h4>{application.description}</h4>
		</div>
	</div>
</div>

<Application bind:application />
