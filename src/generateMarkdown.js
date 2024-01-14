function renderLicenseSection(license) {
  if (license === "none") {
    return `![Github license](https://img.shields.io/badge/no-license-blue.svg)\r\n \r\n
    No license added.`;
  } else {
    return `![Github license](https://img.shields.io/badge/${license}-blue.svg)\r\n \r\n Licensing: [${license}](https://choosealicense.com/licenses/${license}/)`;
  }
}
class Generator {
  constructor(data) {
    this.data = data;
  }
  generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseSection(data.license)}
    
## Table of Contents
  
- [Description](#description)
- [Installation](#installation-requirements)
- [Usage](#application-usage)
- [License](#licensing-information)
- [Contributions](#contributions)
- [Tests](#tests-commands)
- [Video Link](#link-to-video-instructions)
- [Screenshot](#screenshot)
- [Questions](#questions)
  
## Description
${data.description}
  
## Installation Requirements
${data.installation}
  
## Application Usage
${data.usage}
    
## Contributions
${data.contributions}
  
## Test Commands
${data.tests}
  
## Link to Video Instructions
${data.video}
  
## Screenshot
![screenshot of application](${data.screenshot})
  
## Questions
For Questions, contact me at ${data.email} ovisit My Github: [${
  data.github
}](https://github.com/${data.github})
  
  `;
  }
}
module.exports = { Generator };
