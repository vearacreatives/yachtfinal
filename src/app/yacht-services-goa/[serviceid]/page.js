import { ServiceDetail } from '@/app/yacht_service_detail_component/ServiceDetail'
import Section2 from '../../yacht_service_detail_component/Section2'
import React from 'react'
import { redirect } from 'next/navigation'

//Metadata
export const generateMetadata = ({params}) => 
    {   
      // Data
    const service_data = ServiceDetail.filter((val)=>val.param === params.serviceid)
    // End of Data
        if(service_data.length !== 0)
        {
            
        return{
        title: service_data[0].meta_title,
        description: service_data[0].meta_description,
        alternates:{
            canonical: `${process.env.NEXT_PUBLIC_URL}/yacht-services-goa/${params.serviceid}`
        }
       }
        }
    }
    //End of Metadata

function page({params}){
     const getData = () => {
    const service_detail_arr = ServiceDetail.filter((val) => val.param === params.serviceid)
    if(service_detail_arr.length !== 0)
    {
      return service_detail_arr
    }
    else
    {
      redirect('/yacht-services-goa')
    }
  }
    return(
        <>
        {/* <Section2/> */}
        <Section2 param_val={params} service_detail_arr={getData()}/>
        </>
    )
}

export default page