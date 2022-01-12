import { createStore } from 'redux';
import rootReducer from './reducer';
// 工具
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());
export default store;

// 处理RootState的报错
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
