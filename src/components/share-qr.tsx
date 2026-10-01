"use client";

import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { Check, Download, Link2, Share2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { uiStrings } from "@/data/translations";

type ShareQrProps = {
  url: string;
  name: string;
};

type ActionState = "idle" | "done" | "failed";

const downloadButton =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent-deep";

export function ShareQr({ url, name }: ShareQrProps) {
  const { t } = useLanguage();
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

  async function downloadPng() {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    const svgString = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const DOMURL = window.URL || window.webkitURL || window;
    const urlBlob = DOMURL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = 4; // High resolution PNG
      canvas.width = 512 * scale;
      canvas.height = 512 * scale;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      DOMURL.revokeObjectURL(urlBlob);

      const pngUrl = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = pngUrl;
      anchor.download = "ucsmsc-qr.png";
      anchor.click();
    };
    img.src = urlBlob;
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
        <h3 className="font-display text-lg text-text">
          {t(uiStrings.shareQr.title)}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {t(uiStrings.shareQr.description)}
        </p>
        <p className="mt-2 truncate font-mono text-xs text-muted">{url}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          <button type="button" onClick={share} className={downloadButton}>
            <Share2 className="size-4" aria-hidden="true" />
            {shared === "done"
              ? t(uiStrings.shareQr.linkReady)
              : shared === "failed"
                ? t(uiStrings.shareQr.shareCancelled)
                : t(uiStrings.shareQr.shareBtn)}
          </button>

          <button type="button" onClick={copyLink} className={downloadButton}>
            {copied === "done" ? (
              <Check className="size-4 text-brand" aria-hidden="true" />
            ) : (
              <Link2 className="size-4" aria-hidden="true" />
            )}
            {copied === "done"
              ? t(uiStrings.shareQr.copied)
              : copied === "failed"
                ? t(uiStrings.shareQr.copyFailed)
                : t(uiStrings.shareQr.copyLink)}
          </button>

          <button
            type="button"
            onClick={downloadPng}
            className={downloadButton}
          >
            <Download className="size-4" aria-hidden="true" />
            {t(uiStrings.shareQr.saveQr)}
          </button>
        </div>
      </div>
    </div>
  );
}
