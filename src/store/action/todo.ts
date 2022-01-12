import { TODO_ADD, TODO_DEL } from './actionType';

export const addActionCreator = (task: string) => {
  return {
    type: TODO_ADD,
    payload: task,
  };
};
export const delActionCreator = (task: number) => {
  return {
    type: TODO_DEL,
    payload: task,
  };
};
