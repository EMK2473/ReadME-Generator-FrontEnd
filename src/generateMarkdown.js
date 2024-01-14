function renderTableOfContents(data) {
  const entries = [
    { key: "description", title: "Description", anchor: "description" },
    { key: "installation", title: "Installation Requirements", anchor: "installation-requirements" },
    { key: "usage", title: "Application Usage", anchor: "application-usage" },
    { key: "license", title: "License", anchor: "licensing-information" },
    { key: "contributions", title: "Contributions", anchor: "contributions" },
    { key: "tests", title: "Tests Commands", anchor: "tests-commands" },
    { key: "video", title: "Link to Video Instructions", anchor: "link-to-video-instructions" },
    { key: "screenShot", title: "Screenshot", anchor: "screenshot" },
    { key: "email", github: "github", title: "Questions", anchor: "questions" },
  ];

  const tocEntries = entries
    .map(({ key, title, anchor }) => {
      if (key in data && data[key] !== "") {
        return `- [${title}](#${anchor})`;
      }
      return "";
    })
    .filter(Boolean);

  return tocEntries.length > 0 ? `## Table of Contents\n${tocEntries.join("\n")}` : "";
}

function renderSection(title, content) {
  return content ? `## ${title}\n${content}` : "";
}

function renderLicenseSection(license) {
  return license === "none"
    ? `![Github license](https://img.shields.io/badge/no-license-blue.svg)\r\n \r\n No license added.`
    : `![Github license](https://img.shields.io/badge/${license}-blue.svg)\r\n \r\n Licensing: [${license}](https://choosealicense.com/licenses/${license}/)`;
}

function renderScreenShotSection(screenShot) {
  return screenShot ? `## Screenshot\n![screenshot of application](${screenShot})` : "";
}

function renderQuestionSection(email, github) {
  return email && github !== ""
    ? `## Questions\nFor Questions, contact me at ${email} or visit My Github: [${github}](https://github.com/${github})`
    : "";
}

class Generator {
  constructor(data) {
    this.data = data;
  }

  generateMarkdown(data) {
    const sections = [
      renderSection("Description", data.description),
      renderSection("Installation Requirements", data.installation),
      renderSection("Application Usage", data.usage),
      renderSection("Contributions", data.contributions),
      renderSection("Test Commands", data.tests),
      renderSection("Link to Video Instructions", data.video),
      renderScreenShotSection(data.screenShot),
      renderQuestionSection(data.email, data.github),
    ];

    const renderedSections = sections.filter(Boolean).join("\n\n");

    return `# ${data.title}\n${renderLicenseSection(data.license)}\n\n${renderTableOfContents(data)}\n${renderedSections}`;
  }
}

module.exports = { Generator };
