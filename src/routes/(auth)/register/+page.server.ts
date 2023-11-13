import type { Action, Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { COOKEYS, defaultCookiesOptions } from '$lib/helpers/cookie.helper';
import AuthService from '@services/auth.service';
import type { AxiosError } from 'axios';
import type { RegisterBodyPayload } from '$lib/models/payload';
import type { GTResponse } from '$lib/server/response';

const register: Action = async ({ request, cookies }) => {
	const form = await request.formData();
	const formData = Object.fromEntries([...form.entries()]) as RegisterBodyPayload;

	const response = await AuthService
		.register(formData)
		.catch((err: AxiosError<GTResponse>) => {
			return { internalError: err.response?.data?.code };
		});

	if ('internalError' in response) {
		return fail(400, { internalError: response.internalError });
	}

	cookies.set(COOKEYS.JWT_TOKEN, response.data.data!.token, defaultCookiesOptions);
	throw redirect(303, '/');
};

export const actions: Actions = { register };