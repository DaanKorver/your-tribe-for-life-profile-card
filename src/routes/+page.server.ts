import { error } from '@sveltejs/kit';

import createClient from '$lib/helpers/prismicio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const client = createClient({ request });
	const stars = await client.getAllByType('star');

	const starContents = [];

	for (let i = 0; i < stars.length; i++) {
		starContents.push({ ...stars[i].data });
	}

	if (stars) {
		return { stars: starContents.reverse() };
	}

	error(404, 'Not found');
};
