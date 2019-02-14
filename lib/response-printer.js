const printResponse = response => {
  console.log(response.status);
  console.log(response.contentType);
  console.log(response.contentEncoding);
  console.log("Showing a structured version of the body response:");
  console.log(response.body);
};

module.exports = { printResponse };
