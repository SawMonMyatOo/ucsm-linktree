import type { BrandName } from "@/lib/brand-icons";

export type Bilingual = {
  en: string;
  mm: string;
};

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to change the university's identity, contact details,
 * social channels and image paths. Nothing else needs to be touched.
 * ---------------------------------------------------------------------------
 */
export const site = {
  name: {
    en: "University of Computer Studies, Mandalay",
    mm: "မန္တလေးကွန်ပျူတာတက္ကသိုလ်",
  },
  shortName: {
    en: "UCSM",
    mm: "မကပတ",
  },
  eyebrow: {
    en: "Patheingyi, Myanmar",
    mm: "ပုသိမ်ကြီး၊ မြန်မာနိုင်ငံ",
  },
  tagline: {
    en: "Shaping digital futures since 1997",
    mm: "၁၉၉၇ ခုနှစ်မှစတင်၍ ဒစ်ဂျစ်တယ် အနာဂတ်များကို ဖန်တီးပုံဖော်နေပါသည်",
  },
  shortDescription: {
    en: "The national institute of computer studies in Myanmar — undergraduate and graduate programmes in computing, information technology and business computing.",
    mm: "မြန်မာနိုင်ငံ၏ အမျိုးသားကွန်ပျူတာပညာ တက္ကသိုလ် — ကွန်ပျူတာပညာ၊ သတင်းအချက်အလက်နည်းပညာနှင့် စီးပွားရေးကွန်ပျူတာပညာ ဘွဲ့ကြိုနှင့်ဘွဲ့လွန်သင်တန်းများ။",
  },

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
    address: {
      en: "Mandalay - Mogok Rd., Patheingyi Township, Mandalay, Myanmar, 05071",
      mm: "မန္တလေး - မိုးကုတ်လမ်း၊ ပုသိမ်ကြီးမြို့နယ်၊ မန္တလေး၊ မြန်မာနိုင်ငံ၊ ၀၅၀၇၁",
    },
    // Keyless embed that resolves from the place name. Swap for a lat/lng
    // query or your own Google Maps embed URL if you prefer.
    mapQuery: "University of Computer Studies, Mandaly, Kangyi, Myanmar (Burma)",
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

/**
 * The host every canonical URL, sitemap entry, robots host and QR code points
 * at. Non-www requests are redirected here in production.
 */
export const canonicalHost = "www.ucsmsc.org";

/**
 * The only Host headers the production site answers to. Anything else is
 * redirected to the canonical host by `src/proxy.ts`. Add extra hosts (e.g. a
 * preview deployment) with the `ALLOWED_HOSTS` environment variable.
 */
export const allowedHosts = [canonicalHost, "ucsmsc.org"] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  `https://${canonicalHost}`;
