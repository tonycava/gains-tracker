import type { PageServerLoad } from './$types';
import { type Action, type Actions, redirect } from '@sveltejs/kit';
import { COOKEYS } from '$lib/helpers/cookie.helper';

export const load: PageServerLoad = async ({ locals}) => {
	if (!locals.user) throw redirect(303, '/login');
};

const onLogout: Action = ({ cookies }) => {
	cookies.delete(COOKEYS.JWT_TOKEN);
	throw redirect(303, '/login');
};


export const actions: Actions = {
	onLogout
};