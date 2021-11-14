import {
  useState,
  ChangeEvent,
  useCallback,
  FormEvent,
  useEffect,
} from "react";

export interface FormValues {
  [key: string]: {
    value: string;
    hasError: boolean;
  };
}

export const useForm = (initFormValues: FormValues, slug?: string) => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormValues(initFormValues);
  }, [initFormValues]);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 2500);
    }
  }, [submitted]);

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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formHasError = false;

    for (const [key, el] of Object.entries(formValues)) {
      const { value } = el;
      if (!value) {
        setFormValues((curr) => ({
          ...curr,
          [key]: {
            value,
            hasError: true,
          },
        }));
        formHasError = true;
        continue;
      }
      formHasError = false;
    }

    if (formHasError) return;

    const finalValues = {
      name: formValues.name.value,
      email: formValues.email.value,
      comment: formValues.comment.value,
      slug,
    };

    console.log(finalValues);

    setFormValues(initFormValues);
    setSubmitted(true);
  };

  return { submitted, formValues, handleChange, handleFormSubmit };
};
