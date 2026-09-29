import { site } from "@/data/site";
import type { IconName } from "@/lib/icons";

/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to manage every card on the page:
 *   primaryLinks   — the linktree stack (Official Website is always first)
 *   faculties      — the department grid
 *   announcements  — the notice board
 * ---------------------------------------------------------------------------
 */

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  /** Renders as the solid brand card at the top of the stack. */
  featured?: boolean;
};

export type Faculty = {
  name: string;
  code: string;
  description: string;
  href: string;
  icon: IconName;
};

export type Announcement = {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  href: string;
  image?: string;
};

export const primaryLinks: LinkItem[] = [
  {
    title: "Official Website",
    description: "ucsm.edu.mm",
    href: site.officialWebsite,
    icon: "globe",
    featured: true,
  },
  {
    title: "Admissions",
    description: "Apply for the new academic year",
    href: "https://www.ucsm.edu.mm/entranceinfo/",
    icon: "graduationCap",
  },
  {
    title: "Student Portal",
    description: "Registration, results and course materials",
    href: "http://lms.ucsm.edu.mm",
    icon: "user",
  },
  /*{
    title: "Academic Calendar",
    description: "Timetables, semesters and term dates",
    href: "https://www.ucsm.edu.mm",
    icon: "calendar",
  },*/
  {
    title: "Library",
    description: "Catalogues, journals and study resources",
    href: "https://www.ucsm.edu.mm/ucsm-e-library/",
    icon: "library",
  },
  /*{
    title: "Examinations & Results",
    description: "Exam schedules and published results",
    href: "https://www.ucsm.edu.mm",
    icon: "clipboard",
  },
  {
    title: "Scholarships & Aid",
    description: "Grants, bursaries and fee assistance",
    href: "https://www.ucsm.edu.mm",
    icon: "award",
  },*/
  {
    title: "Research & Publications",
    description: "Journals, conferences and academic output",
    href: "https://www.ucsm.edu.mm/research/",
    icon: "scroll",
  },
  {
    title: "Contact the University",
    description: "Reception, registrar and faculty offices",
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
    name: "Faculty of Computer Science",
    code: "FCS",
    description: "Programming, algorithms, systems and theory.",
    href: "https://www.ucsm.edu.mm/fcs/",
    icon: "code",
  },
  {
    name: "Faculty of Information Science",
    code: "FIS",
    description: "Networks, infrastructure and IT service management.",
    href: "https://www.ucsm.edu.mm/fis/",
    icon: "server",
  },
  {
    name: "Faculty of Computer Systems and Technologies",
    code: "FCST",
    description: "Software for business, ERP and enterprise systems.",
    href: "https://www.ucsm.edu.mm/fcst/",
    icon: "building",
  },
  {
    name: "Faculty of Computing",
    code: "FC",
    description: "Design, architecture and project management.",
    href: "https://www.ucsm.edu.mm/fc/",
    icon: "layers",
  },
  {
    name: "Department of Information Technology Support and Maintenance",
    code: "DITSM",
    description: "Statistics, machine learning and data engineering.",
    href: "https://www.ucsm.edu.mm/facultiesanddepartments/",
    icon: "database",
  },
  {
    name: "Department of Physics",
    code: "DP",
    description: "Hardware, embedded systems and electronics.",
    href: "https://www.ucsm.edu.mm/dns",
    icon: "cpu",
  },
  {
    name: "Department of Myanmar",
    code: "DM",
    description: "Security operations, forensics and assurance.",
    href: "https://www.ucsm.edu.mm/dns/",
    icon: "shield",
  },
  {
    name: "Department of English",
    code: "DE",
    description: "Language skills for computer professionals.",
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
    title: "Academic Year Admission Notice",
    date: "2026-09-20",
    tag: "Admission",
    excerpt:
      "Applications for the new academic year are now open. Prepare your transcripts and certificates before applying.",
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
  {
    title: "Semester Examination Timetable",
    date: "2026-09-12",
    tag: "Examination",
    excerpt:
      "The full examination timetable for every faculty has been published on the portal.",
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
  {
    title: "Faculty Orientation Week",
    date: "2026-08-28",
    tag: "Event",
    excerpt:
      "Orientation for first-year students across all faculties, including lab induction and campus tour.",
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-1.jpg",
  },
];
