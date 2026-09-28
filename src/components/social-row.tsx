import { SocialIcon } from "@/components/social-icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { socials } from "@/data/site";

export function SocialRow() {
  if (socials.length === 0) return null;

  return (
    <section id="social" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
      <SectionHeading
        eyebrow="Follow along"
        title="Official social channels"
        description="Verified pages run by the university. Watch out for impostor accounts."
      />

      <Reveal>
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md"
              >
                <SocialIcon
                  name={social.icon}
                  className="size-5 shrink-0 text-brand transition-colors group-hover:text-brand-hover"
                />
                <span className="truncate text-sm font-medium text-text">
                  {social.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
