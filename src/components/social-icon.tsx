import { brandRegistry, type BrandName } from "@/lib/brand-icons";

type SocialIconProps = {
  name: BrandName;
  className?: string;
};

export function SocialIcon({ name, className }: SocialIconProps) {
  const brand = brandRegistry[name];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={brand.label}
      focusable="false"
    >
      <path d={brand.path} fill="currentColor" />
    </svg>
  );
}
