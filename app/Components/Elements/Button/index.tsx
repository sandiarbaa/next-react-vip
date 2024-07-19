import React from "react";

const Button = ({ children }: { children: string }) => {
  return (
    <button
      type="submit"
      className="bg-blue-600 text-white font-semibold w-full py-2 px-3 rounded-md active:bg-sky-300"
    >
      {children}
    </button>
  );
};

export default Button;
