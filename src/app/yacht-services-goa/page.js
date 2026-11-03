import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../yacht_services_goa_component/Section2'

//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "Yacht Experiences and Celebrations in Goa | Yacht Club Goa", "description": "Plan a yacht birthday, proposal, pre-wedding shoot, sunset outing or corporate event in Goa. Explore experiences and enquire about your preferred date.", "path": "/yacht-services-goa"});

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
