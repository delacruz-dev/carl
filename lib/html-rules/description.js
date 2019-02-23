const { execRule } = require("./helpers");

function description($) {
  const selectors = [
    () => $('meta[property="og:description"]').attr("content"),
    () => $('meta[name="twitter:description"]').attr("content"),
    () => $('meta[name="description"]').attr("content"),
    () => $('meta[itemprop="description"]').attr("content")
  ];

  return execRule(selectors);
}

module.exports = { description };
