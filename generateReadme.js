function generateReadme(answers) {
    const { title, description, installation, usage, license, contributing, githubUsername, email } = answers;
  
    // License badge URLs
    const licenseBadges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      GPLv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
      'BSD 2-clause': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      LGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
      AGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      None: ' '
    };

    let licenseSection = '';

    if(license === 'None'){
        licenseSection = ''
    }else {
        licenseSection = ` ## License
        This project is licensed under the ${license} license.`
    }

    let licenseLink;

    if(license === 'None'){
        licenseLink = '';
    }else{
        licenseLink = '- [License](#license)'
    }
  
    // Generate README content
    return `
  # ${title}
  
  ${licenseBadges[license]}
  
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${installation}
  \`\`\`
  
  ## Usage
  ${usage}
  
 ${licenseSection}
  
  ## Contributing
  ${contributing}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${githubUsername}](https://github.com/${githubUsername}).
  `;
  }
  
  module.exports = generateReadme;
  