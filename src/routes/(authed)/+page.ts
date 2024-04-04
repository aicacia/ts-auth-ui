import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async (event) => {
  const { user } = await event.parent();

	if (user.permissions.includes("admin")) {
		redirect(302, `${base}/applications`);
	} else {
		redirect(302, `${base}/profile`);
  }
};
