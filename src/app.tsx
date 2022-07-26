import type { ResponseError } from 'alita';

export const request = {
  prefix: '/api',
  method: 'get',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};
