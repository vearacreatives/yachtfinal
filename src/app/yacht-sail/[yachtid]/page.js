

import Section2 from '@/app/yacht_component/yacht_detail/Section2'
import { yacht_detail_data } from '@/app/yacht_component/yacht_detail/yacht_detail_data'
import { redirect } from 'next/navigation'

import React from 'react'

//Metadata
export const generateMetadata = ({params}) => 
{
  //Yatch Detail
  const yacht_detail = yacht_detail_data.filter((val)=> val.param === params.yachtid)
  if(yacht_detail.length !== 0)
  {
    
  const yacht_lenght = yacht_detail[0].yacht_measure;
  const yacht_cabin = yacht_detail[0].no_cabin
  //End of Yacht Detail

  const param_id_val = params.yachtid;

  const param_id_space = param_id_val.replace(/-/g, " ");

  const param_id = capitalizeFirstLetterOfEachWord(param_id_space);

  return {
     title: `${param_id} - Your Private Luxury Awaits`,
     description: `Experience the epitome of luxury aboard the ${param_id}.This ${yacht_lenght} masterpiece offers ${yacht_cabin === '' ? '' : `${yacht_cabin} spacious cabins`},a stunning view and top-of-the-line amenities. Perfect for indulging in a private luxury yacht rental in Goa`,
     alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/yacht-sail/${params.yachtid}`
    }
  }
  }
}

 // Capitalize the first letter of each word
 function capitalizeFirstLetterOfEachWord(str) 
 {
  // Split the string into an array of words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
      // If the word is not empty, capitalize the first letter and append the rest of the word
      if (word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
          // If the word is empty, return it as is (handles multiple spaces)
          return word;
      }
  });

  // Join the array of words back into a single string with spaces between words
  return capitalizedWords.join(' ');
}
//End of Capitalize the first letter of each word
//End of Metadata

function page({params}) {
  const getData = () => {
      const yach_detail = yacht_detail_data.filter((val)=> val.param === params.yachtid)
      if(yach_detail.length !== 0)
      {
        return yach_detail
      }
      else
      {
        redirect('/yacht-sail')
      }
    }
  return (
    <>

      {/* Section 2 */}
      <Section2 yach_detail={getData()}/>
      {/* End of Section 2 */}
    </>
  )
}

export default page
