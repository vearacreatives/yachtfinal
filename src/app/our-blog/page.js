import socialImage from '../assets/home/section1_banner.jpg';
import { pageMetadata } from '../lib/seo.mjs';
import React from 'react'
import Section2 from '../our_blog_component/Section2'

//Metadata
export const metadata = pageMetadata({image: socialImage, "title": "Goa Yacht Planning Guides | Yacht Club Goa Blog", "description": "Read guides to planning yacht outings in Goa, from celebrations and pre-wedding shoots to booking tips and choosing the right experience for your group.", "path": "/our-blog"});

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
