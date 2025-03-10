const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://https://port-0-cheesy-backend-m82xd98hcfdf2a62.sel4.cloudtype.app/",
      changeOrigin: true,
      secure: false,
    })
  );
};
