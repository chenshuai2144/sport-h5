import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  mobileLayout: false,
  mfsu: {},
  hash: false,
  npmClient: 'yarn',
  headScripts: ['http://res.wx.qq.com/open/js/jweixin-1.6.0.js'],
});
