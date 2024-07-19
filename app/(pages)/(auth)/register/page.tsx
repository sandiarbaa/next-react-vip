import FormLogin from "@/app/Components/Fragments/FormLogin";
import FormRegister from "@/app/Components/Fragments/FormRegister";
import AuthLayouts from "@/app/Components/Layouts/AuthLayouts";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
