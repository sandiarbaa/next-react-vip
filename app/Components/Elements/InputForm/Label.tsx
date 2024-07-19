import React from "react";

const Label: React.FC<{ children: string; htmlfor: string }> = ({
  children,
  htmlfor,
}) => {
  return (
    <label htmlFor={htmlfor} className="block font-semibold">
      {children}
    </label>
  );
};

export default Label;
