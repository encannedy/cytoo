const fs = require("fs");
const inquirer= require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type:"input",
        message: "what is the title of your project?",
        name: "Title"
    },
    {
        type:"input",
        message: "Give a description of your project?",
        name: "Project Description"

    },
    {
        type:"input",
        message: "Please link to your github profile.",
        name: "github_username"
    },
    {
        type:"input",
        message: "what are the installation steps for this project?",
        name: "install"
    },
    {
        type:"input",
        message: "How is this project intended to be used?",
        name: "usage"
    },
    {
        type:"input",
        message: "Please list any licensing that was used in this project",
        name: "license"
    },
    {
        type:"input",
        message: "Please list any contributing developers on this project",
        name: "contributions"
    },
    {
        type:"input",
        message: "Please add any tests that were run for this project",
        name: "tests"
    }
]).then(function(data) {
    generateMarkdown(data)
  });


