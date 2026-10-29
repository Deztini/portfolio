import { TextReveal } from "../ui/TextReveal";
import { Reveal } from "../ui/Reveal";
import { Line } from "../ui/Line";

export function About() {
  return (
    <section id="about" className="px-5 md:px-15">
      <div className="flex flex-col gap-10 lg:flex-row items-start lg:gap-50">
        <Reveal>
          <div className="text-muted text-small mt-2">02 / ABOUT</div>
        </Reveal>
        <div className="max-w-230">
          <TextReveal
            text="I like owning the whole problem."
            className="text-display text-wrap"
          />
          <Reveal>
            <p className="my-10 text-[20px]">
              I’m a software engineer, I build for the web and for
              mobile: Next.js and TypeScript interfaces, React Native apps, and
              the Node.js and Express services, databases and deployments that
              sit behind them. I’m happiest when I can follow a problem from the
              page a person sees to the server that answers it, and fix it
              wherever it actually lives. I care about software that stays
              reliable, fast and simple months after launch, not just on launch
              day.
            </p>
          </Reveal>
        </div>
      </div>

      <Line className="mt-30 mb-18" />
    </section>
  );
}
