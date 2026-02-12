"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WritePage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main className="h-screen flex items-center justify-center bg-rose-100">
      <div
        className={`transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="book-open shadow-2xl">
          {/* Left Page */}
          <div className="page left"></div>

          {/* Right Page */}
          <div className="page right flex items-center justify-center">
            <button
              onClick={() => router.push("/editor")}
              className="px-6 py-3 bg-rose-200 rounded-full shadow-md hover:scale-105 transition"
            >
              ✍️ Start Writing
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
