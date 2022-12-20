import React from "react";
import Select from "react-select";

const options = [
  { value: "UI/UX", label: "UI/UX" },
  { value: "Java", label: "Java" },
  { value: ".net", label: ".net" },
];

function CreateAccount() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div id="login-form-wrap">
      <h2>Create Account</h2>
      <form id="login-form">
        <p>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder="Domain"
        />

        <p>
          <input type="submit" id="login" value="submit" />
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
