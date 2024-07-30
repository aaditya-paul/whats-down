import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="w-screen h-[90vh] relative top-12 flex justify-center items-center text-slate-300">
        <div className="flex flex-col justify-center gap-2 items-center w-[30%] h-[70%]">
          <div>
            <h1 className="text-2xl font-bold">Welcome Back❕</h1>
          </div>
          <div className="p-2 m-2 flex flex-col gap-5">
            <div className="bg-black/50 p-2 rounded-lg placeholder:text-slate-500">
              <input
                type="email"
                placeholder="email"
                className="bg-transparent outline-none h-full w-full p-2 "
              />
            </div>
            <div className="bg-black/50 p-2 rounded-lg placeholder:text-slate-500">
              <input
                type="password"
                placeholder="password"
                className="bg-transparent outline-none h-full w-full  p-2"
              />
            </div>
            <div className="flex justify-end">
              <Link href={"#"}>
              <span className="text-xs text-blue-500 cursor-pointer hover:underline">
                Forget password?
              </span>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button className="cursor-pointer w-max p-2 bg-blue-500 rounded-md m-2 hover:bg-blue-600 transition-all">
                Sign in
              </button>
            </div>
          </div>
          <div>or</div>
          <div>
            <div className="cursor-pointer p-2 bg-blue-500 rounded-md m-2 hover:bg-blue-600 transition-all">
              Sign in with Google
            </div>
          </div>
          <div className="m-5 flex flex-row gap-2 text-sm">
            <span>Don't have an account?</span>
            <Link href={"/sign-up"}>
              <span className="text-blue-500 cursor-pointer hover:underline">
                sign-up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
