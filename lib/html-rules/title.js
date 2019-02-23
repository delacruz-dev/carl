const { execRule } = require("./helpers");

function title($) {
  const selectors = [
    () => $("title").text(),
    () => $('meta[property="og:title"]').attr("content"),
    () => $('meta[name="twitter:title"]').attr("content"),
    () => $(".post-title").text(),
    () => $(".entry-title").text(),
    () => $('h1[class*="title"] a').text(),
    () => $('h1[class*="title"]').text()
  ];

  return execRule(selectors);
}
module.exports = { title };
