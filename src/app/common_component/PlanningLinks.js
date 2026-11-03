import React from 'react';
import Link from 'next/link';
import { planningLinks } from '../lib/internal-links.mjs';
import styles from '../styles/common_component/internal-links.module.css';
export default function PlanningLinks({ kind, slug }) {
  const links = planningLinks(kind, slug);
  if (!links.length) return null;
  return <section className={styles.planning} aria-label="Yacht planning resources">
    <h2>Plan your yacht experience</h2>
    <p>Explore these guides and options, then confirm availability and arrangements with our team.</p>
    <ul>{links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
  </section>;
}
