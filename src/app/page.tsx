import { Suspense } from "react";

import { SiteRenderer } from "@/components/site-renderer";
import { getPublishedContent } from "@/lib/content/queries";
import { shouldShowComingSoon } from "@/lib/coming-soon";
import { ComingSoonSplash } from "@/components/coming-soon/splash";

async function HomeContent() {
  const content = await getPublishedContent();
  if (await shouldShowComingSoon(content)) return <ComingSoonSplash content={content.comingSoon} />;
  return <SiteRenderer content={content} />;
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
