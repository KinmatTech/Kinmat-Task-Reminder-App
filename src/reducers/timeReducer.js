import { configureStore, combineReducers, applyMiddleware } from 'redux';
import { updateTime } from '../actions/timeActions';

const UPDATE_TIME = 'UPDATE_TIME';
const UPDATE_COLOR = 'UPDATE_COLOR';

const initialState = {
	time: new Date(),
	urgencyColor: 'black',
}

const timeReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TIME:
			return {
				time: action.time,
			};
			break;
		case UPDATE_COLOR:
			return {
				urgencyColor: action.urgencyColor,
			};
			break;
		default:
			return state;
	}
}

export default timeReducer;