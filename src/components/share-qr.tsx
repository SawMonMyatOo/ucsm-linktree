"use client";

import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { Check, Download, Link2, Share2 } from "lucide-react";

type ShareQrProps = {
  url: string;
  name: string;
};

type ActionState = "idle" | "done" | "failed";

const downloadButton =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent-deep";

export function ShareQr({ url, name }: ShareQrProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<ActionState>("idle");
  const [shared, setShared] = useState<ActionState>("idle");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
    setTimeout(() => setCopied("idle"), 2000);
  }

  async function share() {
    if (!navigator.share) {
      await copyLink();
      setShared("done");
      setTimeout(() => setShared("idle"), 2000);
      return;
    }

    try {
      await navigator.share({ title: name, text: name, url });
    } catch {
      setShared("failed");
      setTimeout(() => setShared("idle"), 2000);
    }
  }

  function downloadSvg() {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    const markup = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([markup], { type: "image/svg+xml;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = objectUrl;
    anchor.download = "ucsmsc-qr.svg";
    anchor.click();
    URL.revokeObjectURL(objectUrl);
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-surface p-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:p-8 sm:text-left">
      <div
        ref={qrRef}
        className="shrink-0 rounded-xl border border-line bg-white p-3"
      >
        <QRCode
          value={url}
          size={132}
          fgColor="#7A2028"
          bgColor="#FFFFFF"
          level="M"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg text-text">Share this page</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          Scan the code or send the link to keep everyone on the official
          source.
        </p>
        <p className="mt-2 truncate font-mono text-xs text-muted">{url}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          <button type="button" onClick={share} className={downloadButton}>
            <Share2 className="size-4" aria-hidden="true" />
            {shared === "done"
              ? "Link ready"
              : shared === "failed"
                ? "Share cancelled"
                : "Share"}
          </button>

          <button type="button" onClick={copyLink} className={downloadButton}>
            {copied === "done" ? (
              <Check className="size-4 text-brand" aria-hidden="true" />
            ) : (
              <Link2 className="size-4" aria-hidden="true" />
            )}
            {copied === "done"
              ? "Copied"
              : copied === "failed"
                ? "Copy failed"
                : "Copy link"}
          </button>

          <button
            type="button"
            onClick={downloadSvg}
            className={downloadButton}
          >
            <Download className="size-4" aria-hidden="true" />
            Save QR
          </button>
        </div>
      </div>
    </div>
  );
}
