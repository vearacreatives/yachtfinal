import React from 'react'
import Section2 from '../yacht_services_goa_component/Section2'

//Metadata
export const metadata = {
    title: 'Yacht Services Goa | Yacht Club Goa',
    description: 'Yacht Services Goa',
    alternates:{
       canonical: `${process.env.NEXT_PUBLIC_URL}/yacht-services-goa`
    }
}
//End of Meta data

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
