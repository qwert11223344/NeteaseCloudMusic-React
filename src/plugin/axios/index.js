import Axios from './Axios';
import { BaseUrl, timeout } from './config';
const http = new Axios({
  baseURL: BaseUrl,
  timeout,
  headers: {}
});

export { http };
