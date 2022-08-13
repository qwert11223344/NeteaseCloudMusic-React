import { combineReducers } from 'redux';
import recommendReducer from './recommend';
import topListReducer from './toplist';
const reducer = combineReducers({ recommendReducer, topListReducer });
export default reducer;
