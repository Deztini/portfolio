import { site } from "@/content/site";
import { MoveUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-text section-space h-150 rounded-xs w-full px-15"
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
            <div className="grid grid-cols-[90px_580px_1fr] items-center">
              <p className="text-muted text-[13px]">EMAIL</p>
              <p className="text-small text-bg">{site.email}</p>

              <MoveUpRight className="text-bg" size={11} />
            </div>
            <div className="border-b border-gray-400 my-4" />

            <div className="grid grid-cols-[90px_580px_1fr] items-center">
              <p className="text-muted text-[13px]">PHONE</p>
              <p className="text-small text-bg">Message on Whatsapp</p>

              <MoveUpRight className="text-bg" size={11} />
            </div>
            <div className="border-b border-gray-400 my-4" />
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
