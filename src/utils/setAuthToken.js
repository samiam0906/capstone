import axios from 'axios';

// if we provide token we want to add headers to
// each request
// we use this function in two places:
// when user logs in and when user reloads the page
export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
