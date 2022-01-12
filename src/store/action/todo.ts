import { TODO_ADD, TODO_CHECK, TODO_DEL } from './actionType';

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
