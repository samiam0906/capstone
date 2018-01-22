// This file will combine all of our reducers into one object
// Possibly label rootReducer in re-org

import { combineReducers } from 'redux';
// import reducers here...
import { users } from './reducer_users';
import authReducer from './auth_reducer';
import flashMessages from './reducer_flashMessages';

const allReducers = combineReducers({
  users,
  flashMessages,
  auth: authReducer
});

export default allReducers;
