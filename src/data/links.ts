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
    href: "https://www.ucsm.edu.mm",
    icon: "graduationCap",
  },
  {
    title: "Student Portal",
    description: "Registration, results and course materials",
    href: "https://www.ucsm.edu.mm",
    icon: "user",
  },
  {
    title: "Academic Calendar",
    description: "Timetables, semesters and term dates",
    href: "https://www.ucsm.edu.mm",
    icon: "calendar",
  },
  {
    title: "Library",
    description: "Catalogues, journals and study resources",
    href: "https://www.ucsm.edu.mm",
    icon: "library",
  },
  {
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
  },
  {
    title: "Research & Publications",
    description: "Journals, conferences and academic output",
    href: "https://www.ucsm.edu.mm",
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
    name: "Computer Science",
    code: "CS",
    description: "Programming, algorithms, systems and theory.",
    href: "https://www.ucsm.edu.mm",
    icon: "code",
  },
  {
    name: "Information Technology",
    code: "IT",
    description: "Networks, infrastructure and IT service management.",
    href: "https://www.ucsm.edu.mm",
    icon: "server",
  },
  {
    name: "Business Computing",
    code: "BC",
    description: "Software for business, ERP and enterprise systems.",
    href: "https://www.ucsm.edu.mm",
    icon: "building",
  },
  {
    name: "Software Engineering",
    code: "SE",
    description: "Design, architecture and project management.",
    href: "https://www.ucsm.edu.mm",
    icon: "layers",
  },
  {
    name: "Data Science & Analytics",
    code: "DSA",
    description: "Statistics, machine learning and data engineering.",
    href: "https://www.ucsm.edu.mm",
    icon: "database",
  },
  {
    name: "Computer Engineering",
    code: "CE",
    description: "Hardware, embedded systems and electronics.",
    href: "https://www.ucsm.edu.mm",
    icon: "cpu",
  },
  {
    name: "Cybersecurity",
    code: "CYB",
    description: "Security operations, forensics and assurance.",
    href: "https://www.ucsm.edu.mm",
    icon: "shield",
  },
  {
    name: "Digital Media & Design",
    code: "DMD",
    description: "Interaction design, graphics and multimedia.",
    href: "https://www.ucsm.edu.mm",
    icon: "palette",
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
    image: "/assets/thumbs/news-2.jpg",
  },
  {
    title: "Faculty Orientation Week",
    date: "2026-08-28",
    tag: "Event",
    excerpt:
      "Orientation for first-year students across all faculties, including lab induction and campus tour.",
    href: "https://www.ucsm.edu.mm",
    image: "/assets/thumbs/news-3.jpg",
  },
];
