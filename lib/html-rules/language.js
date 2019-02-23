const { execRule } = require("./helpers");
const { isString, lowerCase } = require("lodash");

function language($) {
  const selectors = [() => $('meta[property="og:locale"]').attr("content"), () => $("html").attr("lang")];

  const locale = execRule(selectors);

  return isString(locale) && lowerCase(locale.substring(0, 2));
}

module.exports = { language };
