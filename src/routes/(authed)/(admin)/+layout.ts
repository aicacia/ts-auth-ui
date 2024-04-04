import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import { createNotification } from '$lib/stores/notifications';

export const load: LayoutLoad = async (event) => {
  const { user } = await event.parent();

	if (!user.permissions.includes("admin")) {
		createNotification('Invalid User');
		redirect(302, `${base}/profile`);
	}
};
