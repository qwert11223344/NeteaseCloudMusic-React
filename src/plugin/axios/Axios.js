import axios from 'axios';

export default class Axios {
  instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    //拦截
    this.interceptors();
  }
  interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  request(config) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  interceptorsRequest() {
    this.instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }
  interceptorsResponse() {
    this.instance.interceptors.response.use(
      response => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      error => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              console.log('请求参数错误');
              break;
            case 401:
              console.log('未授权访问');
              break;
            case 500:
              console.log('服务器开小差了');
              break;
            default:
              console.log('其他错误信息');
          }
        }
        return Promise.reject(error);
      }
    );
  }
}
