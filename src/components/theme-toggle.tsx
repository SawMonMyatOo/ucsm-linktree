"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "ucsm-theme";

export function ThemeToggle() {
  /**
   * The theme lives on the <html data-theme> attribute, written by the inline
   * script in the root layout before first paint. The button's icon is chosen
   * by CSS from that attribute, so no theme state is read during render and
   * there is nothing for the client to disagree with the server about.
   *
   * React re-applies the JSX attributes for <html> on the development
   * StrictMode remount, so re-assert the stored value. No-op in production.
   */
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") {
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {
      // localStorage can be unavailable; the light default is good enough.
    }
  }, []);

  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Theme still applies for this page view, it just will not persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:border-accent hover:text-accent-deep"
    >
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
