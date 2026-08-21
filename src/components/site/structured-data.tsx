import { getPublishedContent } from "@/lib/content/queries";

/** JSON-LD ProfessionalService schema, sourced from published CMS content. */
export async function StructuredData() {
  const { settings, contact, footer } = await getPublishedContent();
  const linkedIn = contact.methods.find((method) => method.icon === "linkedin")?.href;

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: footer.copyrightName,
    url: "https://cloon.ie",
    description: settings.description,
    email: footer.email,
    areaServed: "IE",
    founder: {
      "@type": "Person",
      name: "Conor Lee",
      ...(linkedIn ? { sameAs: [linkedIn] } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
