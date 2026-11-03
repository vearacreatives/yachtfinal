import Breadcrumbs from '../../common_component/Breadcrumbs';
import React from 'react';
import { BlogDetail } from '../../our_blog_detail_component/BlogDetail';
import Section2 from '../../our_blog_detail_component/Section2';
import { notFound, permanentRedirect } from 'next/navigation';
import { pageMetadata, canonicalUrl, cleanBlogSlug, SITE_URL, jsonLd } from '../../lib/seo.mjs';
function resolveItem(params) {
  const requested = params.blogid;
  const slug = cleanBlogSlug(requested);
  const item = BlogDetail.find(entry => entry.param === slug);
  if (!item) notFound();
  if (requested !== slug) permanentRedirect(canonicalUrl(`/our-blog/${slug}`));
  return item;
}
export function generateStaticParams() {
  return BlogDetail.map(item => ({ blogid: item.param }));
}
export async function generateMetadata({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return pageMetadata({
    title: item.meta_title, description: item.meta_description,
    path: `/our-blog/${item.param}`, image: item.img, type: 'article'
  });
}
export default async function Page({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return <>
    <Breadcrumbs hub="/our-blog" hubLabel="Blog" title={item.name} path={`/our-blog/${item.param}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: item.meta_title, description: item.meta_description,
      mainEntityOfPage: canonicalUrl(`/our-blog/${item.param}`),
      datePublished: item.date,
      image: new URL(typeof item.img === 'string' ? item.img : item.img.src, SITE_URL).href,
      author: { '@type': 'Organization', name: 'Yacht Club Goa', '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` }
    }) }} />
    <Section2 param_val={{ ...resolved, blogid: item.param }} blog_detail_arr_val={[item]} />
  </>;
}
