import axios from 'axios';

const URL = "http://localhost:8000";

export function createEvent(event) {
  return dispatch => {
    return axios.post(`${URL}/events`, event);
  }
}
