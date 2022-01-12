import {
  TODO_ADD,
  TODO_CHECK,
  TODO_DEL,
  TODO_TYPE,
} from '../action/actionType';
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
    {
      id: 2,
      task: 'react',
      isDone: true,
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
    case TODO_CHECK:
      return {
        ...state,
        list: state.list.map((item) => ({
          ...item,
          isDone: item.id === payload ? !item.isDone : item.isDone,
        })),
      };
    case TODO_TYPE:
      return {
        ...state,
        current: payload,
      };

    default:
      return state;
  }
}
