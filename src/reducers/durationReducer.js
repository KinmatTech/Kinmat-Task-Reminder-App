import { createStore, combineReducers, applyMiddleware } from 'redux';
import { updateDuration, updateRemainingDuration, setDuration } from '../actions/durationActions';

const UPDATE_DURATION = 'UPDATE_DURATION';
const SET_DURATION = 'SET_DURATION';
const UPDATE_REMAINING_DURATION = 'UPDATE_REMAINING_DURATION';

const initialState = {
	duration: 0,
	remainingDuration: 0,
  	timeHour: 0,
  	timeMinute: 0,
  	timeSecond: 20,
};

const durationReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_DURATION:
			return {
				duration: action.duration,
				remainingDuration: action.duration,
			};
			break;
		case SET_DURATION:
			return {
				timeHour: action.hour,
			  	timeMinute: action.minute,
			  	timeSecond: action.second,
			};
			break;
		case UPDATE_REMAINING_DURATION:
			return {
				remainingDuration: action.duration,
			};
			break;
		default:
			return state;
	}
}

export default durationReducer;