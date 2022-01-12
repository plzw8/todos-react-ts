import {
  TODO_ADD,
  TODO_CHECK,
  TODO_CLEAR,
  TODO_DEL,
  TODO_SELECT_ALL,
  TODO_TYPE,
} from './actionType';

export const addActionCreator = (task: string) => {
  return {
    type: TODO_ADD,
    payload: task,
  };
};
export const delActionCreator = (id: number) => {
  return {
    type: TODO_DEL,
    payload: id,
  };
};
export const checkActionCreator = (id: number) => {
  return {
    type: TODO_CHECK,
    payload: id,
  };
};
export const changeTypeActionCreator = (type: string) => {
  return {
    type: TODO_TYPE,
    payload: type,
  };
};
export const clearTypeActionCreator = () => {
  return {
    type: TODO_CLEAR,
  };
};
export const selectAllTypeActionCreator = (isSelectAll: boolean) => {
  return {
    type: TODO_SELECT_ALL,
    payload: isSelectAll,
  };
};
