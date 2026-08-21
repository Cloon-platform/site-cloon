import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

type WordmarkProps = {
  className?: string;
  /** "full" is the stacked icon-over-wordmark image lockup; "compact" is icon mark + real text for nav/footer. */
  variant?: "full" | "compact";
};

const FULL_LOCKUP = {
  light: "/brand/logo-stacked-light-bg.svg",
  dark: "/brand/logo-stacked-dark-bg.svg",
  defaultClassName: "h-48 w-auto",
};

/**
 * Cloon Operations Advisory lockup. "full" renders the designed stacked
 * icon-over-wordmark artwork (e.g. the coming-soon splash). "compact" pairs
 * the icon mark with real text — set in the site's own type, so it stays
 * crisp and legible at nav/footer sizes instead of baked-in vector letterforms.
 */
export function Wordmark({ className, variant = "compact" }: WordmarkProps) {
  if (variant === "full") {
    const sizeClass = className ?? FULL_LOCKUP.defaultClassName;
    return (
      <span className="inline-flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
        <img
          src={FULL_LOCKUP.light}
          alt="Cloon Operations Advisory"
          className={cn(sizeClass, "object-contain dark:hidden")}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
        <img
          src={FULL_LOCKUP.dark}
          alt="Cloon Operations Advisory"
          className={cn(sizeClass, "hidden object-contain dark:block")}
        />
      </span>
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark decorative className="h-11 w-11 shrink-0" />
      <span className="flex flex-col justify-center gap-0.5 leading-none">
        <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-foreground">
          Cloon
        </span>
        <span className="whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Operations Advisory
        </span>
      </span>
    </span>
  );
}
