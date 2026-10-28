"use client";

import { site } from "@/content/site";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "../ui/Button";
import { useState } from "react";
import { ResumeModal } from "../modal/ResumeModal";
import { TextReveal } from "../ui/TextReveal";
import { Reveal } from "../ui/Reveal";
import { Line } from "../ui/Line";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="section-space flex flex-col gap-10 px-5 md:px-15">
      <Reveal>
        <p className="meta">{site.title}</p>
      </Reveal>
      <TextReveal className="text-display" text={site.name} />
      <Reveal>
        <p className="text-muted max-w-3xl text-2xl">{site.intro}</p>
      </Reveal>

      <div className="flex flex-wrap gap-6 sm:gap-8">
        <ButtonLink variant="primary" href="#work">
          <span>View work</span>
          <ArrowUpRight />
        </ButtonLink>
        <Button variant="secondary" onClick={() => setResumeOpen(true)}>
          <span>View resume</span>
          <ArrowRight />
        </Button>
      </div>

      <div className="mt-12 lg:mt-20">
        <Line />

        <div className="flex flex-wrap mt-10  gap-x-8 gap-y-3 lg:gap-x-37 ">
          {site.stack.map((st) => (
            <div key={st} className="text-meta text-muted">
              {st}
            </div>
          ))}
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
