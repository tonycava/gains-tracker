import { writable } from 'svelte/store';
import type { User } from '$lib/models/payload';

export const user = writable<User>()