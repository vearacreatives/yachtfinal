import React from 'react';
import Link from 'next/link';
import { canonicalUrl, jsonLd } from '../lib/seo.mjs';
import styles from '../styles/common_component/internal-links.module.css';
export default function Breadcrumbs({ hub, hubLabel, title, path }) {
  const items = [{ name: 'Home', path: '/' }, { name: hubLabel, path: hub }, { name: title, path }];
  return <>
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>{items.map((item,index) => <li key={item.path}>
        {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
      </li>)}</ol>
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: items.map((item,index) => ({ '@type': 'ListItem', position: index+1, name: item.name, item: canonicalUrl(item.path) }))
    }) }} />
  </>;
}
