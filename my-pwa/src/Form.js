import React, { useState } from "react";
import 'bulma/css/bulma.min.css';

const choices = [
    "agpl-3.0",
    "mpl-2.0",
    "apache-2.0",
    "mit",
    "bsl-1.0",
    "unlicense",
    "none",
  ]
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

  const [checkboxes, setCheckboxes] = useState({
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

  const handleCheckboxChange = (name) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use the formData state to send data to your server or perform other actions
  };

  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered">ReadMe Generator</h1>
      <div className="has-text-centered">
    <form onSubmit={handleSubmit} className="box custom-box-shadow">
      {/* Repeat similar structure for other form fields */}
      {/* Title */}
      <div className="field">
        <label className="label">
          Title:
          <input
            className="checkbox"
            type="checkbox"
            name="titleCheckbox"
            checked={checkboxes.title}
            onChange={() => handleCheckboxChange("title")}
          />
        </label>
        {checkboxes.title && (
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
          Description:
          <input
            className="checkbox"
            type="checkbox"
            name="descriptionCheckbox"
            checked={checkboxes.description}
            onChange={() => handleCheckboxChange("description")}
          />
        </label>
        {checkboxes.description && (
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

      {/* Repeat similar structure for other form fields */}
      {/* Installation */}
      <div className="field">
        <label className="label">
          Installation Requirements:
          <input
            className="checkbox"
            type="checkbox"
            name="installationCheckbox"
            checked={checkboxes.installation}
            onChange={() => handleCheckboxChange("installation")}
          />
        </label>
        {checkboxes.installation && (
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
          Application Usage:
          <input
            className="checkbox"
            type="checkbox"
            name="usageCheckbox"
            checked={checkboxes.usage}
            onChange={() => handleCheckboxChange("usage")}
          />
        </label>
        {checkboxes.usage && (
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
    License:
    <input
      className="checkbox"
      type="checkbox"
      name="licenseCheckbox"
      checked={checkboxes.license}
      onChange={() => handleCheckboxChange("license")}
    />
  </label>
  {checkboxes.license && (
    <div className="control">
      <div className="select">
        <select
          className="input"
          name="license"
          value={formData.license}
          onChange={handleChange}
        >
          <option value="" disabled>Select a license</option>
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
          Contributions:
          <input
            className="checkbox"
            type="checkbox"
            name="contributionsCheckbox"
            checked={checkboxes.contributions}
            onChange={() => handleCheckboxChange("contributions")}
          />
        </label>
        {checkboxes.contributions && (
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
          Test Commands:
          <input
            className="checkbox"
            type="checkbox"
            name="testsCheckbox"
            checked={checkboxes.tests}
            onChange={() => handleCheckboxChange("tests")}
          />
        </label>
        {checkboxes.tests && (
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
          GitHub Username:
          <input
            className="checkbox"
            type="checkbox"
            name="githubCheckbox"
            checked={checkboxes.github}
            onChange={() => handleCheckboxChange("github")}
          />
        </label>
        {checkboxes.github && (
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
          Email Address:
          <input
            className="checkbox"
            type="checkbox"
            name="emailCheckbox"
            checked={checkboxes.email}
            onChange={() => handleCheckboxChange("email")}
          />
        </label>
        {checkboxes.email && (
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
          Link to Video Instructions:
          <input
            className="checkbox"
            type="checkbox"
            name="videoCheckbox"
            checked={checkboxes.video}
            onChange={() => handleCheckboxChange("video")}
          />
        </label>
        {checkboxes.video && (
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
          Path to Screenshot:
          <input
            className="checkbox"
            type="checkbox"
            name="screenShotCheckbox"
            checked={checkboxes.screenShot}
            onChange={() => handleCheckboxChange("screenShot")}
          />
        </label>
        {checkboxes.screenShot && (
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
