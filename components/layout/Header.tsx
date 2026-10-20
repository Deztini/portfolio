"use client";

import { site } from "@/content/site";
import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

export function Header() {
  const [time, setTime] = useState(new Date());
  function subscribe(onChange: () => void) {
    window.addEventListener("scroll", onChange, { passive: true });

    return () => window.removeEventListener("scroll", onChange);
  }

  const getSnapshot = () => window.scrollY > 8;

  const getServerSnapshot = () => false;
  const scrolled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b  bg-bg ${scrolled ? "border-border" : "border-transparent"}`}
    >
      <div className="h-18 px-10  flex items-center justify-between">
        <Link href="/" className="font-medium tracking-tight">
          {site.name}
        </Link>

        <nav className="flex items-center gap-6 text-small">
          <a href="#work" className="link-underline">
            Work
          </a>
          <a href="#about" className="link-underline">
            About
          </a>
          <a href="#resume" className="link-underline">
            Resume
          </a>
          <a href="#contact" className="link-underline">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3 mr-10">
          <div className="rounded-full h-2 w-2 bg-green-700" />
          <div>
            <p className=" text-small">
              Lagos{" "}
              {time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-small text-muted">Available</p>
          </div>
        </div>
      </div>
    </header>
  );
}
