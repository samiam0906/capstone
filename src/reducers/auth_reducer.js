import { SET_CURRENT_USER, AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/userActions';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
