import { site } from "@/content/site";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { InputField } from "../ui/InputField";
import { Button } from "../ui/Button";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="theme-dark bg-text text-text section-space rounded-xs w-full px-15"
    >
      <p className="text-small text-muted mb-7">05 / CONTACT</p>

      <div className="grid grid-cols-2 gap-x-5">
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
              className="grid grid-cols-[90px_580px_1fr] items-center"
            >
              <p className="text-muted text-[13px]">EMAIL</p>
              <p className="text-small text-bg">{site.email}</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <div className="border-b border-gray-400 my-4" />

            <a
              href={site.whatsapp}
              target="_blank"
              className="grid grid-cols-[90px_580px_1fr] items-center"
            >
              <p className="text-muted text-[13px]">PHONE</p>
              <p className="text-small text-bg">Message on Whatsapp</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <div className="border-b border-gray-400 my-4" />
          </div>
        </div>

        <form>
          <div className="container-site flex flex-col gap-13">
            <InputField label="Name" id="name" />
            <InputField label="Email" id="email" type="email" />
            <InputField label="Message" id="message" />

            <Button
              type="submit"
              variant="secondary"
              className="group relative w-full justify-between overflow-hidden border-gray-400"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:origin-left group-hover:scale-x-100"
              />
              <span className="relative transition-colors duration-500 text-bg group-hover:text-accent-contrast">
                Send message
              </span>
              <ArrowUpRight className="relative transition-colors text-bg duration-500 group-hover:text-accent-contrast" />
            </Button>
          </div>
        </form>
      </div>

      <div className="border-b border-gray-400 mt-45 mb-2" />

      <div className="flex items-center gap-120 mt-6 mb-10">
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
