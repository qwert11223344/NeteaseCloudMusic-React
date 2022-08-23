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
  //搜索关键字
  getSearchKeyWords(keywords, type, limit, offset) {
    return http.request({
      url: '/cloudsearch',
      params: {
        keywords,
        type,
        limit,
        offset
      }
    });
  }
}
export default new SearchApi();
