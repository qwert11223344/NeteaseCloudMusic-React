import { combineReducers } from 'redux';
import recommendReducer from './recommend';
import topListReducer from './toplist';
import playListReducer from './playlist';
const reducer = combineReducers({
  recommendReducer,
  topListReducer,
  playListReducer
});
export default reducer;
