import { site } from "@/content/site";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "../form/ContactForm";
import { Line } from "../ui/Line";
import { Reveal } from "../ui/Reveal";
import { TextReveal } from "../ui/TextReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="theme-dark bg-text text-text section-space rounded-xs w-full px-5 md:px-15"
    >
      <Reveal><p className="text-small text-muted mb-7">04 / CONTACT</p></Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div>
          <TextReveal text="Let's talk." className="text-display text-bg mb-6" />
          <Reveal><p className="text-muted text-xl max-w-125">
            If you’re building a product that needs thoughtful engineering
            across the stack, tell me what you’re working on.
          </p>
          </Reveal>

          <div className="mt-15">
            <Line className="my-4" />
            <a
              href={`mailto:${site.email}`}
              className="grid grid-cols-[70px_1fr_auto] items-center gap-2 sm:grid-cols-[90px_1fr_auto]"
            >
              <p className="text-muted text-[13px]">EMAIL</p>
              <p className="text-small text-bg">{site.email}</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <Line className="my-4" />

            <a
              href={site.whatsapp}
              target="_blank"
              className="grid grid-cols-[70px_1fr_auto] items-center gap-2 sm:grid-cols-[90px_1fr_auto]"
            >
              <p className="text-muted text-[13px]">PHONE</p>
              <p className="text-small text-bg">Message on Whatsapp</p>

              <MoveUpRight className="text-bg" size={11} />
            </a>
            <Line className="my-4" />
          </div>
        </div>

        <ContactForm />
      </div>

      <Line className="mt-10 lg:mt-25 mb-2" />

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
