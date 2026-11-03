import { canonicalUrl } from './lib/seo.mjs';
import { BlogDetail } from './our_blog_detail_component/BlogDetail';
import { yacht_detail_data } from './yacht_component/yacht_detail/yacht_detail_data';
import { ServiceDetail } from './yacht_service_detail_component/ServiceDetail';
export default function sitemap() {
  const paths = ['/', '/about-us', '/contact-us', '/gallery', '/our-blog', '/yacht-sail', '/yacht-services-goa',
    ...BlogDetail.map(item => `/our-blog/${item.param}`),
    ...yacht_detail_data.map(item => `/yacht-sail/${item.param}`),
    ...ServiceDetail.map(item => `/yacht-services-goa/${item.param}`)];
  return [...new Set(paths)].map(path => ({ url: canonicalUrl(path) }));
}
