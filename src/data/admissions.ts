import type { IconName } from "@/lib/icons";

export type Bilingual = {
  /**
   * English copy. Left empty while the official translation is pending — the
   * page then falls back to the Burmese text instead of rendering a blank.
   */
  en: string;
  mm: string;
};

export type AdmissionLink = {
  title: Bilingual;
  description: Bilingual;
  href: string;
  icon: IconName;
  /** Renders as the solid brand card at the top of the grid. */
  featured?: boolean;
};

/** A degree the first-year entrants are awarded on completion. */
export type Programme = {
  /** Shown on its own line, e.g. "B. C. Sc. (Software Engineering)". */
  degree: Bilingual;
  /** The full title in the language of the notice. */
  title: Bilingual;
};

/** A phone number in the notice, rendered as a tap-to-call button. */
export type NoticePhone = {
  /** Shown on the button, e.g. "၀၉-၇၈၃၃၃၀၆၆၁". */
  label: Bilingual;
  /** `tel:` target — digits only, international format, without spaces. */
  href: string;
};

/**
 * A lettered point in the notice, e.g. "A." / "(က)". The marker lives here
 * rather than inside the text so the page can render it as its own badge and
 * align the rows.
 */
export type NoticePoint = {
  label: Bilingual;
  text: Bilingual;
  /** Nested points — the numbered qualifications under a lettered heading. */
  children?: NoticePoint[];
  /** Degrees listed under this point — the ones point C awards. */
  programmes?: Programme[];
  /** Numbers listed under this point as tap-to-call buttons. */
  phones?: NoticePhone[];
};

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to control everything on /admissions. The page itself needs no
 * changes — every heading, paragraph, programme and button below is rendered
 * from here.
 *
 * Nothing on this page is fetched from another website: the notice text is
 * written here by hand and the buttons only deep-link out to the university's
 * application system.
 * ---------------------------------------------------------------------------
 */

/** The degrees the first-year course leads to, awarded under point C. */
export const degreeProgrammes = [
  {
    degree: { en: "B. C. Sc. (Software Engineering)", mm: "B. C. Sc. (Software Engineering)" },
    title: { en: "Bachelor of Computer Science (Software Engineering)", mm: "ကွန်ပျူတာသိပ္ပံဘွဲ့(ပရိုဂရမ်အင်ဂျင်နီယာ)" },
  },
  {
    degree: { en: "B. C. Sc. (Knowledge Engineering)", mm: "B. C. Sc. (Knowledge Engineering)" },
    title: { en: "Bachelor of Computer Science (Knowledge Engineering)", mm: "ကွန်ပျူတာသိပ္ပံဘွဲ့(အသိပညာအင်ဂျင်နီယာ)" },
  },
  {
    degree: { en: "B. C. Sc. (Business Information System)", mm: "B. C. Sc. (Business Information System)" },
    title: { en: "Bachelor of Computer Science (Business Information System)", mm: "ကွန်ပျူတာသိပ္ပံဘွဲ့(စီးပွားရေးသတင်းအချက်အလက်စနစ်)" },
  },
  {
    degree: { en: "B. C. Sc. (High Performance Computing)", mm: "B. C. Sc. (High Performance Computing)" },
    title: { en: "Bachelor of Computer Science (High Performance Computing)", mm: "ကွန်ပျူတာသိပ္ပံဘွဲ့(စွမ်းရည်မြင့်တွက်ချက်မှုပညာ)" },
  },
  {
    degree: { en: "B. C. Tech. (Computer Communication and Networks)", mm: "B. C. Tech. (Computer Communication and Networks)" },
    title: { en: "Bachelor of Computer Technology (Computer Communication and Networks)", mm: "ကွန်ပျူတာနည်းပညာဘွဲ့(ဆက်သွယ်ရေးနှင့်ကွန်ရက်ပညာ)" },
  },
  {
    degree: { en: "B. C. Tech. (Embedded Systems)", mm: "B. C. Tech. (Embedded Systems)" },
    title: { en: "Bachelor of Computer Technology (Embedded Systems)", mm: "ကွန်ပျူတာနည်းပညာဘွဲ့(မြှုပ်နှံထိန်းချုပ်စနစ်)" },
  },
] satisfies Programme[];

