import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Cloon Operations Advisory",
  description:
    "How Cloon Operations Advisory collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" heading="Privacy Policy" />

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20 lg:px-8">
          <Reveal className="space-y-10 text-lg leading-relaxed text-muted-foreground">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-foreground">
                What information is collected
              </h2>
              <p>
                This website collects only the information you choose to provide through the
                contact form: your name, email address, optional company name, and the
                message you write. No other personal data is collected while browsing the
                site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-foreground">
                How it&rsquo;s used
              </h2>
              <p>
                Contact form submissions are sent by email, via the Resend email service, to
                Conor Lee at Cloon Operations Advisory, solely to respond to your enquiry.
                Your details are not stored in a database, sold, or shared with any other
                third party, and are not used for marketing.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-foreground">
                Analytics
              </h2>
              <p>
                This site uses Vercel Analytics and Speed Insights to understand overall
                traffic and performance. Both are cookieless and do not track you
                individually across sites.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-foreground">
                Questions
              </h2>
              <p>
                If you have any questions about this policy or how your information is
                handled, please email{" "}
                <a
                  href="mailto:info@cloon.ie"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-sage"
                >
                  info@cloon.ie
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
