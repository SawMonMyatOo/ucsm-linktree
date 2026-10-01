import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { CookieBanner } from "@/components/cookie-banner";
import { LanguageProvider } from "@/context/language-context";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

/**
 * The only Myanmar face available is a single Bold cut, so it is registered at
 * weight 700 — every `font-medium`/`font-semibold` element resolves to the real
 * outline instead of a synthetically emboldened one. Fallbacks cover devices
 * where the download fails, and the Arial metric-override face is disabled
 * because those overrides do not apply to Myanmar glyphs.
 */
const myanmar = localFont({
  src: "./fonts/NotoSansMyanmarUI-Bold.ttf",
  weight: "700",
  display: "swap",
  variable: "--font-myanmar-family",
  fallback: ["Pyidaungsu", "Myanmar Text", "Padauk", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name.en} — Official Links`,
    template: `%s · ${site.shortName.en}`,
  },
  description: site.shortDescription.en,
  applicationName: site.name.en,
  keywords: [
    "UCSM",
    "University of Computer Studies, Mandalay",
    "Myanmar",
    "computer studies",
    "admissions",
    "faculties",
    "မန္တလေးကွန်ပျူတာတက္ကသိုလ်",
    "မကပတ"
  ],
  authors: [{ name: site.name.en, url: site.officialWebsite }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name.en,
    title: `${site.name.en} — Official Links`,
    description: site.shortDescription.en,
    locale: "en_US",
    images: [
      {
        url: site.socialPreview,
        width: 1200,
        height: 630,
        alt: site.name.en,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name.en} — Official Links`,
    description: site.shortDescription.en,
    images: [site.socialPreview],
  },
  icons: {
    icon: [{ url: "/ucsm_logo.svg", type: "image/svg" }],
    apple: [{ url: "/ucsm_logo.svg" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F0EA" },
    { media: "(prefers-color-scheme: dark)", color: "#171012" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${myanmar.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ucsm-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
