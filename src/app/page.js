

//Css
import Head from 'next/head';
import Section1 from './home_component/Section1';
import Section10 from './home_component/Section10';
import Section12 from './home_component/Section12';
import Section2 from './home_component/Section2';
import Section3 from './home_component/Section3';
import Section4 from './home_component/Section4';
import Section5 from './home_component/Section5';
import Section6 from './home_component/Section6';
import Section7 from './home_component/Section7';
import Section8 from './home_component/Section8';
import Section9 from './home_component/Section9';
import './styles/home/home.css'
import { Metadata } from "next";

//Canonical Tag
export const generateMetadata = () => ({
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
},
openGraph: {
  title: "Yacht in Goa - Yacht Club Goa",
  description: "Luxury Yachts, Private Yachts, Yachts for Hire, Motor Yacht Charters, Sailing Yachts, Catamaran, Speed and Sport Boat, Jet-Ski, Luxury Cruises",
  type: "website",
  siteName: "Yacht Club Goa",
  images: [
    {
      url: "https://yachtclubgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84b86d88.png&w=384&q=75",
    },
  ],
  site_name: "Yacht Club Goa"
},
})
//End of Canonical tag

export default function Home() {
  return (
    <>
   {/* Scripts */}
  
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://yachtclubgoa.com/",
              sameAs: ["http://yachtclubgoa.com/"],
              logo: "https://yachtclubgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84b86d88.png",
              name: "Yacht Club Goa",
              description: "Hire a Private Yacht in Goa with Yacht Club Goa.",
              email: "info@yachtclubgoa.in",
              telephone: "+919325087968",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Betim",
                addressLocality: "Porvorim",
                addressCountry: "IN",
                addressRegion: "Penha de França",
                postalCode: "403521",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Yacht Club Goa",
                  item: "https://yachtclubgoa.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Luxury Yachts In Goa",
                  item: "https://yachtclubgoa.com/yacht-sail/zia-bella",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Speed Boat In Goa",
                  item: "https://yachtclubgoa.com/yacht-sail/angel-luxury-speed-boat",
                },
              ],
            }),
          }}
        />
    {/* End of Scripts */}
    {/* Section 1 */}
    <Section1/>
    {/* End of Section 1 */}

    {/* Section 2 */}
    <Section2/>
    {/* End of Section 2 */}

    {/* Section 3 */}
    <Section3/>
    {/* End of Section 3 */}

    {/* Section 4 */}
    <Section4/>
    {/* End of Section 4 */}

    {/* Section 5 */}
    <Section5/>
    {/* End of Section 5 */}

    {/* Section 6 */}
    <Section6/>
    {/* End of Section 6 */}

    {/* Secction 7 */}
    <Section7/>
    {/* End of Section 7 */}

    {/* Section 8 */}
    <Section8/>
    {/* End of Section 8 */}

    {/* Section 9 */}
    <Section9/>
    {/* End of Section 9 */}

    {/* Section 10 */}
    <Section10/>
    {/* End of Section 10 */}


    {/* Section 12 */}
    <Section12/>
    {/* End of Section 12 */}

    </>
  );
}
