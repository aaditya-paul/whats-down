import { auth } from "@/lib/firebaseConfig";
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileIcon = () => {
  const [user] = useAuthState(auth);
  const { photoURL } = user;

  return (
    <>
      <div className="relative w-10 h-10 object-fit rounded-full cursor-pointer">
        <Image fill src={`${photoURL}`} alt="profileIcon" className=" rounded-full" />
      </div>
    </>
  );
};

export default ProfileIcon;
