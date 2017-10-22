module.exports = {
    plugins: {
      istanbul: {
        dir: "./test/coverage-report",
        reporters: ["text-summary", "lcov"],
        include: [
          "/t-component-api/t-component-api.html",
          "/t-component-api/t-hotel-search-api.html"
        ],
        exclude: ["/polymer/polymer.js", "/wecomponentsjs/webcomponents-lite.js"]
      },
      local: {
        browsers: ["chrome"]
      }
    }
  };
  