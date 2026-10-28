import { projects } from "@/content/project";
import Image from "next/image";
import { TextReveal } from "../ui/TextReveal";
import { Reveal } from "../ui/Reveal";
import { Parallax } from "../ui/Parallax";
import { Line } from "../ui/Line";

const frames = {
  mobile: "w-44 sm:w-60 lg:w-72 aspect-[9/16]",
  web: "w-full aspect-[16/10] md:w-[45%] lg:w-[40rem]",
};

export function SelectedWork() {
  return (
    <section id="work" className="section-space px-5 md:px-15">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-50">
        <Reveal>
          <div className="text-muted text-small mt-2">01 / SELECTED WORK</div>
        </Reveal>
        <div className="flex flex-col gap-8">
          <TextReveal text="Work that has to work." className="text-display" />
          <Reveal>
            {" "}
            <p className="text-muted max-w-2xl text-xl">
              Three systems across product, machine learning and infrastructure
              each built for use beyond a demo.
            </p>
          </Reveal>
        </div>
      </div>

      <Line className="my-25" />

      <div>
        {projects.map((proj) => (
          <div key={proj.name}>
            <div className="flex items-center justify-between">
              <Reveal>
                {" "}
                <p className="text-muted text-small">
                  {proj.id} / CASE STUDY
                </p>{" "}
              </Reveal>
              <Reveal>
                {" "}
                <p className="text-muted text-small">{proj.category}</p>{" "}
              </Reveal>
            </div>

            <div className="my-20 flex flex-col items-center">
              <TextReveal text={proj.name} className="text-display mb-3" />
              <Reveal>
                <p className="text-muted max-w-120 text-xl text-center">
                  {proj.summary}
                </p>
              </Reveal>
            </div>

            <div
              className={`mt-12 h-100 flex items-center justify-center gap-4 rounded-xl bg-surface px-6 py-16 sm:gap-8 sm:py-14 md:h-150 ${
                proj.type === "web" ? "flex-col md:flex-row" : ""
              }`}
            >
              {[proj.firstImage, proj.secondImage].map((src, i) => (
                <Parallax
                  key={i}
                  offset={i === 0 ? 14 : 32}
                  className={`relative ${frames[proj.type]}`}
                >
                  <Image
                    src={src}
                    alt={`${proj.name} screen ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 28rem, 50vw"
                    className="object-contain"
                  />
                </Parallax>
              ))}
            </div>

            <div className="mt-6 max-w-4xl ml-auto grid grid-cols-2 gap-y-8 gap-x-18">
              <div>
                <Line className="mb-3" />
                <p className="text-meta mb-3">PROBLEM</p>
                <p className="text-muted text-small">{proj.problem}</p>
              </div>
              <div>
                <Line className="mb-3" />
                <p className="text-meta mb-3">WHAT I BUILT</p>
                <p className="text-muted text-small">{proj.built}</p>
              </div>

              <div>
                <Line className="mb-3" />
                <p className="text-meta mb-3">DECISIONS I MADE</p>
                <p className="text-muted text-small">{proj.decision}</p>
              </div>

              <div className="col-span-2">
                <Line className="mb-3" />
                <p className="text-meta mb-3">RESULT</p>
                <p className="text-[22px]">{proj.result}</p>
              </div>

              <div>
                <Line className="mb-3" />
                <p className="text-meta mb-3">STACK</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {proj.stack.map((st) => (
                    <p className="text-muted text-meta text-small" key={st}>
                      {st}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <Line className="mb-3" />
                <p className="text-meta mb-3">WHAT I’D DO DIFFERENTLY</p>
                <p className="text-muted text-small">{proj.differently}</p>
              </div>
            </div>

            <Line className="mt-40 mb-18" />
          </div>
        ))}
      </div>
    </section>
  );
}
