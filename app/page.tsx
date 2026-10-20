import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/Selectedwork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-15">
      <Hero />
      <SelectedWork />

    </main>
  );
}
