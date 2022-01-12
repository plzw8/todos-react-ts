import { TODO_ADD } from './actionType';

export const addActionCreator = (task: string) => {
  console.log('action触发了');
  return {
    type: TODO_ADD,
    payload: task,
  };
};
