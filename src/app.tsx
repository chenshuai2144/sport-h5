import type { ResponseError } from 'alita';

fetch('https://proapi.azurewebsites.net/sport/sign/config', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: location.href,
  }),
})
  .then((res) => res.json())
  .then((msg) => {
    // @ts-ignore
    wx.config(msg.data);
  });

export const request = {
  prefix: '/api',
  method: 'get',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};
