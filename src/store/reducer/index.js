import { combineReducers } from 'redux';
import recommendReducer from './recommend';
import topListReducer from './toplist';
import playListReducer from './playlist';
import loginReducer from './login';
const reducer = combineReducers({
  recommendReducer,
  topListReducer,
  playListReducer,
  loginReducer
});
export default reducer;
