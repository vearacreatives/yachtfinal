import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../about_us_component/Section2'
import Section6 from '../about_us_component/Section6'
import NewSection from '../about_us_component/NewSection'

//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "About Yacht Club Goa | Private Yacht Rentals", "description": "Meet Yacht Club Goa and explore private yacht experiences for celebrations, sunset outings and group trips in Goa. Contact our team to plan your booking.", "path": "/about-us"});

function page() {
  return (
    <>

      {/* Section 2 */}
      <Section2/>
      {/* End of Section 2 */}

      {/* New Section */}
      <NewSection/>
      {/* End of New Section */}

      {/* Section 6 */}
      <Section6/>
      {/* End of Section 6 */}

    </>
  )
}

export default page
