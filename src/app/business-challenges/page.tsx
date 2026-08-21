import { Suspense } from "react";
import type { Metadata } from "next";

import { SiteRenderer } from "@/components/site-renderer";
import { getPublishedContent } from "@/lib/content/queries";
import { shouldShowComingSoon } from "@/lib/coming-soon";
import { ComingSoonSplash } from "@/components/coming-soon/splash";

export async function generateMetadata(): Promise<Metadata> {
  const { businessChallenges } = await getPublishedContent();
  return {
    title: businessChallenges.seo.metaTitle,
    description: businessChallenges.seo.metaDescription,
    openGraph: {
      title: businessChallenges.seo.metaTitle,
      description: businessChallenges.seo.metaDescription,
      url: "/business-challenges",
    },
  };
}

async function BusinessChallengesContent() {
  const content = await getPublishedContent();
  if (await shouldShowComingSoon(content)) return <ComingSoonSplash content={content.comingSoon} />;
  return <SiteRenderer content={content} page="businessChallenges" />;
}

export default function BusinessChallengesRoute() {
  return (
    <Suspense fallback={null}>
      <BusinessChallengesContent />
    </Suspense>
  );
}
