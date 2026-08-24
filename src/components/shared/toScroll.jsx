import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant on navigation — a smooth scroll here makes the new page appear
    // to slide up from wherever the previous page was scrolled to.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}