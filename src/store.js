import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import timeReducer from './reducers/timeReducer';
import durationReducer from './reducers/durationReducer';

const store = createStore(
  combineReducers({timeReducer, durationReducer}),
  applyMiddleware(thunk)
);

export default store;