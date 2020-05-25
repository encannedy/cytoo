function generateMarkdown(data) {
  const fs = require("fs");
  let filename = "README.md";
  fs.writeFile(
    filename,
`# ${data.title}\n\n

[![Github Badge](https://img.shields.io/badge/Github-Profile-brightgreen)](${data.githubprofile})\n\n

## Table of Contents\n\n
[Title](#Title)\n
[Description](#Description)\n
[Github_username](#github_username)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributors](#Contributors)\n
[Tests](#Tests)\n\n
## Description\n
${data.description}\n\n
## Installation\n
${data.install}\n\n
## Usage\n
${data.usage}\n\n
## License\n
${data.license}\n\n
## Contributions\n
${data.contributions}\n\n
## Tests\n
${data.test}
`,

    function (err) {
      if (err) {
        return console.log(err)
      } else {
        console.log("Success! Your README.md has been generated.");
      }
    }
  );
}

module.exports = generateMarkdown;


