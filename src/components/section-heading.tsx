import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  /** Applied to the `h2` so a wrapping `<section>` can point `aria-labelledby` at it. */
  id?: string;
  /**
   * Extra classes for the `h2`. Needed where a heading carries Burmese text
   * that must render in the sans stack instead of the serif display face.
   */
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  id,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-deep uppercase">
            {eyebrow}
          </span>
        </div>
        <h2 id={id} className={`mt-3 font-display text-2xl leading-tight text-text sm:text-3xl ${titleClassName ?? ""}`}>
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
