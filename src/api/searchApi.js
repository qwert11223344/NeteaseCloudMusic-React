import { http } from '@/plugin/axios';

class SearchApi {
  //搜索建议
  getSearchSuggest(keywords) {
    return http.request({
      url: '/search/suggest',
      params: {
        keywords
      }
    });
  }
}
export default new SearchApi();
