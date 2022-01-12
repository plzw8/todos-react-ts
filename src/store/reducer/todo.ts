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
export type ActionType =
  | {
      type: 'todo/add';
      payload: string;
    }
  | {
      type: 'todo/del';
      payload: number;
    }
  | {
      type: 'todo/check';
      payload: number;
    }
  | {
      type: 'todo/type';
      payload: string;
    }
  | {
      type: 'todo/clear';
    }
  | {
      type: 'todo/select';
      payload: boolean;
    };

export default function todoReducer(
  state = initialState,
  action: ActionType
): typeof initialState {
  switch (action.type) {
    case 'todo/add':
      return {
        ...state,
        list: [
          {
            id: Date.now(),
            task: action.payload,
            isDone: false,
          },
          ...state.list,
        ],
      };
    case 'todo/del':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case 'todo/check':
      return {
        ...state,
        list: state.list.map((item) => ({
          ...item,
          isDone: item.id === action.payload ? !item.isDone : item.isDone,
        })),
      };
    case 'todo/type':
      return {
        ...state,
        current: action.payload,
      };
    case 'todo/clear':
      return {
        ...state,
        list: state.list.filter((item) => !item.isDone),
      };
    case 'todo/select':
      return {
        ...state,
        list: state.list.map((item) => ({
          ...item,
          isDone: !action.payload,
        })),
      };
    default:
      return state;
  }
}
