"use client";

import { Circle, Contrast } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(saved === "light" || saved === "dark" ? saved : system);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme button"
      className="flex items-center justify-center border border-border h-10 w-10 rounded-full cursor-pointer"
    >
      {theme === "dark" ? <Contrast size={18} /> : <Circle size={18} />}
    </button>
  );
}
