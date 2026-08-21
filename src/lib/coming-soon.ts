import { auth } from "@/auth";
import type { PublishedContent } from "@/lib/content/queries";

/**
 * The splash replaces the real page only when the toggle is on AND the
 * visitor has no admin session — an admin always sees the real site.
 */
export async function shouldShowComingSoon(content: PublishedContent): Promise<boolean> {
  // auth() runs unconditionally (not just when enabled) so this route is
  // always treated as dynamic — otherwise, if the toggle happens to be off
  // at build time, Next never observes the auth() call and can wrongly
  // classify the route as fully static.
  const session = await auth();
  if (!content.comingSoon.enabled) return false;
  return !session?.user;
}
