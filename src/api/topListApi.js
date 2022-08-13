import { http } from '@/plugin/axios';

class TopList {
  getTopList() {
    return http.request({
      url: '/toplist'
    });
  }
  getTopListDetail(id) {
    return http.request({
      url: '/playlist/detail',
      params: {
        id
      }
    });
  }
}

export default new TopList();
