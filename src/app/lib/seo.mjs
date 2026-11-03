// One production origin, independent of environment variables and request headers.
export const SITE_URL = 'https://www.yachtclubgoa.com';
export const SITE_NAME = 'Yacht Club Goa';
export const BUSINESS_ADDRESS = 'Alto-Betim, Britona - Bardez Bridge Approach, Porvorim, Penha de França, Goa 403521';
export function cleanBlogSlug(slug) {
  return slug.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}
export function canonicalUrl(path = '/') {
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('://')) {
    throw new Error('Canonical URL requires a local absolute path');
  }
  const pathname = path.split(/[?#]/)[0].replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  return SITE_URL + (pathname || '/');
}
export function pageMetadata({ title, description, path, image, type = 'website' }) {
  const url = canonicalUrl(path);
  const source = typeof image === 'string' ? image : image?.src;
  const images = source ? [{ url: new URL(source, SITE_URL).href, alt: title }] : undefined;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type, ...(images ? { images } : {}) },
    twitter: { card: images ? 'summary_large_image' : 'summary', title, description, ...(images ? { images: images.map(i => i.url) } : {}) },
  };
}
export function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
