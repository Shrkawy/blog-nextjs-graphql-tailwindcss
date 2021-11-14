import { TextareaHTMLAttributes } from "react";

interface TextareaProps {
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
  name?: TextareaHTMLAttributes<HTMLTextAreaElement>["name"];
  placeholder?: TextareaHTMLAttributes<HTMLTextAreaElement>["placeholder"];
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  hasError?: boolean;
}

const TextArea = ({
  value = "",
  onChange,
  name,
  placeholder,
  hasError,
}: TextareaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={`w-full p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 ${
        hasError ? "ring-2 ring-red-500 placeholder-red-500 text-red-500" : ""
      } `}
    />
  );
};

export default TextArea;
