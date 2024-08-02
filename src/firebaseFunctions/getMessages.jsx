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

export const ChatRoom = () => {

  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(messagesQuery, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!user) return;

    const { uid } = user;

    try {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        sentUid: uid,
        receivedUid: "",
      });
      setFormValue("");
    } catch (error) {
      console.log("Error sending message: ", error);
      alert("Error sending message. Please try again.");
    }
  };

  return <></>;
};

function ChatMessage({ message }) {
  const { text, sentUid, photoURL } = message;

  const messageClass = sentUid === auth.currentUser?.uid ? "sent" : "received";

  return <>
  
  </>;
}