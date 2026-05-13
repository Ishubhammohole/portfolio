import { useEffect } from "react";
import { profile } from "../content/profile";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function SeoMetadata() {
  useEffect(() => {
    document.title = profile.seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: profile.seo.description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: profile.seo.keywords.join(", ") });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: profile.seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: profile.seo.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Shubham Mohole Portfolio" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: profile.seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: profile.seo.description });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });

    const schemaId = "portfolio-jsonld";
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = schemaId;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.fullLegalName,
      alternateName: profile.displayName,
      email: profile.contact.email,
      jobTitle: profile.hero.eyebrow,
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "California",
        addressCountry: "United States"
      },
      sameAs: [profile.contact.github, profile.contact.linkedin],
      knowsAbout: profile.skills.featured,
      url: profile.seo.url
    });
  }, []);

  return null;
}
