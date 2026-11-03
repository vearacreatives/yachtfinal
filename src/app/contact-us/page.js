import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../contact_us_component/Section2'
import Section3 from '../contact_us_component/Section3'


//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "Contact Yacht Club Goa | Yacht Booking Enquiries", "description": "Contact Yacht Club Goa for yacht availability and a personalised quote. Share your date, guest count and occasion to plan your private yacht experience.", "path": "/contact-us"});

function page() {
  return (
    <>

      {/* Section 2 */}
      <Section2/>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <Section3/>
      {/* End of Section 3 */}
    </>
  )
}

export default page
