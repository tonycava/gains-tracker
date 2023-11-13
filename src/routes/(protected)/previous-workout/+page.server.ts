import type { PageServerLoad } from './$types';
import WorkoutService from '@services/workout.service';

export const load: PageServerLoad = async ({ locals }) => {
	const workouts = await WorkoutService.getWorkoutByUserId(locals.user.id);

	return { workouts }
};