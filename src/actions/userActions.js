import { userConstants } from '../constants/actionTypes';
import axios from 'axios';

// export const userActions = {
//   userSignUpRequest
// };

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const userSignUpRequest = (userData) => {
  return dispatch => {
    console.log(userData);
    return axios.post('http://localhost:8000', userData)
  }
}
