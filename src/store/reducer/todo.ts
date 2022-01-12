import { TODO_ADD, TODO_DEL } from '../action/actionType';
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
// type ActionType = {
//   type: string;
//   payload: string;
// };
export default function todoReducer(
  state = initialState,
  { type, payload }: any
) {
  switch (type) {
    case TODO_ADD:
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
    case TODO_DEL:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
}
