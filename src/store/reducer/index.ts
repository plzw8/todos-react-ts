import { combineReducers } from 'redux';
import todoReducer from './todo';

// export default rootReducer;
const rootReducer = combineReducers({
  todo: todoReducer,
});
export default rootReducer;
// 导出类型 防止报 DefaultRootState的错
// export type RootState = ReturnType<typeof rootReducer>;
