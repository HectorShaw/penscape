import React from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">
            Setup your account
            </div>
          <div className="text-sm text-slate-400 font-semibold">
            Already have an account? 
            <Link className = "pl-2 pr-2 underline" to={"/signin"}>
                 Login here
            </Link>       
          </div>
        </div>
      </div>
    </div>
  );
};
