import { DELETE_FLASH_MESSAGE } from '../constants/actionTypes';

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
