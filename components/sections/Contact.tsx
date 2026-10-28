import { site } from "@/content/site";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "../form/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="theme-dark bg-text text-text section-space rounded-xs w-full px-5 md:px-15"
    >
      <p className="text-small text-muted mb-7">05 / CONTACT</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div>
          <h1 className="text-display text-bg mb-6">Let&apos;s talk.</h1>
          <p className="text-muted text-xl max-w-125">
            If you’re building a product that needs thoughtful engineering
            across the stack, tell me what you’re working on.
          </p>

          <div className="mt-15">
            <div className="border-b border-gray-400 my-4" />
            <a
              href={`mailto:${site.email}`}
              className="grid grid-cols-[70px_1fr_auto] items-center gap-2 sm:grid-cols-[90px_1fr_auto]"
            >
              <p className="text-muted text-[13px]">EMAIL</p>
              <p className="text-small text-bg">{site.email}</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <div className="border-b border-gray-400 my-4" />

            <a
              href={site.whatsapp}
              target="_blank"
              className="grid grid-cols-[70px_1fr_auto] items-center gap-2 sm:grid-cols-[90px_1fr_auto]"
            >
              <p className="text-muted text-[13px]">PHONE</p>
              <p className="text-small text-bg">Message on Whatsapp</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <div className="border-b border-gray-400 my-4" />
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="border-b border-gray-400 mt-10 lg:mt-25 mb-2" />

      <div className="mt-6 mb-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-muted text-meta">{`© ${new Date().getFullYear()} ${site.name}`}</div>
        <div className="flex items-center gap-5">
          <Link
            href={site.github}
            className="link-underline text-muted text-meta font-mono"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href={site.linkedin}
            className="link-underline text-muted text-meta font-mono"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="link-underline text-muted text-meta font-mono"
          >
            Email
          </Link>
        </div>
      </div>
    </section>
  );
}
