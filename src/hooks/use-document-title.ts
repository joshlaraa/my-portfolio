import { useEffect } from "react";

const SITE_NAME = "Josh Lara";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} · ${SITE_NAME}`
      : `${SITE_NAME} — Software Engineer`;
  }, [title]);
}
