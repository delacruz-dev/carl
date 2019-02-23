const { execRule } = require("./helpers");

function publisher($) {
  const selectors = [
    () => $('meta[property="og:site_name"]').attr("content"),
    () => $('meta[name="application-name"]').attr("content"),
    () => $('meta[property="al:android:app_name"]').attr("content"),
    () => $('meta[property="al:iphone:app_name"]').attr("content"),
    () => $('meta[property="al:ipad:app_name"]').attr("content"),
    () => $('meta[name="publisher"]').attr("content"),
    () => $('meta[name="twitter:app:name:iphone"]').attr("content"),
    () => $('meta[name="twitter:app:name:ipad"]').attr("content"),
    () => $('meta[name="twitter:app:name:googleplay"]').attr("content"),
    () => $("#logo").text(),
    () => $(".logo").text(),
    () => $('a[class*="brand"]').text(),
    () => $('[class*="brand"]').text(),
    () => $('[class*="logo"] a img[alt]').attr("alt"),
    () => $('[class*="logo"] img[alt]').attr("alt")
  ];

  return execRule(selectors);
}
module.exports = { publisher };
