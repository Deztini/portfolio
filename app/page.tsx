import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/Selectedwork";
import { Stack } from "@/components/sections/Stack";


export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}
