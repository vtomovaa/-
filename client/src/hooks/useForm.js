import { useState } from "react";

export const useForm = (onSubmitHandler, initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;

        setValues({
        ...values,
        [name]: value,
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};
