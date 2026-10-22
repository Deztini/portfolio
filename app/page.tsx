import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/Selectedwork";
import { Stack } from "@/components/sections/Stack";


export default function Home() {
  return (
    <main className="px-15">
      <Hero />
      <SelectedWork />
      <About />
      <Stack />
    </main>
  );
}
