<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Health</title>
</svelte:head>

<div class="flex flex-col flex-grow justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink md:w-72 w-full mx-auto my-10 bg-white dark:bg-gray-800 shadow p-4"
	>
		<h1>Health</h1>
		<p class="py-2">
			<a href={`${base}/signin`}>Sign in</a>, not a member? <a href={`${base}/signup`}>Sign up</a>
		</p>
	</div>
</div>
