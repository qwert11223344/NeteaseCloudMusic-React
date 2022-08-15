import { http } from '@/plugin/axios';

class qrCodeApi {
  getQrCodeKey(timerstamp = Date.now()) {
    return http.request({
      url: '/login/qr/key',
      params: {
        timerstamp
      }
    });
  }
  createQrCode(key, qrimg = true, timerstamp = Date.now()) {
    return http.request({
      url: '/login/qr/create',
      params: {
        key,
        qrimg,
        timerstamp
      }
    });
  }
  checkQrCode(key, timerstamp = Date.now()) {
    return http.request({
      url: '/login/qr/check',
      params: {
        key,
        timerstamp
      }
    });
  }
}

export default new qrCodeApi();
