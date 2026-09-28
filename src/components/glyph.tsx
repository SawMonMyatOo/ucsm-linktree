import { iconRegistry, type IconName } from "@/lib/icons";

type GlyphProps = {
  name: IconName;
  className?: string;
};

export function Glyph({ name, className }: GlyphProps) {
  const Component = iconRegistry[name];
  return <Component className={className} aria-hidden="true" focusable="false" />;
}
