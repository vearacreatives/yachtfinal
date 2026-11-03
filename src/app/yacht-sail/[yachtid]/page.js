import PlanningLinks from '../../common_component/PlanningLinks';
import Breadcrumbs from '../../common_component/Breadcrumbs';
import React from 'react';
import { yacht_detail_data } from '../../yacht_component/yacht_detail/yacht_detail_data';
import Section2 from '../../yacht_component/yacht_detail/Section2';
import { notFound, permanentRedirect } from 'next/navigation';
import { pageMetadata, canonicalUrl, cleanBlogSlug, SITE_URL, jsonLd } from '../../lib/seo.mjs';
function resolveItem(params) {
  const item = yacht_detail_data.find(entry => entry.param === params.yachtid);
  if (!item) notFound();
  return item;
}
export function generateStaticParams() {
  return yacht_detail_data.map(item => ({ yachtid: item.param }));
}
export async function generateMetadata({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return pageMetadata({
    title: `${item.name} in Goa | Yacht Club Goa`, description: `Explore ${item.name} for private hire in Goa. View onboard features and photos, then enquire with your date and guest count for availability and a quote.`,
    path: `/yacht-sail/${item.param}`, image: item.img?.[0]?.img_name
  });
}
export default async function Page({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return <>
    <Breadcrumbs hub="/yacht-sail" hubLabel="Yachts and boats" title={item.name} path={`/yacht-sail/${item.param}`} />
    <Section2 param_val={{ ...resolved, yachtid: item.param }} yach_detail={[item]} />
    <PlanningLinks kind="yacht" slug={item.param} />
  </>;
}
