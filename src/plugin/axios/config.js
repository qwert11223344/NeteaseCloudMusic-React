const devBaseUrl = 'http://127.0.0.1:3000';
const prodBaseUrl = '';

export const BaseUrl =
  process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl;

export const timeout = 10000;
