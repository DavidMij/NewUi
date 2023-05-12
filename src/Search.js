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

function Search() {
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
    console.log(queryArray);

    // search func here with  `queryArray`

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="search">
      <span className="title">How can we focus your search?</span>
      <form onSubmit={handleSubmit}>
        <fieldset className="form">
          <span className="field">
            <label>By Location:</label>
            <input name="location" onChange={setFormData} />
          </span>

          <span className="field">
            <label>By Price:</label>
            <input name="price" onChange={setFormData} />
          </span>

          <span className="field">
            <label>By Category:</label>
            <input name="category" onChange={setFormData} />
          </span>

          <span className="field">
            <label>By Space:</label>
            <input name="space" onChange={setFormData} />
          </span>

          <span className="field field-big">
            <label className="dates-label">By Dates:</label>
            <label>From:</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              onChange={setDateFrom}
              selected={fromDate}
            />
            <label>To:</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              onChange={setDateTo}
              selected={toDate}
            />
          </span>
        </fieldset>

        <button className="siteBtn submitBtn" type="submit">
          {submitting ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default Search;
