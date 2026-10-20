import { site } from "@/content/site";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "../ui/Button";

export function Hero() {
  return (
    <section className=" section-space flex flex-col gap-10">
      <p className="meta">{site.title}</p>
      <h1 className="text-display">{site.name}</h1>
      <p className="text-muted max-w-3xl text-2xl">{site.intro}</p>

      <div className="flex gap-6">
        <ButtonLink href="#work">
          <span>View work</span>
          <ArrowUpRight />
        </ButtonLink>
        <Button variant="secondary">
          <span>View resume</span>
          <ArrowRight />
        </Button>
      </div>

      <div className="mt-20">
        <div className="border-b border-gray-400" />

        <div className="flex items-center gap-40 mt-6">
          {site.stack.map((st) => (
            <div key={st} className="text-meta text-muted">
              {st}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
