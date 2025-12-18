import React from 'react'
import Section2 from '../gallery_component/Section2';

//Metadata
export const metadata = 
{
    title: 'Gallery | Yacht Club Goa',
    description: 'Gallery Yacht Club Goa',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/gallery`
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
