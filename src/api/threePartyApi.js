const { http } = require('@/plugin/axios');

class ThreeParty {
  getCountryCity() {
    return http.request({
      url: '/countries/code/list'
    });
  }
}
export default new ThreeParty();
