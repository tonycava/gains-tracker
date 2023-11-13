import z from 'zod';
import { emailVerifier, passwordVerifier } from '$lib/dto/common';

export const loginDto = z.object({
	email: emailVerifier,
	password: passwordVerifier,
});

export type LoginDto = z.infer<typeof loginDto>;

export const registerDto = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
	email: emailVerifier,
	password: passwordVerifier,
	verifyPassword: passwordVerifier,
});

export type RegisterDto = z.infer<typeof registerDto>;