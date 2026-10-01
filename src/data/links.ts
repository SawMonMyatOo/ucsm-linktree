import { site } from "@/data/site";
import type { IconName } from "@/lib/icons";

export type Bilingual = {
  en: string;
  mm: string;
};

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to manage every card on the page:
 *   primaryLinks   — the linktree stack (Official Website is always first)
 *   faculties      — the department grid
 *   announcements  — the notice board
 * ---------------------------------------------------------------------------
 */

export type LinkItem = {
  title: Bilingual;
  description: Bilingual;
  href: string;
  icon: IconName;
  /** Renders as the solid brand card at the top of the stack. */
  featured?: boolean;
};

export type Faculty = {
  name: Bilingual;
  code: string;
  description: Bilingual;
  href: string;
  icon: IconName;
};

export type Announcement = {
  title: Bilingual;
  date: string;
  tag: Bilingual;
  excerpt: Bilingual;
  href: string;
  image?: string;
};

export const primaryLinks: LinkItem[] = [
  {
    title: { en: "Official Website", mm: "တရားဝင်ဝဘ်ဆိုက်" },
    description: { en: "ucsm.edu.mm", mm: "ucsm.edu.mm" },
    href: site.officialWebsite,
    icon: "globe",
    featured: true,
  },
  {
    title: { en: "Admissions", mm: "ဝင်ခွင့်အချက်အလက်" },
    description: { en: "Apply for the new academic year", mm: "ပညာသင်နှစ်သစ်အတွက် လျှောက်ထားရန်" },
    href: "https://www.ucsm.edu.mm/entranceinfo/",
    icon: "graduationCap",
  },
  {
    title: { en: "Student Portal", mm: "ကျောင်းသား ပေါ်တယ်" },
    description: { en: "Registration, results and course materials", mm: "စာရင်းသွင်းခြင်း၊ စာမေးပွဲရလဒ်များနှင့် သင်ခန်းစာများ" },
    href: "http://lms.ucsm.edu.mm",
    icon: "user",
  },
  /*{
    title: { en: "Academic Calendar", mm: "ပညာရေး ပြက္ခဒိန်" },
    description: { en: "Timetables, semesters and term dates", mm: "အချိန်ဇယားများ၊ စူမက်စတာများနှင့် ရက်စွဲများ" },
    href: "https://www.ucsm.edu.mm",
    icon: "calendar",
  },*/
  {
    title: { en: "Library", mm: "စာကြည့်တိုက်" },
    description: { en: "Catalogues, journals and study resources", mm: "စာအုပ်စာရင်းများ၊ ဂျာနယ်များနှင့် လေ့လာရေးအရင်းအမြစ်များ" },
    href: "https://www.ucsm.edu.mm/ucsm-e-library/",
    icon: "library",
  },
  /*{
    title: { en: "Examinations & Results", mm: "စာမေးပွဲများနှင့် ရလဒ်များ" },
    description: { en: "Exam schedules and published results", mm: "စာမေးပွဲအချိန်ဇယားများနှင့် ထုတ်ပြန်သည့်ရလဒ်များ" },
    href: "https://www.ucsm.edu.mm",
    icon: "clipboard",
  },
  {
    title: { en: "Scholarships & Aid", mm: "ပညာသင်ဆုများနှင့် ထောက်ပံ့မှုများ" },
    description: { en: "Grants, bursaries and fee assistance", mm: "ထောက်ပံ့ကြေးများနှင့် ကျောင်းလခ အကူအညီများ" },
    href: "https://www.ucsm.edu.mm",
    icon: "award",
  },*/
  {
    title: { en: "Research & Publications", mm: "သုတေသနနှင့် ထုတ်ဝေမှုများ" },
    description: { en: "Journals, conferences and academic output", mm: "ဂျာနယ်များ၊ ညီလာခံများနှင့် ပညာရပ်ဆိုင်ရာ ထုတ်ကုန်များ" },
    href: "https://www.ucsm.edu.mm/research/",
    icon: "scroll",
  },
  {
    title: { en: "Contact the University", mm: "တက္ကသိုလ်သို့ ဆက်သွယ်ရန်" },
    description: { en: "Reception, registrar and faculty offices", mm: "ဧည့်ကြို၊ မှတ်ပုံတင်နှင့် ဌာနရုံးများ" },
    href: "https://www.ucsm.edu.mm",
    icon: "phone",
  },
];

