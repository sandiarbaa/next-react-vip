import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="fullname"
        placeholder="Your fullname here"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email here"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="********"
      />
      <Button>Register</Button>
    </form>
  );
};

export default FormRegister;
