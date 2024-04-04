import { getCurrentUser } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { createNotification } from '$lib/stores/notifications';

export const prerender = false;

export const load: PageLoad = async (event) => {
  await event.parent();

	const currentUser = await getCurrentUser();
	const code = event.url.searchParams.get('code');

	if (currentUser) {
		createNotification('Authorized.', 'success');
		redirect(302, `${base}/oauth2/authorize?code=${code}`);
	} else {
		createNotification('Sign in.', 'info');
		redirect(302, `${base}/signin?code=${code}`);
	}
};
