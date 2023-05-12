import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function SignIn() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    // Sign In func here with  `formData`
    console.log(formData);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="sign">
      <span className="title">Good to have you back!</span>
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <span className="field">
            <label>Email:</label>
            <input name="email" required type="email" onChange={setFormData} />
          </span>

          <span className="field">
            <label>Password:</label>
            <input
              name="password"
              required
              type="password"
              onChange={setFormData}
            />
          </span>
        </fieldset>
        <button className="siteBtn submitBtn" type="submit">
          {submitting ? "Loging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
