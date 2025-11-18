import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Work } from "./components/work";
function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Navigation />
      <Work />
    </div>
  );
}

export default App;
