import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { Generator } from "./generateMarkdown"; // Update the path based on your file structure

const choices = [
  "agpl-3.0",
  "mpl-2.0",
  "apache-2.0",
  "mit",
  "bsl-1.0",
  "unlicense",
  "none",
];

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    tests: "",
    github: "",
    email: "",
    video: "",
    screenShot: "",
  });

  const [buttonStates, setButtonStates] = useState({
    title: false,
    description: false,
    installation: false,
    usage: false,
    license: false,
    contributions: false,
    tests: false,
    github: false,
    email: false,
    video: false,
    screenShot: false,
  });

  const handleButtonClick = (name) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [name]: !prevButtonStates[name],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const generateMarkdownContent = () => {
    // Use the Generator class to generate the Markdown content
    const generator = new Generator(formData);
    return generator.generateMarkdown(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate the Markdown content on submit
    const markdownContent = generateMarkdownContent();

    // Write the Markdown content to a README.md file
    const blob = new Blob([markdownContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "README.md";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered has-text-white">ReadMe.md Generator</h1>
      <div className="has-text-centered">
        <form onSubmit={handleSubmit} className="box custom-box-shadow" id="form">
          {/* Repeat similar structure for other form fields */}
          {/* Title */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.title ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("title")}
              >
                Add Title
              </button>
            </label>
            {buttonStates.title && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.description ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("description")}
              >
                Add Description
              </button>
            </label>
            {buttonStates.description && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Installation */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.installation ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("installation")}
              >
                Add Installation Details
              </button>
            </label>
            {buttonStates.installation && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="installation"
                  value={formData.installation}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Usage */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.usage ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("usage")}
              >
                Add Usage Details
              </button>
            </label>
            {buttonStates.usage && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="usage"
                  value={formData.usage}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* License */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.license ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("license")}
              >
                Add License Details
              </button>
            </label>
            {buttonStates.license && (
              <div className="control">
                <div className="select">
                  <select
                    className="input"
                    name="license"
                    value={formData.license}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a license
                    </option>
                    {choices.map((choice) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Contributions */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.contributions ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("contributions")}
              >
                Add Contribution Details
              </button>
            </label>
            {buttonStates.contributions && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="contributions"
                  value={formData.contributions}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Tests */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.tests ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("tests")}
              >
                Add Test Details
              </button>
            </label>
            {buttonStates.tests && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="tests"
                  value={formData.tests}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* GitHub */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.github ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("github")}
              >
                Add GitHub Username
              </button>
            </label>
            {buttonStates.github && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Email */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.email ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("email")}
              >
                Add Email Address
              </button>
            </label>
            {buttonStates.email && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Video */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.video ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("video")}
              >
                Add (URL) Link to Video
              </button>
            </label>
            {buttonStates.video && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="video"
                  value={formData.video}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Screenshot */}
          <div className="field">
            <label className="label">
              <button
                className={`button ${buttonStates.screenShot ? "is-white" : "is-black"}`}
                type="button"
                onClick={() => handleButtonClick("screenShot")}
              >
                Add ./pathTo/screenShot.png
              </button>
            </label>
            {buttonStates.screenShot && (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="screenShot"
                  value={formData.screenShot}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
