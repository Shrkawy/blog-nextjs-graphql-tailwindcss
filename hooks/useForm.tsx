import { useState, ChangeEvent, useCallback, FormEvent } from "react";

export interface FormValues {
  [key: string]: {
    value: string;
    hasError: boolean;
  };
}

export const useForm = (initFormValues: FormValues) => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      const name = e.target.name;
      setFormValues((curr) => ({
        ...curr,
        [name]: {
          value,
          hasError: false,
        },
      }));
    },
    []
  );

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormValues(initFormValues);
    setSubmitted(true);
  }, []);

  return { submitted, formValues, handleChange, handleSubmit };
};
