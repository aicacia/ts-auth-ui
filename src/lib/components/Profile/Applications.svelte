<svelte:options immutable />

<script lang="ts">
	import type { PaginationApplication } from '$lib/openapi/auth';
	import ApplicationComponent from './Application.svelte';

	export let applications: PaginationApplication;
</script>

<h3 class="mb-1">Applications</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#each applications.items as application, index (application.id)}
		<ApplicationComponent {application} />
		{#if index < applications.items.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>
