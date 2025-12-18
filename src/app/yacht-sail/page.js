import React from 'react'
import Section2 from '../yacht_component/yacht_sell/Section2'

//Metadata
export const metadata = {
  title: "Rent Luxury Yachts in Goa: Explore unmatched Luxury",
  description: "Experience unparalleled luxury at sea with Yacht Club Goa. Explore the stunning coastline of Goa aboard our magnificent yachts.",
  alternates:{
    canonical: `${process.env.NEXT_PUBLIC_URL}/yacht-sail`
  }
};
//End of Metadata

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
