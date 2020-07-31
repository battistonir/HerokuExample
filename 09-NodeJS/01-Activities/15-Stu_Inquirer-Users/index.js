var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages",
    },
    {
      type: "input",
      message: "What is your preferred method of communciation?",
      name: "confirm"
    }
  ])
  .then(function(response) {
    fs.writeFile('user.json',JSON.stringify(response, null, ' '), function(error){

        
    }
    ))
    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });