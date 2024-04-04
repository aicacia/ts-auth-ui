<svelte:options immutable />

<script lang="ts">
	import type { PageData } from './$types';
	import Pencil from 'lucide-svelte/icons/pencil';

	export let data: PageData;

	$: users = data.pagination.items;
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow p-4">
		<table class="table-auto w-full">
			<thead>
				<tr class="text-left border-b">
					<th class="">Id</th>
					<th>Username</th>
					<th>Email</th>
					<th>Created</th>
					<th>Updated</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each users as user, index (user.id)}
					<tr class="group" class:border-b={index < users.length - 1}>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email?.email || ''}</td>
						<td>{user.created_at.toLocaleString()}</td>
						<td>{user.updated_at.toLocaleString()}</td>
						<td class="transition-opacity opacity-0 group-hover:opacity-100">
							<button class="btn primary icon"><Pencil /></button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
