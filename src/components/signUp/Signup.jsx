import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="w-[50vw] h-[90vh] relative top-12 flex justify-center items-center text-slate-300">
        <div className=" flex flex-col justify-center gap-2 items-center w-full h-[70%]">
          <div>
            <h1 className="text-2xl font-bold">Welcome to WhatsDown❕</h1>
          </div>
          <div className="p-2 m-2 flex flex-col gap-5">
            <div className="bg-black/50 p-2 rounded-lg placeholder:text-slate-500 w-">
              <input
                type="text"
                placeholder="Choose username"
                className="bg-transparent outline-none h-full w-full p-2 "
              />
            </div>
            <div className="bg-black/50 p-2 rounded-lg placeholder:text-slate-500 w-">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none h-full w-full p-2 "
              />
            </div>
            <div className="bg-black/50 p-2 rounded-lg placeholder:text-slate-500 w-">
              <input
                type="password"
                placeholder="Create password"
                className="bg-transparent outline-none h-full w-full  p-2"
              />
            </div>

            <div className="flex justify-center items-center">
              <button className="text-white cursor-pointer w-max p-2 bg-blue-500 rounded-md m-2 hover:bg-blue-600 transition-all">
                Create Account
              </button>
            </div>
          </div>
          <div>or</div>
          <div>
            <div className="text-white cursor-pointer p-2 bg-blue-500 rounded-md m-2 hover:bg-blue-600 transition-all">
              Sign up with Google
            </div>
          </div>
          <div className="m-5 flex flex-row gap-2 text-sm">
            <span>Don't have an account?</span>
            <Link href={"/sign-in"}>
              <span className="text-blue-500 cursor-pointer hover:underline">
                sign-in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
