const UPDATE_TIME = 'UPDATE_TIME';
const UPDATE_COLOR = 'UPDATE_COLOR';

export function updateTime(time) {
	return {
		type: UPDATE_TIME,
		time: time,
	}
};

export function updateColor(color) {
	return {
		type: UPDATE_COLOR,
		urgencyColor: color,
	}
};