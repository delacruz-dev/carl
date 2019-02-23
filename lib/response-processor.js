const chalk = require("chalk");
const cheerio = require("cheerio");

const processResponse = async response => {
  return {
    status: processStatus(response),
    contentType: processContentType(response),
    contentEncoding: processContentEncoding(response),
    body: await processBody(response)
  };
};

const processStatus = response => {
  return `Response Status Code: ${chalk.cyan(response.status)}`;
};

const processContentType = response => {
  const contentType = response.headers.get("content-type");

  if (!contentType) {
    return `Content-Type: ${chalk.yellow("undefined")}`;
  }

  if (contentType.indexOf("application/json") !== -1) {
    return `Content-Type: ${chalk.cyan("json")}`;
  }

  if (contentType.indexOf("text/html") !== -1) {
    return `Content-Type: ${chalk.cyan("html")}`;
  }
};

const processContentEncoding = response => {
  const contentEncoding = response.headers.get("content-encoding");

  return `Content-Encoding: ${contentEncoding}`;
};

const processBody = async response => {
  const contentType = response.headers.get("content-type");
  if (!contentType) {
    return;
  }

  if (contentType.indexOf("application/json") !== -1) {
    return await response.json();
  }

  if (contentType.indexOf("text/html") !== -1) {
    const text = await response.text();
    return processHtml(text);
  }
};

const processHtml = html => {
  const $ = cheerio.load(html);

  return {
    title: $("title").text(),
    description: $('meta[name="description"]').attr("content"),
    language: $('meta[property="og:locale"]').attr("content"),
    author: $('meta[name="author"]').attr("content"),
    publisher: "",
    url: ""
  };
};

module.exports = { processResponse };
