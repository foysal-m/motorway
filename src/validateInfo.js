const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.date_of_birth) {
    errors.date_of_birth = "Date of birth is required";
  }
  if (!values.favourite_colour) {
    errors.favourite_colour = "Favourite colour is required";
  }
  if (!values.salary) {
    errors.salary = "Salary is required";
  }

  return errors;
};

export default validate;
