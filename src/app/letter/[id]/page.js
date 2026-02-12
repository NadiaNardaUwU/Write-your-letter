"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function LetterPage() {
  const { id } = useParams();
  const [letter, setLetter] = useState("");

  useEffect(() => {
    const fetchLetter = async () => {
      const docRef = doc(db, "letters", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLetter(docSnap.data().text);
      } else {
        setLetter("Letter not found.");
      }
    };

    if (id) fetchLetter();
  }, [id]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-200 p-6">
      <div className="letter-paper shadow-2xl p-10 max-w-2xl">
        <h2 className="text-2xl mb-6 text-center">💌 A Letter For You</h2>
        <p className="text-xl whitespace-pre-wrap">
          {letter}
        </p>
      </div>
    </main>
  );
}
