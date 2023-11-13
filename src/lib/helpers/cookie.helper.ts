import type { CookieSerializeOptions } from 'cookie';

export enum COOKEYS {
	JWT_TOKEN = 'jwt_token',
}

export const defaultCookiesOptions: CookieSerializeOptions = {
	path: '/',
	httpOnly: false,
	secure: false,
	sameSite: 'lax',
	maxAge: 60 * 60 * 24 * 3
};