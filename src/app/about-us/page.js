import React from 'react'
import Section2 from '../about_us_component/Section2'
import Section6 from '../about_us_component/Section6'
import NewSection from '../about_us_component/NewSection'

//Metadata
export const metadata = {
  title: "Your Gateway to Goa's Private Luxury Yachting",
  description: "Yacht Club Goa is a team of passionate professionals dedicated to providing exceptional experiences with private luxury yachts in Goa. We offer a diverse fleet, impeccable service, and a commitment to creating lasting memories that will stay with you forever.",
  alternates:{
    canonical: `${process.env.NEXT_PUBLIC_URL}/about-us`
  }
};
//End of Metadata

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
