<svelte:options immutable />

<script lang="ts" context="module">
	function createApplicationConfig(key: string, value?: any): ApplicationConfig {
		return {
			key,
			value,
			created_at: new Date(),
			updated_at: new Date()
		};
	}
</script>

<script lang="ts">
	import type { Application } from '$lib/openapi/auth';
	import ApplicationEditor from './ApplicationEditor.svelte';
	import ApplicationSecret from './ApplicationSecret.svelte';
	import DeleteApplication from './DeleteApplication.svelte';
	import JWT from './JWT.svelte';
	import URI from './URI.svelte';

	export let application: Application;

	function onUpdate(updatedApplication: Application) {
		application = updatedApplication;
	}
</script>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<ApplicationEditor
			id={application.id}
			description={application.description}
			uri={application.uri}
			onDone={onUpdate}
		/>
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<ApplicationSecret id={application.id} />
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<DeleteApplication id={application.id} originalUri={application.uri} />
	</div>
</div>
