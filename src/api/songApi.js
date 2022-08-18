import { http } from '@/plugin/axios';

class songApi {
  getSongDetail(ids) {
    return http.request({
      url: '/song/detail',
      params: {
        ids: ids.join(',')
      }
    });
  }
  getSongUrl(id) {
    return http.request({
      url: '/song/url',
      params: {
        id
      }
    });
  }
}

export default new songApi();
