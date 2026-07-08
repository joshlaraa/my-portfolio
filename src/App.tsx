import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DotPattern } from "./components/ui/dot-pattern";
import { Home } from "./pages/home";
import { Privacy } from "./pages/privacy";
import { Terms } from "./pages/terms";
import { NotFound } from "./pages/not-found";
import { inject } from "@vercel/analytics";

inject();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="opacity-30" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
