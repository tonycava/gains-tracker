export const getRelativeTime = (date: Date) => {
	const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto', style: 'long' });
	const timeInMillis = new Date(date).getTime() - new Date().getTime();
	switch (true) {
		case -timeInMillis < 1000 * 60:
			return formatter.format(Math.round(timeInMillis / 1000), 'second');
		case -timeInMillis < 1000 * 60 * 60:
			return formatter.format(Math.round(timeInMillis / 1000 / 60), 'minute');
		case -timeInMillis < 1000 * 60 * 60 * 24:
			return formatter.format(Math.round(timeInMillis / 1000 / 60 / 60), 'hour');
		case -timeInMillis < 1000 * 60 * 60 * 24 * 7:
			return formatter.format(Math.round(timeInMillis / 1000 / 60 / 60 / 24), 'day');
		case -timeInMillis < 1000 * 60 * 60 * 24 * 7 * 4:
			return formatter.format(Math.round(timeInMillis / 1000 / 60 / 60 / 24 / 7), 'week');
		case -timeInMillis < 1000 * 60 * 60 * 24 * 7 * 4 * 12:
			return formatter.format(Math.round(timeInMillis / 1000 / 60 / 60 / 24 / 7 / 4), 'month');
		default:
			return formatter.format(Math.round(timeInMillis / 1000 / 60 / 60 / 24 / 7 / 4 / 12), 'year');
	}
};