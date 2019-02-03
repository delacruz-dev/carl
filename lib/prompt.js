const inquirer = require("inquirer");
const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

const prompts = [
  {
    type: "input",
    name: "url",
    message: "Write or paste the url you want to use",
    validate: input => {
      if (!input) {
        return "The url can't be empty";
      }
      if (!urlRegex.test(input)) {
        return "That's not a valid URL";
      }
      return true;
    }
  }
];

module.exports = async function prompt() {
  return await inquirer.prompt(prompts);
};
