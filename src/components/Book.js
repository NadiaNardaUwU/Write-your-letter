"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Book() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      router.push("/write");
    }, 1000);
  };

  return (
    <div className="perspective">
      <div
        onClick={handleClick}
        className={`book ${open ? "open" : ""}`}
      >
        <div className="cover">
          <h2 className="text-xl font-semibold">
            Write Your Letter
          </h2>
          <p className="mt-4 text-sm opacity-70">Click to open</p>
        </div>
      </div>
    </div>
  );
}
