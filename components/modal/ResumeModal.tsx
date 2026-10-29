"use client";

import { site } from "@/content/site";
import { ArrowDown, ExternalLink, X } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ease } from "@/lib/motion";

const ResumeViewer = dynamic(() => import("../ui/ResumeViewer"), {
  ssr: false,
});

export function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-bg/60 origin-right"
        // initial={{ clipPath: "inset(0 0 100% 0)" }}
        // animate={{ clipPath: "inset(0 0 0% 0)" }}
        // exit={{ clipPath: "inset(0 0 100% 0)" }}
        // transition={{ duration: 0.4, ease: "easeInOut" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        onClick={onClose}
      >
        <div
          className="absolute right-0 top-0 flex h-dvh w-full max-w-4xl flex-col gap-8 overflow-hidden border-l border-border bg-bg px-6 py-8 md:px-12 md:py-12"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-meta font-mono text-muted">RESUME</h1>
              <h1 className="text-h1">Experience at a glance.</h1>
            </div>
            <button
              className="flex items-center justify-center border border-border h-10 w-10 rounded-full cursor-pointer"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>

          <div>
            <p className="text-muted">
              Software engineer working across product, engineering and
              operations—from the client interface to the infrastructure serving
              it.
            </p>
          </div>

          <div className="min-h-0 flex-1">
            <ResumeViewer fileUrl={site.resume} />
          </div>

          <div className="flex items-center gap-10">
            <ButtonLink
              download="Destiny-Agbator-Resume.pdf"
              href={site.resume}
              variant="primary"
            >
              <span>Download PDF</span>
              <ArrowDown />
            </ButtonLink>

            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-accent flex items-center"
            >
              <span>Open in new tab</span>
              <ExternalLink />
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
