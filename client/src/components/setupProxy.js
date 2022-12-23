const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("http://localhost:8080/users", {
      target: "http://localhost:8080/users",
      secure: false,
      changeOrigin: true
    })
  );

 
};
