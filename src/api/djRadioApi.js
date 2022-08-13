import { http } from '@/plugin/axios';

class DjRadioApi {
  getHotDj(limit) {
    return http.request({
      url: '/dj/hot',
      params: {
        limit
      }
    });
  }
}
export default new DjRadioApi();
