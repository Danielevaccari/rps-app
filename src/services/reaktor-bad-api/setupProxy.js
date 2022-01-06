const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log('nyt');
  app.use(
    createProxyMiddleware('/rps/history', {
      target: 'https://bad-api-assignment.reaktor.com',
      changeOrigin: true,
      secure: false
    })
  );
};
