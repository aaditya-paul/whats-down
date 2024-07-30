'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a specific page after component mount
    router.push("/sign-up");
  }, [router]);

  return null; // Since you're redirecting, return null or loading indicator
}
