<svelte:options immutable />

<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	let search = writable('');
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { fuzzyEquals } from '@aicacia/string-fuzzy_equals';
	import type { PageData } from './$types';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Plus from 'lucide-svelte/icons/plus';
	import Modal from '$lib/components/Modal.svelte';
	import ApplicationEditor from '$lib/components/Application/ApplicationEditor.svelte';
	import type { Application } from '$lib/openapi/auth';

	export let data: PageData;

	let hasMore = data.pagination.has_more;
	$: applications = data.pagination.items;

	let filtered = new Set<number>();
	$: filtered = $search.length
		? applications.reduce((acc, a) => {
				if (!fuzzyEquals($search, a.description)) {
					acc.add(a.id);
				}
				return acc;
			}, new Set<number>())
		: new Set<number>();

	let addOpen = false;
	function onAddOpen() {
		addOpen = true;
	}

	function onCreateAppliction(application: Application) {
		applications = [application, ...applications];
		addOpen = false;
	}
</script>

<svelte:head>
	<title>Applications</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow p-4">
		<div class="flex flex-row flex-grow justify-between">
			<input type="text" placeholder="Filter.." bind:value={$search} />
			<button class="btn primary icon" on:click={onAddOpen}><Plus /></button>
		</div>
		<hr class="my-1" />
		<table class="table-auto w-full">
			<thead>
				<tr class="text-left border-b">
					<th class="">Id</th>
					<th>Name</th>
					<th>URI</th>
					<th>Created</th>
					<th>Updated</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each applications as application, index (application.id)}
					{@const hidden = filtered.has(application.id)}
					<tr class="group" class:border-b={index < applications.length - 1} class:hidden>
						<td>{application.id}</td>
						<td>{application.description}</td>
						<td>{application.uri}</td>
						<td>{application.created_at.toLocaleString()}</td>
						<td>{application.updated_at.toLocaleString()}</td>
						<td
							class="flex flex-row justify-end transition-opacity opacity-0 group-hover:opacity-100"
						>
							<a
								class="btn primary icon inline-block"
								href={`${base}/applications/${application.id}`}><Pencil /></a
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<Modal bind:open={addOpen}>
	<h4 slot="title">Create Application</h4>
	<ApplicationEditor onDone={onCreateAppliction} />
</Modal>
