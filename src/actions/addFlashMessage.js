import { ADD_FLASH_MESSAGE } from '../constants/actionTypes';

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}
