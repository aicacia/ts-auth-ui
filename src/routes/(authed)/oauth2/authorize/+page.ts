import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async (event) => {
  await event.parent();

	const code = event.url.searchParams.get('code');

	return { code };
};