/**
 * TODO: confirm the official faculty and department names, then edit below.
 * The code (e.g. "CS") is the short form shown on the card.
 */
export const faculties: Faculty[] = [
  {
    name: { en: "Faculty of Computer Science", mm: "ကွန်ပျူတာသိပ္ပံမဟာဌာန" },
    code: "FCS",
    description: {
      en: "Core computing theory, advanced algorithms, and software architecture.",
      mm: "အဓိကကွန်ပျူတာသီအိုရီ၊ အဆင့်မြင့် အယ်လဂိုရီသမ်များနှင့် ဆော့ဖ်ဝဲလ်တည်ဆောက်ပုံ။",
    },
    href: "https://www.ucsm.edu.mm/fcs/",
    icon: "code",
  },
  {
    name: { en: "Faculty of Information Science", mm: "သတင်းအချက်အလက်သိပ္ပံမဟာဌာန" },
    code: "FIS",
    description: {
      en: "Computer networks, system administration, and modern IT infrastructure.",
      mm: "ကွန်ပျူတာကွန်ရက်များ၊ စနစ်စီမံခန့်ခွဲမှုနှင့် ခေတ်မီအိုင်တီ အခြေခံအဆောက်အအုံ။",
    },
    href: "https://www.ucsm.edu.mm/fis/",
    icon: "server",
  },
  {
    name: { en: "Faculty of Computer Systems and Technologies", mm: "ကွန်ပျူတာစနစ်နှင့် နည်းပညာမဟာဌာန" },
    code: "FCST",
    description: {
      en: "Enterprise software development, database systems, and business solutions.",
      mm: "လုပ်ငန်းသုံးဆော့ဖ်ဝဲလ် ဖွံ့ဖြိုးတိုးတက်ရေး၊ ဒေတာဘေ့စ်စနစ်များနှင့် စီးပွားရေးဖြေရှင်းချက်များ။",
    },
    href: "https://www.ucsm.edu.mm/fcst/",
    icon: "building",
  },
  {
    name: { en: "Faculty of Computing", mm: "တွက်ချက်ရေးမဟာဌာန" },
    code: "FC",
    description: {
      en: "Software engineering, system design, and project management.",
      mm: "ဆော့ဖ်ဝဲလ် အင်ဂျင်နီယာပညာ၊ စနစ်ဒီဇိုင်းနှင့် ပရောဂျက်စီမံခန့်ခွဲမှု။",
    },
    href: "https://www.ucsm.edu.mm/fc/",
    icon: "layers",
  },
  {
    name: { en: "Department of Information Technology Support and Maintenance", mm: "သတင်းအချက်အလက်နည်းပညာ ထောက်ပံ့ရေးနှင့် ထိန်းသိမ်းရေးဌာန" },
    code: "DITSM",
    description: {
      en: "Campus network management, hardware/software maintenance, and technical support services.",
      mm: "ကျောင်းဝင်းကွန်ရက် စီမံခန့်ခွဲမှု၊ ဟာ့ဒ်ဝဲ/ဆော့ဖ်ဝဲလ် ထိန်းသိမ်းမှုနှင့် နည်းပညာပံ့ပိုးမှု ဝန်ဆောင်မှုများ။",
    },
    href: "https://www.ucsm.edu.mm/facultiesanddepartments/",
    icon: "database",
  },
  {
    name: { en: "Department of Physics", mm: "ရူပဗေဒဌာန" },
    code: "DP",
    description: {
      en: "Applied physics, electronics, and hardware fundamentals for computing.",
      mm: "အသုံးချရူပဗေဒ၊ အီလက်ထရွန်နစ်နှင့် ကွန်ပျူတာအတွက် ဟာ့ဒ်ဝဲ အခြေခံများ။",
    },
    href: "https://www.ucsm.edu.mm/dns",
    icon: "cpu",
  },
  {
    name: { en: "Department of Myanmar", mm: "မြန်မာစာဌာန" },
    code: "DM",
    description: {
      en: "Myanmar language, literature, culture, and professional communication skills.",
      mm: "မြန်မာဘာသာ၊ စာပေ၊ ယဉ်ကျေးမှုနှင့် ပညာရပ်ဆိုင်ရာ ဆက်သွယ်ပြောဆိုမှု ကျွမ်းကျင်မှုများ။",
    },
    href: "https://www.ucsm.edu.mm/dns/",
    icon: "shield",
  },
  {
    name: { en: "Department of English", mm: "အင်္ဂလိပ်စာဌာန" },
    code: "DE",
    description: {
      en: "Professional English language proficiency and technical communication for IT careers.",
      mm: "အိုင်တီအသက်မွေးဝမ်းကျောင်းအတွက် ပညာရှင်ဆန်သော အင်္ဂလိပ်ဘာသာစွမ်းရည်နှင့် နည်းပညာဆက်သွယ်ပြောဆိုမှု။",
    },
    href: "https://www.ucsm.edu.mm/dns/",
    icon: "speech",
  },
];

