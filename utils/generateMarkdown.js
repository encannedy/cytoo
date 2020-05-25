function generateMarkdown(data) {
  const fs = require("fs");
  let filename = "README.md";
  fs.writeFile(
    filename,
`# ${data.title}\n\n

[![NPM Badge](/npm/v/:scope/:packageName)](${data.githubprofile})\n\n

## Table of Contents\n\n
[Description](#Description)\n
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
## Contributing\n
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


