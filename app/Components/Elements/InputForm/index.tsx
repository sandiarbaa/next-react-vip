import React from "react";
import Label from "./Label";
import Input from "./Input";

interface InputFormProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  name,
  type,
  placeholder,
}) => {
  return (
    <div className="mb-5">
      <Label htmlfor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
