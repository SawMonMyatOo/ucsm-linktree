import type { BrandName } from "@/lib/brand-icons";

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to change the university's identity, contact details,
 * social channels and image paths. Nothing else needs to be touched.
 * ---------------------------------------------------------------------------
 */
export const site = {
  name: "University of Computer Studies, Mandalay",
  shortName: "UCSM",
  eyebrow: "Patheingyi, Myanmar",
  tagline: "Shaping digital futures since 1997",
  shortDescription:
    "The national institute of computer studies in Myanmar — undergraduate and graduate programmes in computing, information technology and business computing.",

  /** The university's real website. Linked as the featured card on the page. */
  officialWebsite: "https://www.ucsm.edu.mm",

  logo: "/ucsm_logo.svg",
  logoLight: "/ucsm_logo.svg",
  heroBackground: "/assets/hero-bg.jpg",
  pattern: "/assets/pattern.svg",
  campusImage: "/assets/campus.jpg",
  socialPreview: "/og-image.png",

  contact: {
    // TODO: replace with the real reception number.
    phone: "+95 9 783 338 665",
    phoneHref: "+959783338665",
    // TODO: replace with the real admissions / general enquiries inbox.
    email: "info@ucsmsc.org",
    // TODO: replace with the campus address.
    address: "Mandalay - Mogoke Rd., Patheingyi Township, Mandalay, Myanmar, 05071",
    // Keyless embed that resolves from the place name. Swap for a lat/lng
    // query or your own Google Maps embed URL if you prefer.
    mapQuery: "University of Computer Studies, Mandalay, Patheingyi Township, Mandalay, Myanmar",
  },
} as const;

export type Social = {
  label: string;
  href: string;
  icon: BrandName;
};

/**
 * TODO: replace every href below with the university's real profile URLs.
 * Remove any channel the university does not use.
 */
export const socials: Social[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ucsmuni",
    icon: "facebook",
  },
  /*{
    label: "Messenger",
    href: "https://m.me/ucsm",
    icon: "messenger",
  },*/
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ucsmuni",
    icon: "youtube",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ucsmuni",
    icon: "tiktok",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ucsmuni",
    icon: "instagram",
  },
  /*{
    label: "Telegram",
    href: "https://t.me/ucsmuni",
    icon: "telegram",
  },*/
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/ucsmuni",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/ucsmuni",
    icon: "x",
  },
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ucsmsc.org";
