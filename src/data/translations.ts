export type Bilingual = {
  en: string;
  mm: string;
};

export const uiStrings = {
  header: {
    links: { en: "Links", mm: "လင့်ခ်များ" },
    notices: { en: "Notices", mm: "အသိပေးချက်များ" },
    faculties: { en: "Faculties", mm: "ဌာနများ" },
    connect: { en: "Connect", mm: "ဆက်သွယ်ရန်" },
    verifiedInstitution: { en: "Verified Institution", mm: "အတည်ပြုပြီးသော တက္ကသိုလ်" },
  },
  linkList: {
    eyebrow: { en: "Everything in one place", mm: "နေရာတစ်နေရာတည်းတွင် အားလုံးပါရှိသည်" },
    title: { en: "Quick links", mm: "အမြန်လင့်ခ်များ" },
    description: {
      en: "Jump straight to the pages students, applicants and visitors use most.",
      mm: "ကျောင်းသားများ၊ လျှောက်ထားသူများနှင့် လာရောက်လည်ပတ်သူများ အများဆုံးအသုံးပြုသော စာမျက်နှာများသို့ တိုက်ရိုက်သွားရောက်ပါ။",
    },
    officialBadge: { en: "Official", mm: "တရားဝင်" },
  },
  announcements: {
    eyebrow: { en: "Notice board", mm: "အသိပေးကြေညာချက်ဘုတ်" },
    title: { en: "Latest announcements", mm: "နောက်ဆုံးရ ကြေညာချက်များ" },
    description: {
      en: "Notices from the rectorate, faculties and departments.",
      mm: "ပါမောက္ခချုပ်ရုံး၊ ဌာနများနှင့် ဘာသာရပ်ဌာနများမှ အသိပေးချက်များ။",
    },
  },
  facultiesSection: {
    eyebrow: { en: "Academics", mm: "သင်ကြားရေးဌာနများ" },
    title: { en: "Faculties & departments", mm: "ဌာနများနှင့် ဘာသာရပ်ဌာနများ" },
    description: {
      en: "The departments and programmes offered across the institute.",
      mm: "တက္ကသိုလ်တစ်ဝှမ်းတွင် ဖွင့်လှစ်သင်ကြားလျက်ရှိသော ဌာနများနှင့် သင်တန်းအစီအစဉ်များ။",
    },
    viewFaculty: { en: "View faculty", mm: "ဌာနကိုကြည့်ရန်" },
  },
  socialsSection: {
    eyebrow: { en: "Follow along", mm: "ဆက်လက်စောင့်ကြည့်ရန်" },
    title: { en: "Official social channels", mm: "တရားဝင် ဆိုရှယ်မီဒီယာချန်နယ်များ" },
    description: {
      en: "Verified pages run by the university. Watch out for impostor accounts.",
      mm: "တက္ကသိုလ်မှ တိုက်ရိုက်ဖွင့်လှစ်ထားသော တရားဝင်စာမျက်နှာများ။ အတုအယောင် အကောင့်များကို သတိပြုပါ။",
    },
  },
  contactFooter: {
    eyebrow: { en: "Get in touch", mm: "ဆက်သွယ်ရန်" },
    title: { en: "Visit the campus", mm: "ကျောင်းဝင်းသို့ လာရောက်လည်ပတ်ပါ" },
    description: {
      en: "Reception is open on weekdays. Call ahead for appointments with faculty offices.",
      mm: "ဧည့်ကြိုဌာနကို ရုံးဖွင့်ရက်များတွင် ဖွင့်လှစ်ထားပါသည်။ ဌာနများနှင့် ချိန်းဆိုရန်အတွက် ကြိုတင်ဖုန်းခေါ်ဆိုပါ။",
    },
    phoneLabel: { en: "Phone", mm: "ဖုန်းနံပါတ်" },
    emailLabel: { en: "Email", mm: "အီးမေးလ်" },
    addressLabel: { en: "Address", mm: "လိပ်စာ" },
    openInMaps: { en: "Open in Google Maps", mm: "Google Maps တွင် ဖွင့်ရန်" },
  },
  shareQr: {
    title: { en: "Share this page", mm: "ဤစာမျက်နှာကို မျှဝေရန်" },
    description: {
      en: "Scan the code or send the link to keep everyone on the official source.",
      mm: "တရားဝင်ရင်းမြစ်အတိုင်း အားလုံးလက်လှမ်းမီစေရန် QR ကုဒ်ကို စကင်ဖတ်ပါ သို့မဟုတ် လင့်ခ်ကို ပေးပို့ပါ။",
    },
    shareBtn: { en: "Share", mm: "မျှဝေရန်" },
    linkReady: { en: "Link ready", mm: "လင့်ခ်အဆင်သင့်ဖြစ်ပါပြီ" },
    shareCancelled: { en: "Share cancelled", mm: "မျှဝေမှုကို ဖျက်သိမ်းလိုက်သည်" },
    copyLink: { en: "Copy link", mm: "လင့်ခ်ကို ကူးယူရန်" },
    copied: { en: "Copied", mm: "ကူးယူပြီးပါပြီ" },
    copyFailed: { en: "Copy failed", mm: "ကူးယူ၍မရပါ" },
    saveQr: { en: "Save QR", mm: "QR ကို သိမ်းဆည်းရန်" },
  },
  cookieBanner: {
    title: { en: "We use cookies", mm: "ကွတ်ကီးများ (Cookies) အသုံးပြုပါသည်" },
    description: {
      en: "This site uses essential cookies to remember your theme preference. Optional analytics cookies help us understand how students use the page — they are only set with your consent.",
      mm: "ဤဝဘ်ဆိုက်သည် သင်၏ အပြင်အဆင် (theme) ရွေးချယ်မှုကို မှတ်သားရန် မရှိမဖြစ်လိုအပ်သော ကွတ်ကီးများကို အသုံးပြုပါသည်။ ရွေးချယ်နိုင်သော ကိန်းဂဏန်းခွဲခြမ်းစိတ်ဖြာမှု ကွတ်ကီးများသည် ကျောင်းသားများ စာမျက်နှာကို အသုံးပြုပုံကို နားလည်ရန် ကူညီပေးသည် — သင်၏ သဘောတူညီချက်ဖြင့်သာ သတ်မှတ်ပါသည်။",
    },
    privacyPolicyLink: { en: "Privacy Policy", mm: "ကိုယ်ရေးကိုယ်တာ မူဝါဒ" },
    cookiePolicyLink: { en: "Cookie Policy", mm: "ကွတ်ကီး မူဝါဒ" },
    declineOptional: { en: "Decline optional", mm: "ရွေးချယ်ခွင့်ကို ငြင်းပယ်ရန်" },
    acceptAll: { en: "Accept all", mm: "အားလုံး လက်ခံရန်" },
  },
  footer: {
    servicesNote: {
      en: "This page links to the university’s official services.",
      mm: "ဤစာမျက်နှာသည် တက္ကသိုလ်၏ တရားဝင် ဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ပေးပါသည်။",
    },
    privacyPolicy: { en: "Privacy Policy", mm: "ကိုယ်ရေးကိုယ်တာ မူဝါဒ" },
    cookiePolicy: { en: "Cookie Policy", mm: "ကွတ်ကီး မူဝါဒ" },
    policiesAria: { en: "Policies", mm: "မူဝါဒများ" },
  },
};
