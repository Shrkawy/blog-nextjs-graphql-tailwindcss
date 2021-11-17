import { useForm } from "../../../hooks";
import { Post } from "../../../types";

import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "./Button";

interface CommentFormProps {
  slug: Post["slug"];
}

const initFormValues = {
  comment: {
    value: "",
    hasError: false,
  },
  email: {
    value: "",
    hasError: false,
  },
  name: {
    value: "",
    hasError: false,
  },
};

const CommentForm = ({ slug }: CommentFormProps) => {
  const [initFormValuesWithUser, setInitFormValuesWithUser] =
    useState(initFormValues);

  const {
    isSubmitting,
    formValues,
    submitted,
    handleChange,
    handleFormSubmit,
  } = useForm(initFormValuesWithUser, slug);

  const [isSaveInfo, setIsSaveInfo] = useState(false);

  const onCheckedClicked = () => {
    setIsSaveInfo((curr) => !curr);
  };

  // look into local storage for user info
  // if found set isSaveInfo to true and output info
  // runs onMount and on every submit
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      setInitFormValuesWithUser({
        comment: {
          value: "",
          hasError: false,
        },
        email: {
          value: user.email,
          hasError: false,
        },
        name: {
          value: user.name,
          hasError: false,
        },
      });
      setIsSaveInfo(true);
    }
  }, [submitted]);

  // save userInfo to local storage and submit the form
  const handleSubmit = (e) => {
    const userInfo = JSON.stringify({
      name: formValues.name.value,
      email: formValues.email.value,
    });
    if (isSaveInfo) {
      localStorage.setItem("userInfo", userInfo);
    }

    if (!isSaveInfo) {
      localStorage.removeItem("userInfo");
      setInitFormValuesWithUser(initFormValues);
    }

    handleFormSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg"
    >
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Add Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <TextArea
          value={formValues.comment.value}
          hasError={formValues.comment.hasError}
          onChange={handleChange}
          placeholder="add comment here"
          name="comment"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <Input
          value={formValues.name.value}
          onChange={handleChange}
          hasError={formValues.name.hasError}
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input
          value={formValues.email.value}
          hasError={formValues.email.hasError}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <input
            checked={isSaveInfo}
            onChange={onCheckedClicked}
            className="w-6 h-6 cursor-pointer"
            type="checkbox"
            id="storeData"
          />
          <label
            htmlFor="storeData"
            className="text-sm text-gray-500 cursor-pointer"
          >
            Save my Name and Email for next Comment
          </label>
        </div>
      </div>

      <div className="mt-8">
        <Button disabled={isSubmitting} type="submit">
          Send Comment
        </Button>
      </div>

      {submitted && (
        <span className="float-right text-lg font-semibold text-green-500 ">
          *Comment sent to review
        </span>
      )}
    </form>
  );
};

export default CommentForm;
