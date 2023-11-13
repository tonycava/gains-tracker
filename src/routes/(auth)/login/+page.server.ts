import type { Action, Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import type { AxiosError } from 'axios';
import { COOKEYS, defaultCookiesOptions } from '$lib/helpers/cookie.helper';
import AuthService from '@services/auth.service';
import type { LoginBodyPayload } from '$lib/models/payload';
import type {  GTResponseData } from '$lib/server/response';

const login: Action = async ({ request, cookies }) => {
	const form = await request.formData();
	const formData = Object.fromEntries([...form.entries()]) as LoginBodyPayload;

	const response = await AuthService
		.login(formData)
		.catch((err: AxiosError<GTResponseData>) => {
			console.log(err);
			return { internalError: err.response?.data?.message };
		});


	if ('internalError' in response) {
		return fail(400, { internalError: response.internalError });
	}

	cookies.set(COOKEYS.JWT_TOKEN, response.data.data!.token, defaultCookiesOptions);
	throw redirect(303, '/');
};

export const actions: Actions = { login };