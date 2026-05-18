const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://47.95.178.169:18789',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
