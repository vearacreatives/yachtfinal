import LeadTracking from './common_component/LeadTracking';
import { SITE_URL, jsonLd } from './lib/seo.mjs';
import React from 'react';
import { Poppins, Fraunces } from "next/font/google";

export const poppins = Poppins({
  //weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  weight: ['100','400','900'],
  subsets: ["latin"],
  variable: '--font-poppins',
});
export const fraunces = Fraunces({
  // weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  weight: ['100', '200','400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-fraunces',
});
import "./globals.css";


//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLayout from "./common_component/NavbarLayout";
import FooterLayout from './common_component/FooterLayout';

//Script tag
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  title: "Hire Luxury Private Yacht in Goa - YCG",
  description: "Turn your Goa vacation into an extraordinary experience with Yacht Club Goa. We offer the finest luxury yachts for rent in Goa, allowing you to explore the pristine coastline in unparalleled style and comfort.",
 };

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-909WTQ3T9N"/>

        <Script id="google-analytics-init">
          {`
             window.dataLayer = window.dataLayer || []; 
             function gtag(){dataLayer.push(arguments);} 
             gtag('js', new Date()); gtag('config', 'G-909WTQ3T9N'); 
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${fraunces.variable} `} id="body_id">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
          '@context': 'https://schema.org', '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`, name: 'Yacht Club Goa', url: `${SITE_URL}/`,
          email: 'info@yachtclubgoa.in', telephone: '+919325087968'
        }) }} />
        <LeadTracking/>
        <NavbarLayout/>
        {children}
        <FooterLayout/>
      </body>
    </html>
  );
}
