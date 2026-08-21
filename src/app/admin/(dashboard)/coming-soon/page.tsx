import type { Metadata } from "next";

import { ComingSoonEditor } from "@/components/admin/editors/coming-soon-editor";
import { getDraftContent } from "@/lib/content/queries";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function ComingSoonPage() {
  const initial = await getDraftContent("comingSoon");
  return <ComingSoonEditor initial={initial} />;
}
