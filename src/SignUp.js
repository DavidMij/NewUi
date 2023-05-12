import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function SignUp() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    // Sign Up func here with  `formData`
    console.log(formData);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="sign">
      <span className="title">Sign Up</span>
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <span className="field">
            <label>Full name:</label>
            <input name="fullname" required onChange={setFormData} />
          </span>

          <span className="field">
            <label>Id Number:</label>
            <input name="id" required onChange={setFormData} />
          </span>
          <span className="field">
            <label>Email:</label>
            <input name="email" required type="email" onChange={setFormData} />
          </span>

          <span className="field">
            <label>Phone:</label>
            <input name="phone" required onChange={setFormData} />
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
          {submitting ? "Signing up..." : "Sign me up"}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
