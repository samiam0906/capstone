// This file will combine all of our reducers into one object

import { combineReducers } from 'redux';
// import reducers here...
import UserReducer from './reducer_users';

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;