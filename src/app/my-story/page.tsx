import { Suspense } from "react";
import type { Metadata } from "next";

import { SiteRenderer } from "@/components/site-renderer";
import { getPublishedContent } from "@/lib/content/queries";
import { shouldShowComingSoon } from "@/lib/coming-soon";
import { ComingSoonSplash } from "@/components/coming-soon/splash";

export async function generateMetadata(): Promise<Metadata> {
  const { myStory } = await getPublishedContent();
  return {
    title: myStory.seo.metaTitle,
    description: myStory.seo.metaDescription,
    alternates: { canonical: "/my-story" },
    openGraph: {
      title: myStory.seo.metaTitle,
      description: myStory.seo.metaDescription,
      url: "/my-story",
    },
    twitter: {
      card: "summary_large_image",
      title: myStory.seo.metaTitle,
      description: myStory.seo.metaDescription,
    },
  };
}

async function MyStoryContent() {
  const content = await getPublishedContent();
  if (await shouldShowComingSoon(content)) return <ComingSoonSplash content={content.comingSoon} />;
  return <SiteRenderer content={content} page="myStory" />;
}

export default function MyStoryRoute() {
  return (
    <Suspense fallback={null}>
      <MyStoryContent />
    </Suspense>
  );
}
