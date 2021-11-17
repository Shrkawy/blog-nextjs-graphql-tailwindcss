import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
  disabled?: boolean;
}

const Button = ({ disabled, children, type }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="inline-block px-8 py-3 text-lg font-medium text-white transition-transform duration-500 transform bg-pink-600 rounded-full cursor-pointer hover:-translate-y-1 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
