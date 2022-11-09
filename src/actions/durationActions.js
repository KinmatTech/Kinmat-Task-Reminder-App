const UPDATE_DURATION = 'UPDATE_DURATION';
const SET_DURATION = 'SET_DURATION';
const UPDATE_REMAINING_DURATION = 'UPDATE_REMAINING_DURATION';

export function updateDuration(duration) {
	return {
		type: UPDATE_DURATION,
		duration: duration,
		remainingDuration: duration,
	}
};

//set Duration simulate the asynchronous action.
export function setDuration(hour, minute, second) {
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: SET_DURATION,
				timeHour: hour,
				timeMinute: minute,
				timeSecond: second,
			});
		}, 2000);
	}
};

export function updateRemainingDuration(duration) {
	return {
		type: UPDATE_REMAINING_DURATION,
		remainingDuration: duration,
	}
};
