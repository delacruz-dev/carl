const { execRule } = require("./helpers");

function author($) {
  const selectors = [
    () => $('meta[property="author"]').attr("content"),
    () => $('meta[property="article:author"]').attr("content")
  ];

  return execRule(selectors);
}

module.exports = { author };
