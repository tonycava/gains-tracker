import prisma from '$lib/server/db';

const getWorkoutByUserId = (userId: string) => {
	return prisma.workout.findMany({
		where: { userId },
		select: {
			date: true,
			id: true,
			name: true,
		},
		orderBy: { date: "desc" }
	});
};

export default {
	getWorkoutByUserId
};