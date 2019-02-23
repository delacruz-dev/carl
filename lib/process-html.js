const cheerio = require("cheerio");
const { author } = require("./html-rules/author");
const { url } = require("./html-rules/url");
const { title } = require("./html-rules/title");
const { publisher } = require("./html-rules/publisher");
const { language } = require("./html-rules/language");
const { description } = require("./html-rules/description");

const processHtml = html => {
  const $ = cheerio.load(html);

  return {
    title: title($),
    description: description($),
    language: language($),
    author: author($),
    publisher: publisher($),
    url: url($)
  };
};

module.exports = { processHtml };
