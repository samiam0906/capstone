import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

export const AUTHENTICATED = "AUTHENTICATED_USER";
export const UNAUTHENTICATED = "UNAUTHENTICATED_USER";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const URL = "http://localhost:8000";

export const userSignUpRequest = (userData) => {
  return dispatch => {
    return axios.post(URL, userData);
  }
}

export const doesUserExist = (identifier) => {
  return dispatch => {
    return axios.get(`${URL}/users/${identifier}`);
  }
}

// auth actions
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export const logIn = (data) => {
  return dispatch => {
    return axios.post(`${URL}/auth`, data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken)
      dispatch(setCurrentUser(decodedToken));
    });
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    // we will now have user logged out
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
}


export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
