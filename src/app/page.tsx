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
import { FooterSection } from "@/components/footer-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: site.name.en,
  alternateName: site.shortName.en,
  url: siteUrl,
  logo: `${siteUrl}${site.logo}`,
  description: site.shortDescription.en,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.address.en,
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
          <ShareQr url={siteUrl} name={site.name.en} />
        </Reveal>
      </main>

      <FooterSection />
    </>
  );
}
