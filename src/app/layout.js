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
  title: "Hire Luxury Private Yacht in Goa - YCG",
  description: "Turn your Goa vacation into an extraordinary experience with Yacht Club Goa. We offer the finest luxury yachts for rent in Goa, allowing you to explore the pristine coastline in unparalleled style and comfort.",
 };

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>
        {/* Meta tag */}
        <meta name="keywords" content="Yacht in Goa, Boat Rentals, Cruise in Goa, Yacht Party Goa, Goa Yacht, Yacht Charter Goa, Luxury Yacht Goa" />
        <meta name="revisit-after" content="1 day" />
        <meta name="page-topic" content="Luxury Yachts, Yacht Goa, Boat Rentals, Cruises, Yacht Party Goa, Goa Yacht" />
        <meta name="page-type" content="Luxury Yacht, Yacht Rentals, Boat Rentals, Cruises, Yacht Party" />
        <meta name="author" content="Yacht Club Goa" />
        <meta name="site" content="yachtclubgoa.com" />
        <meta name="copyright" content="Yacht Club Goa" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="owner" content="Yacht Club Goa" />
        <meta name="classification" content="Luxury Yachts, Yacht Rentals, Boat Rentals, Cruises, Yacht Party" />
        <meta name="search engines" content="ALL" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="audience" content="All" />
        <meta name="resource-type" content="Web Page" />
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Goa" />
        <meta name="geo.position" content="15.4989;73.8278" />
        <meta name="ICBM" content="15.4989, 73.8278" />
        <meta name="document-distribution" content="Global" />
        <meta name="distribution" content="Global" />
        {/* End of Meta tag */}
        {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-909WTQ3T9N"/>

        <Script>
          {`
             window.dataLayer = window.dataLayer || []; 
             function gtag(){dataLayer.push(arguments);} 
             gtag('js', new Date()); gtag('config', 'G-909WTQ3T9N'); 
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${fraunces.variable} `} id="body_id">
        <NavbarLayout/>
        {children}
        <FooterLayout/>
      </body>
    </html>
  );
}
