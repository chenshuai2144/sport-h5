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
};
