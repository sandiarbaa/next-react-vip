import React from "react";
import FormLogin from "../Fragments/FormLogin";
import Link from "next/link";

const AuthLayouts: React.FC<{
  children: React.ReactNode;
  title: string;
  type: string;
}> = ({ children, title, type }) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold text-blue-600">{title}</h1>
        <p className="text-sm text-slate-500 mb-2">
          Welcome, please enter your details.
        </p>
        {children}

        <Navigation type={type} />

        {/* <p className="text-center mt-3 text-sm text-slate-500">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          {type === "login" && (
            <Link
              href="/register"
              className="ml-1 font-bold text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          )}

          {type === "register" && (
            <Link
              href="/login"
              className="ml-1 font-bold text-blue-500 hover:underline"
            >
              Sign In
            </Link>
          )}
        </p> */}
      </div>
    </main>
  );
};

const Navigation: React.FC<{ type: string }> = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-3 text-sm text-slate-500">
        Don{"'"}t have an account?
        <Link
          href="/register"
          className="ml-1 font-bold text-blue-500 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center mt-3 text-sm text-slate-500">
        Have an account?
        <Link
          href="/login"
          className="ml-1 font-bold text-blue-500 hover:underline"
        >
          Sign In
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
