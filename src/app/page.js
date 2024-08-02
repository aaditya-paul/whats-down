"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "@/components/ChatRoom/ChatRoom";
import { auth } from "@/lib/firebaseConfig";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [isUser, setIsUser] = useState(user);

  if (!isUser) {
    router.push("/sign-up");
    return null; // Since you're redirecting, return null or loading indicator
  } else {
    return (
      <>
        <ChatRoom />
      </>
    );
  }
}
