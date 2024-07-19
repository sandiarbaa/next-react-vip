import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button>Login</Button>
    </form>
  );
};

export default FormLogin;
