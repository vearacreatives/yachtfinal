
'use client'
import React from 'react'
import Footer from './Footer'

import { usePathname } from 'next/navigation'

function FooterLayout() {
  const path_name = usePathname();

   // Define regular expressions for dynamic routes
   const dynamicYachtSellPathPattern = /^\/yacht-sail\/[^/]+$/;
   const isYachtSellDynamic = dynamicYachtSellPathPattern.test(path_name);

     //Blog link
  const blog_link_pattern = /^\/our-blog\/[^/]+$/;
  const blog_link = blog_link_pattern.test(path_name);

  //Servives
  const service_link_pattern = /^\/yacht-services-goa\/[^/]+$/;
  const service_link = service_link_pattern.test(path_name);

  const check_path_name = (path_name === '/') || 
                          (path_name === '/about-us') || 
                          (path_name === '/yacht-sail') ||
                          (isYachtSellDynamic) ||
                          (path_name === '/contact-us') ||
                          (path_name === '/our-blog') ||
                          (blog_link) ||
                          (path_name === '/gallery') ||
                          (path_name === '/yacht-services-goa')||
                          (service_link)

  return (
    <div>
      {check_path_name && <Footer/>}
    </div>
  )
}

export default FooterLayout
