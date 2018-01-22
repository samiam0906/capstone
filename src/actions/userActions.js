import { userConstants } from '../constants/actionTypes';
import axios from 'axios';

// export const userActions = {
//   userSignUpRequest
// };

export const AUTHENTICATED = "AUTHENTICATED_USER";
export const UNAUTHENTICATED = "UNAUTHENTICATED_USER";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

const URL = "http://localhost:8000";

export const userSignUpRequest = (userData) => {
  return dispatch => {
    return axios.post(URL, userData);
  }
}

export const logIn = (data) => {
  return dispatch => {
    return axios.post(`${URL}/auth`, data);
  }
}

export const doesUserExist = (identifier) => {
  return dispatch => {
    return axios.get(`${URL}/users/${identifier}`);
  }
}

// export function signInAction({ email, password }, history) {
//   return async (dispatch) => {
//     try {
//       const res = await axios.post(`${URL}/login`, { email, password });
//
//       dispatch({ type: AUTHENTICATED });
//       localStorage.setItem('user', res.data.token);
//       history.push('/secret');
//     } catch(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         payload: "Invalid email or password"
//       });
//     }
//   };
// }

export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
