import { json } from '@sveltejs/kit';

export class GTResponse {
	createResponse<T>(message: string, code: number, data: T | null = null) {
		return json({
			message,
			code,
			data
		}, { status: code });
	}
}
export const responseCreator = new GTResponse();

export type GTResponseData<T = null> = {
	message: string
	code: number
	data: T
}

export type FormFailure = {
	internalError: string
}