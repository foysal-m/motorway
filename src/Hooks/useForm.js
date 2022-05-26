import { useState } from "react";
import { PostFormData } from "../apiService";
import validate from "../validateInfo";

function useForm() {
  const initialValues = {
    name: "",
    email: "",
    date_of_birth: "",
    favourite_colour: "",
    salary: 0,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    PostFormData(formValues);
    setFormValues(initialValues);
    setIsSubmit(true);
  };

  return { handleChange, handleSubmit, formErrors, formValues };
}

export default useForm;
