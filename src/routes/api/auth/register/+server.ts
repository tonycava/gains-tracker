import type { RequestHandler } from '@sveltejs/kit';
import { responseCreator } from '$lib/server/response';
import AuthService from '@services/auth.service';
import { zodParse } from '$lib/server/zod.parser';
import { registerDto, type RegisterDto } from '$lib/dto/auth.dto';
import { signJWTToken } from '$lib/server/jwt';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const parsedBody = zodParse<RegisterDto>(body, registerDto);

	if (!parsedBody.isValid) {
		return responseCreator.createResponse(parsedBody.message.message, 400);
	}

	const userExists = await AuthService.getUserByEmail(body.email);
	if (userExists) return responseCreator.createResponse('Email already taken', 400);

	if (parsedBody.body.password !== parsedBody.body.verifyPassword) {
		return responseCreator.createResponse('Password and confirm password must be the same', 400);
	}

	const hashedPassword = await bcrypt.hash(parsedBody.body.password, 10);

	const user = await AuthService
		.createUser({ email: parsedBody.body.email, name: parsedBody.body.name, password: hashedPassword });


	const token = signJWTToken({ id: user.id, email: user.email, name: user.name });
	return responseCreator.createResponse('Register successfully', 201, { token });
};