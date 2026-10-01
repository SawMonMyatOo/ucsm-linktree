import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Source_Serif_4 } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Official Links`,
    template: `%s · ${site.shortName}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
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
  authors: [{ name: site.name, url: site.officialWebsite }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Official Links`,
    description: site.shortDescription,
    locale: "en_US",
    images: [
      {
        url: site.socialPreview,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Official Links`,
    description: site.shortDescription,
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
      className={`${sans.variable} ${display.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ucsm-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
