import commentApi from '@/api/commentApi';
import types from './actionTypes';

export const changeTotalComment = payload => ({
  type: types.CHANGE_TOTAL_COMMENT,
  payload
});
