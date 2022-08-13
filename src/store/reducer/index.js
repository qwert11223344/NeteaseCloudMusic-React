import { combineReducers } from 'redux';
import recommendReducer from './recommend';
const reducer = combineReducers({ recommendReducer });
export default reducer;
