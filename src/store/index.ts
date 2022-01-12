import { createStore } from 'redux';
import rootReducer from './reducer';
// 工具
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
export default store;
