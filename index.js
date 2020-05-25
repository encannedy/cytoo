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
    }
]).then(function(data) {
    generateMarkdown(data)
  });


// ;

// function writeToFile(fileName, data) {
// //fs write file name etc
// // fs.writeFile("log.txt", process.argv[2], function(err) {

// //   if (err) {
// //     return console.log(err);
// //   }

// //   console.log("Success!");

// // });

// }

// function init() {
//     inquirer.prompt(questions).then(function(answers){
            
//             answers.table=
//             `# Table of Contents
//             ## ${answers.license}
            
//             # ${answers.usage}`

//             //continue to to input table info

//             var data = generateMarkdown(answers)
//             if (answers.type == "cli"){
//                 inquirer.prompt([/*put CLI questions here*/])
//             }
//             //put writeToFile inside the .then because you're using the object generated inside the .then promise
//     } 
//         )
// }

// init();
