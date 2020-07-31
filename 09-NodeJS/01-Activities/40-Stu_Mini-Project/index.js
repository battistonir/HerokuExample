// DEPENDENCIES
//  FS and Inquirer
// inquirer - for terminal prompts
const inquirer = require("inquirer");
// fs - for file working
const fs = require("fs");
const util = require("util");
//  Promisify
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  return inquirer.prompt([
    {
      title: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      title: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      title: "input",
      message: "What is your bio?",
      name: "bio",
    },
    {
      title: "input",
      message: "What is your LinkedIn Link?",
      name: "linkedin",
    },
    {
      title: "input",
      message: "What is your GitHub name?",
      name: "github",
    },
  ]);
}
function generateHTML(answer) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mini Create Portfolio Page</title>
    </head>
    <body>
      <h1>Portfolio Page</h1>
      <h3>name</h3>
      <p id="name">${answer.name}</p>
      <h3>location</h3>
      <p id="location">${answer.location}</p>
      <h3>bio</h3>
      <p id="bio">${answer.bio}</p>
      <h3>LinkedIn URL</h3>
      <p id="linkedin"><a href="${answer.linkedin}">LinkedIn Link</a></p>
      <h3>GitHub URL</h3>
      <p id="github" ><a href="https://github.com/${answer.github}">github link</a></p>
    </body>
  </html>
    `;
}
module.exports = generateHTML;
// FUNCTIONS
//  readfile
// function readFileSynce
// //  write user prompts to html file
// //  generateHTML to inlcudes data collected from the prompts
// function generateHTML (){
//     return ``
// }
// function to write file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//   });
// }
//  init
async function init() {
  try {
    const answer = await promptUser();
    console.log(answer);
    const html = generateHTML(answer);
    await writeFileAsync("index.html", html);
  } catch (err) {
    console.log(err);
  }
}
// function call to initialize program
init();
// DISPLAY
//  Array of questions
// USER INPUT
//  create prompts for user input
