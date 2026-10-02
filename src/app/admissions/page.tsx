import type { Metadata } from "next";
import { AdmissionsContent } from "@/components/admissions-content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admission session, dates, required documents and the official application link for ${site.name.en}.`,
  alternates: { canonical: "/admissions" },
  openGraph: {
    url: "/admissions",
    title: `Admissions · ${site.shortName.en}`,
    description: `Admission session, dates, required documents and the official application link for ${site.name.en}.`,
  },
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}
