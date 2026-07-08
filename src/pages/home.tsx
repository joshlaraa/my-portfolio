import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
