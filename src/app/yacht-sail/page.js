import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../yacht_component/yacht_sell/Section2'

//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "Private Yachts for Rent in Goa | Yacht Club Goa", "description": "Explore yachts and boats for private hire in Goa. Compare onboard features and send your date and guest count to Yacht Club Goa for availability and a quote.", "path": "/yacht-sail"});

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
