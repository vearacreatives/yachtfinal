import PlanningLinks from '../../common_component/PlanningLinks';
import Breadcrumbs from '../../common_component/Breadcrumbs';
import React from 'react';
import { ServiceDetail } from '../../yacht_service_detail_component/ServiceDetail';
import Section2 from '../../yacht_service_detail_component/Section2';
import { notFound, permanentRedirect } from 'next/navigation';
import { pageMetadata, canonicalUrl, cleanBlogSlug, SITE_URL, jsonLd } from '../../lib/seo.mjs';
function resolveItem(params) {
  const item = ServiceDetail.find(entry => entry.param === params.serviceid);
  if (!item) notFound();
  return item;
}
export function generateStaticParams() {
  return ServiceDetail.map(item => ({ serviceid: item.param }));
}
export async function generateMetadata({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return pageMetadata({
    title: item.meta_title.replace(/Yatch/gi, 'Yacht'), description: item.meta_description,
    path: `/yacht-services-goa/${item.param}`, image: item.img
  });
}
export default async function Page({ params }) {
  const resolved = await params;
  const item = resolveItem(resolved);
  return <>
    <Breadcrumbs hub="/yacht-services-goa" hubLabel="Yacht experiences" title={item.name} path={`/yacht-services-goa/${item.param}`} />
    <Section2 param_val={{ ...resolved, serviceid: item.param }} service_detail_arr={[item]} />
    <PlanningLinks kind="service" slug={item.param} />
  </>;
}
