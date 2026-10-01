"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "ucsm-cookie-consent";

type Consent = "accepted" | "declined";

/** Read the stored consent without touching localStorage during render. */
function readStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "choice" in parsed &&
      (parsed.choice === "accepted" || parsed.choice === "declined")
    ) {
      return parsed.choice;
    }
    // Legacy plain-string values, e.g. just "accepted".
    if (raw === "accepted" || raw === "declined") return raw;
    return null;
  } catch {
    // Corrupt value or unavailable storage — treat as "no answer yet".
    return null;
  }
}

export function CookieBanner() {
  /**
   * `null` while rendering on the server and on the client's first pass, so
   * both agree the banner is hidden; after mount we reveal it only when no
   * consent has been recorded yet.
   */
  const [consent, setConsent] = useState<Consent | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // External-system synchronisation: read localStorage once after mount.
    queueMicrotask(() => {
      setConsent(readStoredConsent());
      setChecked(true);
    });
  }, []);

  const visible = checked && consent === null;

  function choose(choice: Consent) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ choice, updatedAt: new Date().toISOString() }),
      );
    } catch {
      // Choice applies for this page view even if it cannot persist.
    }
    setConsent(choice);
  }

  function resetPreference() {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // Nothing to clean up.
    }
    setConsent(null);
    setChecked(true);
  }

  const showReset = checked && consent !== null;

  return (
    <>
      {visible && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-line bg-surface p-5 shadow-lg">
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"
              >
                <Cookie className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-base text-text">
                  We use cookies
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  This site uses essential cookies to remember your theme
                  preference. Optional analytics cookies help us understand how
                  students use the page — they are only set with your consent.{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-brand underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  ·{" "}
                  <Link
                    href="/cookies"
                    className="font-semibold text-brand underline-offset-2 hover:underline"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-accent"
              >
                Decline optional
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-hover"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {showReset && (
        <button
          type="button"
          onClick={resetPreference}
          title="Cookie preferences"
          aria-label="Open cookie preferences"
          className="fixed bottom-4 right-4 z-40 inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-text transition-colors hover:border-accent hover:text-accent-deep"
        >
          <Cookie className="size-5" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
