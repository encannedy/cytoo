function generateMarkdown(data) {
  const fs = require("fs");
  let filename = "README.md";
  fs.writeFile(
    filename,

`# ${data.title}\n\n

[![Github Badge](https://img.shields.io/badge/Github-Profile-brightgreen)](${data.github})\n\n

## Table of Contents\n\n
[Title](#Title)\n
[Describe](#Describe)\n
[Github](#github)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributors](#Contributors)\n
[Tests](#Tests)\n\n

## Describe\n
${data.describe}\n\n
## Github\n
${data.github}\n\n
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