export const entranceInformation = {
  /** Shown as the small label above the headline. */
  eyebrow: { en: "Admissions", mm: "ဝင်ခွင့်အချက်အလက်" },
  /** The page headline — the title of the official entrance notice. */
  heading: {
    en: "2026-2027 Academic Year Entrance Information",
    mm: "၂၀၂၆ - ၂၀၂၇ ပညာသင်နှစ်၊ မန္တလေးကွန်ပျူတာတက္ကသိုလ် ပထမနှစ်သင်တန်းဝင်ခွင့်အတွက် သတ်မှတ်ချက်များ",
  },

/**
   * The body of the notice, in the order the university published it: lettered
   * points, with the numbered qualifications nested under the point they
   * belong to.
   * TODO: add the English translation of each entry.
   */
  points: [
    {
      label: { en: "A.", mm: "(က)" },
      text: {
        en: "Must have passed the matriculation examination held in 2026.",
        mm: "၂၀၂၆ ခုနှစ်တွင် ကျင်းပခဲ့သော တက္ကသိုလ်ဝင်စာမေးပွဲကိုအောင်မြင်ခဲ့သူဖြစ်ရမည်။",
      },
    },
    {
      label: { en: "B.", mm: "(ခ)" },
      text: {
        en: "Applicants wishing to apply for admission to University of Computer Studies, Mandalay must meet the following qualifications-",
        mm: "မန္တလေးကွန်ပျူတာတက္ကသိုလ်သို့ ဝင်ခွင့်လျှောက်ထားလိုသူများသည် အောက်ဖော်ပြပါ အရည်အချင်းများနှင့် ပြည့်စုံရမည်-",
      },
      children: [
        {
          label: { en: "1.", mm: "(၁)" },
          text: {
            en: "Applicants who scored 430 marks or above in the matriculation examination or 140 marks or above in English and Mathematics (2 subjects combined) are eligible to apply.",
            mm: "တက္ကသိုလ်ဝင်စာမေးပွဲတွင် စုစုပေါင်းရမှတ် (၄၃၀)နှင့်အထက် ရရှိသူများ သို့မဟုတ် အင်္ဂလိပ်စာနှင့် သင်္ချာ (၂)ဘာသာပေါင်းရမှတ် (၁၄၀)နှင့်အထက် ရရှိသူများလျှောက်ထားနိုင်သည်။",
          },
        },
        {
          label: { en: "2.", mm: "(၂)" },
          text: {
            en: "Applicants who passed the matriculation examination in Myanmar, with Mathematics, Chemistry and Physics in any one of the subject combinations, are eligible to apply.",
            mm: "တက္ကသိုလ်ဝင်စာမေးပွဲတွင် မြန်မာတစ်နိုင်ငံလုံးရှိစာစစ်ဌာနများမှ သင်္ချာ၊ ဓာတုဗေဒ၊ ရူပဗေဒ ဘာသာရပ်များပါဝင်သည့် ဘာသာတွဲတစ်ခုခုဖြင့် ဖြေဆိုအောင်မြင်သူများလျှောက်ထားနိုင်သည်။",
          },
        },
        {
          label: { en: "3.", mm: "(၃)" },
          text: {
            en: "The applicant must hold a National Registration Card (Citizen/Associate Citizen/Foreigner).",
            mm: "ဝင်ခွင့်လျှောက်ထားသူသည် နိုင်ံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်)/(ပြု)/(ဧည့်) ကိုင်ဆောင်ထားသူ ဖြစ်ရမည်။",
          },
        },
        {
          label: { en: "4.", mm: "(၄)" },
          text: {
            en: "A total of 200 students will be admitted.",
            mm: "စုစုပေါင်း ကျောင်းသား၊ ကျောင်းသူ (၂၀၀)ဦး လက်ခံမည်။",
          },
        },
      ],
    },
    {
      label: { en: "C.", mm: "(ဂ)" },
      text: {
        en: "The course duration is (4) years and those who successfully complete the course according to the specialization subjects will be awarded the following computer science degrees.",
        mm: "သင်တန်းကာလမှာ (၄)နှစ်ဖြစ်ပြီး အထူးပြုဘာသာရပ်အလိုက် အောင်မြင်ပြီးမြောက်သူများကို အောက်ဖော်ပြပါ ကွန်ပျူတာပညာရပ်ဆိုင်ရာ ဘွဲများကို ပေးအပ်ချီးမြှင့်သွားမည်ဖြစ်သည်-",
      },
      programmes: degreeProgrammes,
    },
    {
      label: { en: "D.", mm: "(ဃ)" },
      text: {
        en: "Those who meet the requirements can continue to pursue Master's and Doctoral degrees according to the relevant admission requirements.",
        mm: "အဆင့်မီပါက မဟာဘွဲသင်တန်းနှင့် ပါရဂူဘွဲသင်တန်းများသို သင်တန်းဝင်ခွင့်ဆိုင်ရာ သတ်မှတ်ချက်များနှင့်အညီ အဆင့်ဆင့် ဆက်လက်‌တက်ရောက်ခွင့်ရှိသည်။",
      },
    },
    {
      label: { en: "E.", mm: "(င)" },
      text: {
        en: "For more information, please contact the University of Computer Studies, Mandalay at 09-783330661 during office hours.",
        mm: "အသေးစိတ်သိရှိလိုပါက မန္တလေးကွန်ပျူတာတက္ကသိုလ်၊ ၀၉-၇၈၃၃၃၀၆၆၁ သို ရုံးချိန်အတွင်း ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။",
      },
      phones: [{ label: {en: "09 783330661", mm: "၀၉ ၇၈၃၃၃၀၆၆၁"}, href: "+95783330661" }],
    },
  ],

/** Heading above the degree list under point C. */
  programmesHeading: {
    en: "Degrees awarded",
    mm: "ပေးအပ်ချီးမြှင့်မည့် ဘွဲများ",
  },
};

