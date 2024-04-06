<svelte:options immutable />

<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte';
	import type { PhoneNumber, User } from '$lib/openapi/auth';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import CircleCheck from 'lucide-svelte/icons/circle-check';
	import Send from 'lucide-svelte/icons/send';
	import Mail from 'lucide-svelte/icons/mail';
	import Trash from 'lucide-svelte/icons/trash';
	import { handleError } from '$lib/errors';
	import { createNotification } from '$lib/stores/notifications';
	import Modal from '$lib/components/Modal.svelte';
	import { userApi } from '$lib/openapi';
	import { invalidateAll } from '$app/navigation';
	import { updateCurrentUser } from '$lib/stores/user';

	export let user: User;
	export let phoneNumber: PhoneNumber;
	export let primary = false;
	export let sentPhoneNumberConfirmation = false;

	let open = false;

	async function onSetPrimary() {
		try {
			await userApi.setPrimaryPhoneNumber(user.id, phoneNumber.id);
			const newPhoneNumbers = user.phone_numbers.slice();
			const index = newPhoneNumbers.findIndex((e) => e.id === phoneNumber.id);
			if (index !== -1) {
				newPhoneNumbers.splice(index, 1);
			}
			if (user.phone_number) {
				newPhoneNumbers.push(user.phone_number);
			}
			user = { ...user, phone_number: phoneNumber, phone_numbers: newPhoneNumbers };
			updateCurrentUser(user);
			open = false;
			await invalidateAll();
		} catch (error) {
			await handleError(error);
		}
	}
	async function onDeletePhoneNumber() {
		try {
			await userApi.deletePhoneNumber(user.id, phoneNumber.id);
			const newPhoneNumbers = user.phone_numbers.slice();
			const index = newPhoneNumbers.findIndex((e) => e.id === phoneNumber.id);
			if (index !== -1) {
				newPhoneNumbers.splice(index, 1);
			}
			user = { ...user, phone_numbers: newPhoneNumbers };
			updateCurrentUser(user);
			deletePhoneNumberOpen = false;
			await invalidateAll();
		} catch (error) {
			await handleError(error);
		}
	}

	let phoneNumberConfirmation: string;
	async function onSendConfirmation() {
		try {
			await userApi.sendConfirmationToPhoneNumber(user.id, phoneNumber.id);
			open = false;
			sentPhoneNumberConfirmation = true;
			createNotification('sent_phoneNumber_confirmation', 'info');
		} catch (error) {
			await handleError(error);
		}
	}
	async function onConfirmPhoneNumber() {
		try {
			phoneNumber = await userApi.confirmPhoneNumber(user.id, phoneNumber.id, {
				token: phoneNumberConfirmation
			});
			const newPhoneNumbers = user.phone_numbers.slice();
			const index = newPhoneNumbers.findIndex((e) => e.id === phoneNumber.id);
			if (index !== -1) {
				newPhoneNumbers[index] = phoneNumber;
			}
			user = { ...user, phone_numbers: newPhoneNumbers };
			updateCurrentUser(user);
			sentPhoneNumberConfirmation = false;
			createNotification('phoneNumber_confirmed', 'success');
			await invalidateAll();
		} catch (error) {
			await handleError(error);
		}
	}

	let deletePhoneNumberOpen = false;
	function onDeletePhoneNumberOpen() {
		deletePhoneNumberOpen = true;
		open = false;
	}
</script>

<div class="flex flex-row flex-grow items-center justify-between">
	<div class="flex flex-grow relative">
		<input class="w-full" type="phoneNumber" value={phoneNumber.phone_number} readonly />
		{#if phoneNumber.confirmed}
			<span class="absolute top-0 right-0 mt-1 me-1 text-green-600 cursor-help" title="Confirmed"
				><CircleCheck size={22} /></span
			>
		{/if}
	</div>
	{#if !primary || !phoneNumber.confirmed}
		<div class="flex flex-shrink">
			<Dropdown bind:open>
				<EllipsisVertical slot="button" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				{#if !phoneNumber.confirmed}
					<li
						class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						on:click={onSendConfirmation}
					>
						<Mail /><span class="ms-4">Send Confirmation PhoneNumber</span>
					</li>
				{:else}
					<li
						class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						on:click={onSetPrimary}
					>
						<Send /><span class="ms-4">Set as Primary</span>
					</li>
				{/if}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
					on:click={onDeletePhoneNumberOpen}
				>
					<Trash /><span class="ms-4">Delete</span>
				</li>
			</Dropdown>
		</div>
	{/if}
</div>

<Modal bind:open={sentPhoneNumberConfirmation} backgroundClose={false}>
	<h4 slot="title">Check your PhoneNumber</h4>
	<form on:submit|preventDefault={onConfirmPhoneNumber}>
		<div class="flex flex-col">
			<input
				type="text"
				class="flex flex-grow"
				placeholder="Confirmation Token"
				bind:value={phoneNumberConfirmation}
			/>
		</div>
		<div class="flex flex-row justify-end mt-2">
			<button class="btn primary" type="submit">Confirm</button>
		</div>
	</form>
</Modal>

<Modal bind:open={deletePhoneNumberOpen}>
	<h4 slot="title">Delete {phoneNumber.phone_number}?</h4>
	<form on:submit|preventDefault={onDeletePhoneNumber}>
		<div class="flex flex-row justify-end">
			<button class="btn danger" type="submit">Delete</button>
		</div>
	</form>
</Modal>
