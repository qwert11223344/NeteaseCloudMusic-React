import { http } from '@/plugin/axios';

class RecommendApi {
  getBanners() {
    return http.request({
      url: '/banner'
    });
  }
  getHotRecommend(limit) {
    return http.request({
      url: '/personalized',
      params: { limit }
    });
  }
  getNewAlbum() {
    return http.request({
      url: '/album/newest'
    });
  }

  getSettleArtist(limit) {
    return http.request({
      url: '/artist/list',
      params: {
        limit
      }
    });
  }
}
export default new RecommendApi();
