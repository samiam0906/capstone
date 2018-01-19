import { userConstants } from '../constants/actionTypes';
import axios from 'axios';

// export const userActions = {
//   userSignUpRequest
// };

export const userSignUpRequest = (userData) => {
  return dispatch => {
    return axios.post('/signup', userData)
  }
}
