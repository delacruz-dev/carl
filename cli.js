#!/usr/bin/env node
require("es6-promise").polyfill();
require("isomorphic-fetch");
const prompt = require("./lib/prompt");

const [, , ...args] = process.argv;
let url = args[0];

if (!url) {
  prompt()
    .then(responses => {
      url = responses.url;
    })
    .then(() => {
      fetch(url)
        .then(r => r.json())
        .then(console.log)
        .catch(console.error);
    });
}
