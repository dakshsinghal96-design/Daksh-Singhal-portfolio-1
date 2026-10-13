import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { profile } from '../data/profile';

/**
 * Per-route document metadata.
 *
 * Written imperatively rather than through a helmet library: there are five
 * routes and a fixed tag list, so a small effect is cheaper than a dependency.
 * Tags created here are reused (matched by selector) rather than duplicated on
 * every navigation.
 */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export interface SeoProps {
  title: string;
  description: string;
  /** JSON-LD payload. Only ever built from verified facts. */
  structuredData?: object;
}

export default function Seo({ title, description, structuredData }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = new URL(pathname, profile.siteUrl).href;
    const image = new URL('/og-image.png', profile.siteUrl).href;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', pathname === '/' ? 'profile' : 'website');
    upsertMeta('property', 'og:site_name', profile.name);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, pathname]);

  useEffect(() => {
    if (!structuredData) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [structuredData]);

  return null;
}
