import { BlogDetail } from '@/app/our_blog_detail_component/BlogDetail'
import Section2 from '@/app/our_blog_detail_component/Section2'
import { redirect } from 'next/navigation'
import React from 'react'




//Metadata
export const generateMetadata = ({params}) => 
{   
  // Data
const blog_data = BlogDetail.filter((val)=>val.param === params.blogid)
// End of Data
   if(blog_data.length !== 0)
   {
    
    return{
    title: blog_data[0].meta_title ,
    description:blog_data[0].meta_description,
    alternates:{
        canonical: `${process.env.NEXT_PUBLIC_URL}/our-blog/${params.blogid}`
    }
   }
   }
}
//End of Metadata

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
function page({params}) {
  const getData = () =>
  {
    const blog_detail_arr_val = BlogDetail.filter((val)=>val.param === params.blogid);
    if(blog_detail_arr_val.length !== 0)
    {
      return blog_detail_arr_val
    }
    else
    {
      redirect('/our-blog')
    }
  }
  return (
    <>

      {/* Section 2 */}
      <Section2 param_val={params} blog_detail_arr_val={getData()}/>
      {/* End of Section 2 */}
    </>
  )
}

export default page
