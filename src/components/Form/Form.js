import React from "react";
import useForm from "../../Hooks/useForm";
import "./Form.css";

function Form() {
  const { handleChange, formValues, handleSubmit, formErrors } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && <p>{formErrors.name}</p>}
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
          data-testid="email-input"
        />
        {formErrors.email && <p data-testid="error-msg">{formErrors.email}</p>}
      </div>

      <div className="field">
        <label>Date of Birth</label>
        <input
          type="text"
          name="date_of_birth"
          placeholder="date of birth"
          value={formValues.date_of_birth}
          onChange={handleChange}
        />
        {formErrors.date_of_birth && <p>{formErrors.date_of_birth}</p>}
      </div>

      <div className="field">
        <label>Favourite Colour</label>
        <input
          type="text"
          name="favourite_colour"
          placeholder="favourite colour"
          value={formValues.favourite_colour}
          onChange={handleChange}
        />
        {formErrors.favourite_colour && <p>{formErrors.favourite_colour}</p>}
      </div>
      <div className="field">
        <label>Salary</label>
        <div className="salary">
          <input
            type="range"
            name="salary"
            min="30"
            max="100"
            placeholder="salary"
            value={formValues.salary}
            onChange={handleChange}
          />
          {formValues.salary ? (
            <p data-testid="input-range">£ {formValues.salary}K</p>
          ) : null}
        </div>
        {formErrors.salary && (
          <p className="salaryError">{formErrors.salary}</p>
        )}
      </div>

      <button>Submit</button>
    </form>
  );
}

export default Form;
