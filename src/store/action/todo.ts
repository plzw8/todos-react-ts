import { TODO_ADD, TODO_CHECK, TODO_DEL, TODO_TYPE } from './actionType';

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
