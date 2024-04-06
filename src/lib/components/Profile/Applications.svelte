<svelte:options immutable />

<script lang="ts">
	import type { PaginationApplication, Application, User } from '$lib/openapi/auth';
	import ApplicationComponent from './Application.svelte';

	export let user: User;
	export let applications: PaginationApplication;

	function onDelete(application: Application) {
		const newItems = applications.items.slice();
		const index = newItems.findIndex((a) => a.id === application.id);
		if (index !== -1) {
			newItems.splice(index, 1);
			applications = { has_more: applications.has_more, items: newItems };
		}
	}
</script>

<h3 class="mb-1">Applications</h3>
<hr class="my-1" />
<div class="flex flex-col">
	{#each applications.items as application, index (application.id)}
		<ApplicationComponent {user} {application} {onDelete} />
		{#if index < applications.items.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>
