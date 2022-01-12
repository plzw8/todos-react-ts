import { TODO_ADD } from '../action/actionType';
// 声明state的Type
type StateType = {
  list: {
    id: number;
    task: string;
    isDone: boolean;
  }[];
  current: string;
};
const initialState: StateType = {
  list: [
    {
      id: 1,
      task: 'hi',
      isDone: false,
    },
  ],
  current: 'all',
};

// 声明action的Type
type ActionType = {
  type: string;
  payload: string;
};
export default function todoReducer(
  state = initialState,
  { type, payload }: ActionType
) {
  switch (type) {
    case TODO_ADD:
      console.log('reducer执行');
      return {
        ...state,
        list: [
          {
            id: Date.now(),
            task: payload,
            isDone: false,
          },
          ...state.list,
        ],
      };

    default:
      return state;
  }
}
