import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "penscape-common";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Setup your account</div>
          <div className="text-sm text-slate-400 font-semibold">
            Already have an account?
            <Link className="pl-2 pr-2 underline" to={"/signin"}>
              Login here
            </Link>
          </div>
          <LabelledInput
            label="Name"
            placeholder="H. Singh"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                name: e.target.value
              });
            }}
          />
          <LabelledInput
            label="Username"
            placeholder="hsingh"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                username: e.target.value
              });
            }}
          />
          <LabelledInput
            label="Password"
            placeholder="********"
            type="password"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                password: e.target.value
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
