import FormLogin from "@/app/Components/Fragments/FormLogin";
import AuthLayouts from "@/app/Components/Layouts/AuthLayouts";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
