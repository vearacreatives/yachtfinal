import React from 'react'
import Section2 from '../contact_us_component/Section2'
import Section3 from '../contact_us_component/Section3'


//Metadata
export const metadata = {
    title: 'Charter Your Dream Yacht in Goa',
    description: 'Ready to embark on a private adventure unlike any other? Contact Yacht Club Goa today! Our dedicated team is here to answer your questions and help you rent the perfect luxury yacht for your dream getaway in Goa.',
    alternates:{
        canonical: `${process.env.NEXT_PUBLIC_URL}/contact-us`
    }
}
//End of Metadata
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
