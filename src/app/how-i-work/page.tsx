import { Suspense } from "react";
import type { Metadata } from "next";

import { SiteRenderer } from "@/components/site-renderer";
import { getPublishedContent } from "@/lib/content/queries";
import { shouldShowComingSoon } from "@/lib/coming-soon";
import { ComingSoonSplash } from "@/components/coming-soon/splash";

export async function generateMetadata(): Promise<Metadata> {
  const { howIWork } = await getPublishedContent();
  return {
    title: howIWork.seo.metaTitle,
    description: howIWork.seo.metaDescription,
    openGraph: {
      title: howIWork.seo.metaTitle,
      description: howIWork.seo.metaDescription,
      url: "/how-i-work",
    },
  };
}

async function HowIWorkContent() {
  const content = await getPublishedContent();
  if (await shouldShowComingSoon(content)) return <ComingSoonSplash content={content.comingSoon} />;
  return <SiteRenderer content={content} page="howIWork" />;
}

export default function HowIWorkRoute() {
  return (
    <Suspense fallback={null}>
      <HowIWorkContent />
    </Suspense>
  );
}
