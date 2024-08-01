import React from "react";
import { auth } from "@/lib/firebaseConfig.js";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  return (
    auth.currentUser && (
      <>
        <div
          className="bg-gray-800 rounded-lg cursor-pointer p-2 font-light text-sm hover:bg-red-700 transition-all"
          onClick={() => {
            signOut(auth);
            router.replace("/sign-in"); 
          }}
        >
          Sign Out
        </div>
      </>
    )
  );
};

export default SignOutButton;
