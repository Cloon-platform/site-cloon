import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /** Decorative marks (paired with a visible wordmark) are hidden from AT. */
  decorative?: boolean;
  title?: string;
};

/**
 * Faceted "C" monogram for Cloon Operations Advisory — the brand's icon mark
 * on its own, no wordmark. Swaps light/dark-background artwork with the
 * site's `.dark` class; `className` sizes the wrapper, both images fill it.
 */
export function LogoMark({ className, decorative = false, title = "Cloon Operations Advisory" }: LogoMarkProps) {
  const alt = decorative ? "" : title;
  return (
    <span className={cn("inline-block", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
      <img
        src="/brand/logo-mark-light-bg.svg"
        alt={alt}
        aria-hidden={decorative || undefined}
        className="h-full w-full object-contain dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
      <img
        src="/brand/logo-mark-dark-bg.svg"
        alt={alt}
        aria-hidden={decorative || undefined}
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}
