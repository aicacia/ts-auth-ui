<svelte:options immutable />

<script lang="ts" context="module">
	import '../app.postcss';
	import '$lib/stores/theme';
</script>

<script lang="ts">
	import Notifications from '$lib/components/Notifications.svelte';
</script>

<slot />

<Notifications />
