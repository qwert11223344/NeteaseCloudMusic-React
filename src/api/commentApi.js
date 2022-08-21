import { http } from '@/plugin/axios';

class CommentApi {
  //歌曲评论
  getSongComment(id, limit, offset, before) {
    return http.request({
      url: '/comment/music',
      params: { id, limit, offset, before }
    });
  }
}
export default new CommentApi();
