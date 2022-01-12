import { ActionType } from '../reducer/todo';

export const addActionCreator = (task: string): ActionType => {
  return {
    type: 'todo/add',
    payload: task,
  };
};
export const delActionCreator = (id: number): ActionType => {
  return {
    type: 'todo/del',
    payload: id,
  };
};
export const checkActionCreator = (id: number): ActionType => {
  return {
    type: 'todo/check',
    payload: id,
  };
};
export const changeTypeActionCreator = (type: string): ActionType => {
  return {
    type: 'todo/type',
    payload: type,
  };
};
export const clearTypeActionCreator = (): ActionType => {
  return {
    type: 'todo/clear',
  };
};
export const selectAllTypeActionCreator = (
  isSelectAll: boolean
): ActionType => {
  return {
    type: 'todo/select',
    payload: isSelectAll,
  };
};
