<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Maintenance</title>
</svelte:head>

<div class="flex flex-col flex-grow justify-end md:justify-start mt-10">
	<div class="sm:container mx-4 sm:mx-auto bg-white pt-4 px-4 pb-8 text-justify">
		<h4 class="uppercase mb-11">Site down for Maintenance</h4>
		<p>
			Sorry, site is temporarily down for maintenance, check back <a href={`${base}/`}>here</a> in a
			bit.
		</p>
	</div>
</div>
