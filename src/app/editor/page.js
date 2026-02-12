"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Editor() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  const handleShare = async () => {
    if (!text) return;

    const docRef = await addDoc(collection(db, "letters"), {
      text: text,
      createdAt: new Date(),
    });

    const generatedLink = `${window.location.origin}/letter/${docRef.id}`;
    setLink(generatedLink);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-100 p-6">
      <div className="paper shadow-2xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl mb-6 text-center font-semibold">
          Write your letter...
        </h2>

        <textarea
          className="w-full h-64 bg-transparent outline-none resize-none text-xl leading-relaxed"
          placeholder="Start writing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-center mt-6">
          <button
            onClick={handleShare}
            className="px-8 py-3 bg-amber-200 rounded-full shadow-md hover:scale-105 transition"
          >
            💌 Share Letter
          </button>
        </div>

        {link && (
          <div className="mt-6 text-center">
            <p className="mb-2">Copy this link:</p>
            <input
              value={link}
              readOnly
              className="w-full p-2 border rounded"
            />
          </div>
        )}
      </div>
    </main>
  );
}
