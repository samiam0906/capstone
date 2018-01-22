import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/actionTypes';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default function(state = [], action = {}) {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        console.log(state);
        let newState = state.slice(state.splice(index, 1));
        console.log(newState)
        return state.slice(state.splice(index, 1));
      }
      return state;
    default:
      return state;
  }
}
