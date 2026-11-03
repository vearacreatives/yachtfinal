import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../gallery_component/Section2';

//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "Yacht Photos in Goa | Yacht Club Goa Gallery", "description": "Explore photos of yachts, onboard spaces and celebrations with Yacht Club Goa. Browse the gallery for ideas for your private yacht experience in Goa.", "path": "/gallery"});

function page() {
  return (
    <>

      {/* Section 2 */}
      <Section2/>
      {/* End of Section 2 */}
    </>
  )
}

export default page
