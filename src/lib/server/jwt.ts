import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';
import type { JWTPayload } from '$lib/models/payload';
export const signJWTToken = (payload: JWTPayload) => {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "1d" })
}