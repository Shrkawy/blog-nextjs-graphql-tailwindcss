import {
  useState,
  ChangeEvent,
  useCallback,
  FormEvent,
  useEffect,
} from "react";
import { Comment } from "../types";
import { submitComment } from "../services/submitComment";

export interface FormValues {
  [key: string]: {
    value: string;
    hasError: boolean;
  };
}

export const useForm = (initFormValues: FormValues, slug?: string) => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

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

    const comment: Comment = {
      name: formValues.name.value,
      email: formValues.email.value,
      comment: formValues.comment.value,
      slug,
    };

    let res;

    try {
      res = await submitComment(comment);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      return;
    }

    if (res) {
      setFormValues(initFormValues);
      setSubmitted(true);
    }

    setIsSubmitting(false);
    return;
  };

  return {
    isSubmitting,
    submitted,
    formValues,
    handleChange,
    handleFormSubmit,
  };
};
