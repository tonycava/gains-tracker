export type LoginBodyPayload = {
	email: string,
	password: string
}

export type RegisterBodyPayload = {
	email: string,
	name: string,
	password: string,
	verifyPassword: string
}

	export type TokenHeader<T  = null> = {
	token: string
} & T

export type AuthResponseData = {
	token: string
}

export type JWTPayload = {
	id: string;
	email: string;
	name: string;
}

export type User = JWTPayload

export type CreateUserPayload = {
	email: string,
	name: string,
	password: string
}