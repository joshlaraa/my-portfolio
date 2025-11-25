import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Work } from "./components/work";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { DotPattern } from "./components/ui/dot-pattern";
import { inject } from "@vercel/analytics";

inject();
function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-30" />
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
