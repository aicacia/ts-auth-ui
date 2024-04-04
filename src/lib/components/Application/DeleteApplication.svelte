<svelte:options immutable />

<script lang="ts" context="module">
</script>

<script lang="ts">
	import Modal from '../Modal.svelte';
	import DeleteApplicationForm from './DeleteApplicationForm.svelte';

	export let id: number;
	export let originalUri: string;

	let open = false;
	function onOpenDelete() {
		open = true;
	}
</script>

<div>
	<h4>Danger Zone</h4>
	<hr class="mb-1" />
	<p>
		This operation is permanent and will delete all permissions and data associated with
		application.
	</p>
	<div class="flex flex-row justify-end">
		<button class="btn danger" on:click={onOpenDelete}>Delete Application</button>
	</div>
</div>

<Modal bind:open>
	<h4 slot="title">Delete Application?</h4>
	<DeleteApplicationForm {id} {originalUri} />
</Modal>
