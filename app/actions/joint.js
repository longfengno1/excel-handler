// @flow
// import type {GetState,Dispatch} from '../reducers/types';

export const INSERT_FILE = 'INSERT_FILE';
export const DELETE_FILE = 'DELETE_FILE';

export function insertFile() {
  return {
    type: INSERT_FILE
  };
}

export function deleteFile() {
  return {
    type: DELETE_FILE
  };
}