/**
 * TODO: replace these with real notices. Newest first. `date` is ISO so it
 * can be sorted and formatted automatically. `image` is optional.
 */
export const announcements: Announcement[] = [
  {
    title: { en: "Academic Year Admission Notice", mm: "ပညာသင်နှစ်သစ် ဝင်ခွင့်ကြေညာချက်" },
    date: "2026-09-20",
    tag: { en: "Admission", mm: "ဝင်ခွင့်" },
    excerpt: {
      en: "Applications for the new academic year are now open. Prepare your transcripts and certificates before applying.",
      mm: "ပညာသင်နှစ်သစ်အတွက် လျှောက်လွှာများကို စတင်လက်ခံနေပြီဖြစ်ပါသည်။ လျှောက်ထားမည့် စာရွက်စာတမ်းများနှင့် အောင်လက်မှတ်များကို ကြိုတင်ပြင်ဆင်ထားပါ။",
    },
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
  {
    title: { en: "Semester Examination Timetable", mm: "စာသင်နှစ် စာမေးပွဲအချိန်ဇယား" },
    date: "2026-09-12",
    tag: { en: "Examination", mm: "စာမေးပွဲ" },
    excerpt: {
      en: "The full examination timetable for every faculty has been published on the portal.",
      mm: "ဌာနအသီးသီးအတွက် စာမေးပွဲအချိန်ဇယားအပြည့်အစုံကို ပေါ်တယ်တွင် ထုတ်ပြန်ကြေညာထားပါသည်။",
    },
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
  {
    title: { en: "Faculty Orientation Week", mm: "ဌာနအလိုက် ကြိုဆိုမိတ်ဆက်ပွဲနှင့် လမ်းညွှန်ချက်များ သီတင်းပတ်" },
    date: "2026-08-28",
    tag: { en: "Event", mm: "ပွဲစဉ်" },
    excerpt: {
      en: "Orientation for first-year students across all faculties, including lab induction and campus tour.",
      mm: "လက်တွေ့ခန်းမိတ်ဆက်ခြင်းနှင့် ကျောင်းဝင်းလိုက်လံပြသခြင်း အပါအဝင် ဌာနအားလုံးမှ ပထမနှစ်ကျောင်းသားများအတွက် ကြိုဆိုလမ်းညွှန်ပွဲ။",
    },
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
];
