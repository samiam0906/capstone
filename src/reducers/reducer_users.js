import { userConstants } from '../constants/userConstants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.LOG_IN:
      return {

      };
    default:
      return state;
  }
}
