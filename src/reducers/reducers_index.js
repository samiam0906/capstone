// This file will combine all of our reducers into one object

import { combineReducers } from 'redux';
// import reducers here...
import { users } from './reducer_users';
import authReducer from './auth_reducer';

const allReducers = combineReducers({
  users,
  auth: authReducer
});

export default allReducers;
