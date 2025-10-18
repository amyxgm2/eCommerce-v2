import React, { useState } from "react";
import "./Contact.css";
import { validateForm } from "./validateForm.js";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    commentBox: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      // optional: send data to backend here
    }
  };

  return (
    <main>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Amy"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="formInput">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Gutierrez"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div className="formInput">
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="example@email.com"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
          </div>

          <div className="formInput">
            <label htmlFor="commentBox">Comment:</label>
            <textarea
              id="commentBox"
              name="commentBox"
              placeholder="Enter your comment here"
              value={formData.commentBox}
              onChange={handleChange}
            />
            {errors.commentBox && <p className="error">{errors.commentBox}</p>}
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
}

export default Form;
