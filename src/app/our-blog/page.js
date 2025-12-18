import React from 'react'
import Section2 from '../our_blog_component/Section2'

//Metadata
export const metadata = {
    title: 'Blog | Yacht Club Goa',
    description: 'News Grid Yacht Club Goa',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/our-blog`
    }
}

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
