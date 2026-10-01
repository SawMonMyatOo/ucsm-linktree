"use client";

import Image from "next/image";
import { Glyph } from "@/components/glyph";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { uiStrings } from "@/data/translations";

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.contact.mapQuery,
)}&output=embed`;

const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.contact.mapQuery,
)}`;

export function ContactFooter() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: "phone",
      label: t(uiStrings.contactFooter.phoneLabel),
      value: site.contact.phone,
      href: `tel:${site.contact.phoneHref}`,
    },
    {
      icon: "mail",
      label: t(uiStrings.contactFooter.emailLabel),
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: "mapPin",
      label: t(uiStrings.contactFooter.addressLabel),
      value: t(site.contact.address),
      href: mapLinkUrl,
    },
  ] as const;

  return (
    <section id="connect" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
      <SectionHeading
        eyebrow={t(uiStrings.contactFooter.eyebrow)}
        title={t(uiStrings.contactFooter.title)}
        description={t(uiStrings.contactFooter.description)}
      />

      <div className="grid gap-3 sm:grid-cols-3">
        {contactItems.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <a
              href={item.href}
              target={item.icon === "mapPin" ? "_blank" : undefined}
              rel={item.icon === "mapPin" ? "noopener noreferrer" : undefined}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                <Glyph name={item.icon} className="size-5" />
              </span>
              <span className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {item.label}
              </span>
              <span className="mt-1.5 text-sm font-medium break-words text-text">
                {item.value}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="relative h-56 sm:h-72">
            <Image
              src={site.campusImage}
              alt={`${t(site.name)} campus`}
              fill
              sizes="(min-width: 640px) 720px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-brand/25"
              aria-hidden="true"
            />
            <iframe
              title={`Map showing ${t(site.name)}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4">
            <p className="text-sm text-muted">{t(site.contact.address)}</p>
            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand hover:text-brand-hover"
            >
              {t(uiStrings.contactFooter.openInMaps)}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
