import { site } from "@/content/site";

export function Hero() {
  return(
    <section className=" section-space flex flex-col gap-10">
     <p className="meta">{site.title}</p>
     <h1 className="text-display">{site.name}</h1>
     <p className="text-muted max-w-3xl text-2xl">{site.intro}</p>

     <div className="flex gap-6">

     </div>
    </section>
  );
}