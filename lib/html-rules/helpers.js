function execRule(selectors) {
  for (const selector of selectors) {
    const result = selector();
    if (!!result) {
      return result;
    }
  }
}

module.exports = { execRule };
