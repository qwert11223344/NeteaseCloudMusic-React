import { combineReducers } from 'redux';
import recommendReducer from './recommend';
import topListReducer from './toplist';
import playListReducer from './playlist';
import loginReducer from './login';
import playBarReducer from './playbar';
import commentReducer from './comment';
const reducer = combineReducers({
  recommendReducer,
  topListReducer,
  playListReducer,
  loginReducer,
  playBarReducer,
  commentReducer
});
export default reducer;
