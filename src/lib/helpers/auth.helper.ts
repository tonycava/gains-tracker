import jwt from 'jsonwebtoken';
import type { JWTPayload } from '$lib/models/payload';

type TokenVerifier = { isValid: true, payload: JWTPayload } | { isValid: false, payload: null }

export const verifyToken = (token: string): TokenVerifier => {
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
		return { isValid: true, payload };
	} catch (err) {
		return { isValid: false, payload: null };
	}
};

