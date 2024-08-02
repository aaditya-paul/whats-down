"use client";
import {
  collection,
  orderBy,
  limit,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { auth } from "@/lib/firebaseConfig";

const GetChats = () => {
    // const messagesRef = collection(db, "messages");
    // const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
    // const [messages] = useCollectionData(messagesQuery, { idField: "id" });





  return (
    <>
      
    </>
  )
}

export default GetChats