/**
 * The call-to-action card: where the notice says applications go, and the
 * session it belongs to.
 */
export type AdmissionSession = {
  academicYear: Bilingual;
  /** Drives the coloured badge on the card. */
  isOpen: boolean;
  status: Bilingual;
  /** ISO `YYYY-MM-DD`. Omit a date that has not been announced yet. */
  opensOn?: string;
  /** ISO `YYYY-MM-DD`. Omit a date that has not been announced yet. */
  closesOn?: string;
  /** Optional extra line under the dates. */
  note?: Bilingual;
  /**
   * TODO: replace with the real admission session URL. This is the button
   * applicants use to submit their application.
   */
  applyUrl: string;
  /**
   * TODO: replace with the real URL for checking an application status, or
   * remove the entry from `admissionLinks` below if there is none.
   */
  statusUrl: string;
};

export const admissionSession: AdmissionSession = {
  academicYear: { en: "Academic Year 2026–2027", mm: "ပညာသင်နှစ် ၂၀၂၆–၂၀၂၇" },
  // TODO: flip to true while the session is open.
  isOpen: false,
  status: { en: "Applications closed", mm: "လျှောက်ထားလွှာ ပိတ်ပြီး" },
  // TODO: add `opensOn` / `closesOn` / `note` once the dates are announced.
  // opensOn: "2026-06-01",
  // closesOn: "2026-07-15",
  // TODO: real application URL.
  applyUrl: "https://www.ucsm.edu.mm/entranceinfo/",
  // TODO: real application-status URL.
  statusUrl: "https://www.ucsm.edu.mm/entranceinfo/",
};

/**
 * The deep-link grid. The first entry renders as the solid brand card.
 * TODO: replace each href with the real university URL, and remove any
 * service the university does not offer.
 */
export const admissionLinks: AdmissionLink[] = [
  /*{
    title: { en: "Apply online", mm: "အွန်လိုင်း လျှောက်ထားရန်" },
    description: {
      en: "Open the application form for the current admission session",
      mm: "လက်ရှိ ဝင်ခွင့်အတွက် လျှောက်လွှာကို ဖွင့်ရန်",
    },
    href: admissionSession.applyUrl,
    icon: "graduationCap",
    featured: true,
  },
  {
    title: { en: "Check application status", mm: "လျှောက်လွှာ အခြေအနေ စစ်ဆေးရန်" },
    description: {
      en: "See whether your application was received and accepted",
      mm: "သင့်လျှောက်လွှာ ရရှိသည်မှုနှင့် လက်ခံမှု အခြေအနေကို ကြည့်ရန်",
    },
    href: admissionSession.statusUrl,
    icon: "info",
  },
  {
    title: { en: "Entrance examination", mm: "ဝင်စာမေးပွဲ" },
    description: {
      en: "Syllabus, schedule and hall information",
      mm: "အကြောင်းအရာ၊ အချိန်ဇယားနှင့် စာမေးပွဲခန်းအချက်အလက်များ",
    },
    href: "https://www.ucsm.edu.mm/entranceinfo/",
    icon: "calendar",
  },*/
  {
    title: { en: "Announcements & results", mm: "ကြေညာချက်များနှင့် ရလဒ်များ" },
    description: {
      en: "Notices from the admission committee and published results",
      mm: "ဝင်ခွင့်မှ ကြေညာချက်များနှင့် ထုတ်ပြန်ထားသော ရလဒ်များ",
    },
    href: "https://www.ucsm.edu.mm/",
    icon: "megaphone",
  },
  {
    title: { en: "Faculties & departments", mm: "ဌာနများနှင့် ဘာသာရပ်ဌာနများ" },
    description: {
      en: "The faculties and departments you can apply to",
      mm: "လျှောက်ထားနိုင်သော ဌာနများနှင့် ဘာသာရပ်ဌာနများ",
    },
    href: "https://www.ucsm.edu.mm/facultiesanddepartments/",
    icon: "building",
  },
  {
    title: { en: "Contact the university", mm: "တက္ကသိုလ်ကို ဆက်သွယ်ရန်" },
    description: {
      en: "Reception and the registrar's office for questions",
      mm: "မေးခွန်းများအတွက် ဧည့်ကြိုဌာနနှင့် မှတ်ပုံတင်ရုံး",
    },
    href: "https://www.ucsm.edu.mm/",
    icon: "phone",
  },
];
