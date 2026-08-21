import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[70svh] items-center justify-center overflow-hidden border-b border-border/60 bg-background px-6 py-32"
    >
      <div
        aria-hidden
        className="motif-facets pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
      />
      <div className="relative mx-auto max-w-xl text-center">
        <p className="eyebrow">
          <span className="size-1.5 rounded-full bg-sage" aria-hidden />
          404
        </p>
        <h1 className="mt-8 text-balance font-display text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-6 pr-2 text-base font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Back to homepage
            <span className="flex size-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
