import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Work } from "./components/work";
import { DotPattern } from "./components/ui/dot-pattern";
function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-30" />
      <Hero />
      <Navigation />
      <Work />
    </div>
  );
}

export default App;
