"use client";

import { site } from "@/content/site";
import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { ResumeModal } from "../modal/ResumeModal";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ease } from "@/lib/motion";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });

  return () => window.removeEventListener("scroll", onChange);
}

const getSnapshot = () => window.scrollY > 8;

const getServerSnapshot = () => false;

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: null },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [time, setTime] = useState(new Date());
  const [resumeOpen, setResumeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const clock = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b  ${scrolled ? "border-border bg-bg/70 backdrop-blur-md" : "border-transparent bg-bg"}`}
      >
        <div className="h-18 px-5 py-4 sm:px-15 flex items-center justify-between">
          <Link href="/" className="font-medium tracking-tight">
            {site.name}
          </Link>

          <nav className="text-small hidden items-center gap-6 md:flex">
            {navItems.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} className="link-underline">
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  onClick={() => setResumeOpen(true)}
                  className="link-underline cursor-pointer"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-10 mr-6 ml-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full h-2 w-2 bg-green-700" />
              <div>
                <p className=" text-small">Lagos {clock}</p>
                <p className="text-small text-muted">Available</p>
              </div>
            </div>

            <div>
              <ThemeToggle />
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut"}}
          >
            <div className="px-5 flex h-16 items-center justify-between">
              <span className="font-medium tracking-tight whitespace-nowrap">
                {site.name}
              </span>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="px-5 mt-8 flex flex-1 flex-col">
              {navItems.map((item, i) => {
                const content = (
                  <div className="flex items-center justify-between border-b border-border py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-muted text-small font-mono">
                        0{i + 1}
                      </span>
                      <span className="text-3xl tracking-tight">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight size={20} className="text-muted" />
                  </div>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.12 + i * 0.07 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block"
                        onClick={() => setMenuOpen(false)}
                      >
                        {content}
                      </a>
                    ) : (
                      <button
                        className="block w-full text-left"
                        onClick={() => {
                          setMenuOpen(false);
                          setResumeOpen(true);
                        }}
                      >
                        {content}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <div className="px-5 flex items-center gap-3 pb-10">
              <div>
                <p className=" text-small">Lagos {clock}</p>
                <p className="text-small text-muted">Available</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
