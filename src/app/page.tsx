import { Announcements } from "@/components/announcements";
import { ContactFooter } from "@/components/contact-footer";
import { FacultyGrid } from "@/components/faculty-grid";
import Link from "next/link";
import { LinkList } from "@/components/link-list";
import { Reveal } from "@/components/reveal";
import { ShareQr } from "@/components/share-qr";
import { SiteHeader } from "@/components/site-header";
import { SocialRow } from "@/components/social-row";
import { site, siteUrl } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: site.name,
  alternateName: site.shortName,
  url: siteUrl,
  logo: `${siteUrl}${site.logo}`,
  description: site.shortDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.address,
    addressCountry: "MM",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "reception",
      email: site.contact.email,
    },
  ],
  sameAs: [
    "https://www.facebook.com/ucsmuni",
    "https://www.youtube.com/@ucsmuni",
    "https://www.instagram.com/ucsmuni",
    "https://www.tiktok.com/@ucsmuni",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl px-5">
        <LinkList />
        <Announcements />
        <FacultyGrid />
        <SocialRow />
        <ContactFooter />

        <Reveal>
          <ShareQr url={siteUrl} name={site.name} />
        </Reveal>
      </main>

      <footer className="mt-14 border-t border-line bg-brand py-10 text-on-brand sm:mt-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-5 text-center">
          <p className="font-display text-lg">{site.shortName}</p>
          <p className="max-w-md text-xs leading-relaxed text-on-brand/70">
            {site.name} — {site.eyebrow}. This page links to the university’s
            official services.
          </p>
          <p className="text-xs text-on-brand/50">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <nav
            aria-label="Policies"
            className="flex items-center gap-4 text-xs text-on-brand/70"
          >
            <Link
              href="/privacy"
              className="underline-offset-2 transition-colors hover:text-on-brand hover:underline"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/cookies"
              className="underline-offset-2 transition-colors hover:text-on-brand hover:underline"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
