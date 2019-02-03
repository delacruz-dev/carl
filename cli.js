#!/usr/bin/env node
require("es6-promise").polyfill();
require("isomorphic-fetch");
const prompt = require("./lib/prompt");

const [, , ...args] = process.argv;
let url = args[0];
let headers = args.includes("-H") || args.includes("--headers");

const doFetch = () => {
  fetch(url)
    .then(processResponse)
    .then(console.log)
    .catch(console.error);
};

const processResponse = response => {
  if (headers) {
    return response.headers._headers;
  }
  return response.json();
};

if (!url) {
  prompt()
    .then(responses => {
      url = responses.url;
    })
    .then(doFetch);
} else {
  doFetch();
}
