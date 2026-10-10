import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

import { DotPattern } from "@/components/ui/dot-pattern";
import { Home } from "@/pages/home";

const Privacy = lazy(() =>
  import("@/pages/privacy").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("@/pages/terms").then((m) => ({ default: m.Terms })),
);
const NotFound = lazy(() =>
  import("@/pages/not-found").then((m) => ({ default: m.NotFound })),
);

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hashTarget = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null;

    if (hashTarget) {
      hashTarget.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="relative min-h-dvh">
      <DotPattern className="opacity-30" />
      <ScrollManager />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
