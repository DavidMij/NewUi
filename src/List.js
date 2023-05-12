import React, { useReducer, useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function List() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [fromDate, setDateFrom] = useState(null);
  const [toDate, setDateTo] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    var queryArray = {
      ...formData,
      from: fromDate !== null ? new Date(fromDate).toLocaleDateString() : "",
      to: toDate !== null ? new Date(toDate).toLocaleDateString() : "",
    };
    // List func here with  `queryArray`

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="list">
      <span className="title">Please tell us about your storage place:</span>
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <span className="field">
            <label>Storage name:</label>
            <input name="name" required onChange={setFormData} />
          </span>

          <span className="field">
            <label>Available space:</label>
            <input name="space" required onChange={setFormData} />
          </span>
          <span className="field">
            <label>Address:</label>
            <input name="address" required onChange={setFormData} />
          </span>

          <span className="field">
            <label>Price:</label>
            <input name="price" type="number" required onChange={setFormData} />
          </span>

          <span className="field">
            <label>Category:</label>
            <input name="category" required onChange={setFormData} />
          </span>
          <span className="field">
            <label>Description:</label>
            <textarea name="description" required onChange={setFormData} />
          </span>
          <span className="field field-big">
            <label className="dates-label">By Dates:</label>
            <span className="date-field">
              <label>From:</label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={setDateFrom}
                selected={fromDate}
                required
              />
            </span>
            <span className="date-field">
              <label>To:</label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={setDateTo}
                selected={toDate}
                required
              />
            </span>
          </span>
        </fieldset>
        <button className="siteBtn submitBtn" type="submit">
          {submitting ? "Signing up..." : "Sign me up"}
        </button>
      </form>
    </div>
  );
}

export default List;
