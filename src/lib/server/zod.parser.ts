import type { ZodIssue, ZodSchema } from 'zod';

type ParsedBody<T> = {
    isValid: true
    body: T
} | {
    isValid: false
    message: ZodIssue
}

export const zodParse = <T>(body: T, schema: ZodSchema<T>): ParsedBody<T> => {
    const parsed = schema.safeParse(body);
    if (parsed.success) return { isValid: true, body };
    return { isValid: false, message: parsed.error.errors[0] }
};