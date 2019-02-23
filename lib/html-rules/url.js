const { execRule } = require("./helpers");

function url($) {
  const selectors = [
    () => $('meta[property="og:url"]').attr("content"),
    () => $('meta[name="twitter:url"]').attr("content"),
    () => $('link[rel="canonical"]').attr("href"),
    () => $('link[rel="alternate"][hreflang="x-default"]').attr("href")
  ];

  return execRule(selectors);
}

module.exports = { url };
