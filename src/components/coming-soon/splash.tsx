import Link from "next/link";

import { FacetField } from "@/components/brand/facet-field";
import { Wordmark } from "@/components/brand/wordmark";
import type { ComingSoonContent } from "@/lib/content/schemas";

export function ComingSoonSplash({ content }: { content: ComingSoonContent }) {
  return (
    <main
      id="main"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      >
        <FacetField />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <Wordmark variant="full" />
        <h1 className="mt-10 font-display text-3xl font-medium tracking-[-0.01em] text-foreground sm:text-4xl">
          {content.heading}
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">{content.message}</p>
      </div>

      <Link
        href="/login"
        className="relative mt-auto pt-16 text-sm text-muted-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Admin login
      </Link>
    </main>
  );
}
