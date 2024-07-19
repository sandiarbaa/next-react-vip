import React from "react";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="border w-full text-sm py-2 px-3 rounded-md"
    />
  );
};

export default Input;
