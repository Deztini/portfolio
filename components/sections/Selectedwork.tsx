import { projects } from "@/content/project";
import Image from "next/image";

const frames = {
  mobile: "w-44 sm:w-60 lg:w-72 aspect-[9/16]",
  web: "w-56 sm:w-80 lg:w-[40rem]  aspect-[16/10]",
};

export function SelectedWork() {
  return (
    <section id="work" className="section-space">
      <div className="flex gap-50">
        <div className="text-muted text-small mt-2">01 / SELECTED WORK</div>
        <div className="flex flex-col gap-8">
          <h1 className="text-display">Work that has to work.</h1>
          <p className="text-muted max-w-2xl text-xl">
            Three systems across product, machine learning and infrastructure
            each built for use beyond a demo.
          </p>
        </div>
      </div>

      <div className="border-b border-gray-400 my-25" />

      <div>
        {projects.map((proj) => (
          <div key={proj.name}>
            <div className="flex items-center justify-between">
              <p className="text-muted text-small">{proj.id} / CASE STUDY</p>
              <p className="text-muted text-small">{proj.category}</p>
            </div>

            <div className="my-20 flex flex-col items-center">
              <h1 className="text-display mb-3">{proj.name}</h1>
              <p className="text-muted max-w-120 text-xl text-center">{proj.summary}</p>
            </div>

        

            <div className="mt-12 h-150 flex items-center justify-center gap-4 rounded-xl bg-surface px-6 py-16 sm:gap-8 sm:py-24">
              {[proj.firstImage, proj.secondImage].map((src, i) => (
                <div key={i} className={`relative ${frames[proj.type]}`}>
                  <Image
                    src={src}
                    alt={`${proj.name} screen ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 28rem, 50vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>


            <div className="mt-6 max-w-4xl ml-auto grid grid-cols-2 gap-y-8 gap-x-18">
             
                <div>
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">PROBLEM</p>
                  <p className="text-muted text-small">{proj.problem}</p>
                </div>
                <div>
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">WHAT I BUILT</p>
                  <p className="text-muted text-small">{proj.built}</p>
                </div>
             

              <div>
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">DECISIONS I MADE</p>
                  <p className="text-muted text-small">{proj.decision}</p>
              </div>

               <div className="col-span-2">
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">RESULT</p>
                  <p className="text-[22px]">{proj.result}</p>
              </div>

             
                <div>
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">STACK</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">{proj.stack.map((st) => (<p className="text-muted text-meta text-small" key={st}>{st}</p>))}</div>
                </div>
                <div>
                  <div className="border-b border-gray-400 mb-3" />
                  <p className="text-meta mb-3">WHAT I’D DO DIFFERENTLY</p>
                  <p className="text-muted text-small">{proj.differently}</p>
                </div>
            

            </div>

             <div className="border-b border-gray-400 mt-40 mb-18" />
          </div>
        ))}
      </div>
    </section>
  );
}
