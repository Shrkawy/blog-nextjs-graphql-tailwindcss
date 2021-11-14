import { InputHTMLAttributes } from "react";

interface InputProps {
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  name?: InputHTMLAttributes<HTMLInputElement>["name"];
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  hasError?: boolean;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}

const Input = ({
  onChange,
  name,
  type,
  placeholder,
  hasError,
  value = "",
}: InputProps) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`relative w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 ${
          hasError ? "ring-2 ring-red-500 placeholder-red-500 text-red-500" : ""
        } `}
      />
    </>
  );
};

export default Input;
