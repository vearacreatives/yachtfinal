'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

//Css
import styles from '../styles/blog/blog_detail.module.css'

import {Container,Row,Col,FormGroup,FormControl} from '../react_bootstrap_plugin_component/react_bootstrap'


//Icons
import { CiUser } from "react-icons/ci";
import { FaComments } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import Link from 'next/link'
import { BlogDetail } from './BlogDetail'

//Datefns
import { format} from 'date-fns'
import { BlogList } from '../our_blog_component/BlogList'

// Star Rating
import { Rating } from 'react-simple-star-rating'
import { SlCalender } from "react-icons/sl";

import ReactDOMServer from 'react-dom/server';
import Loader from '../common_component/Loader'

function Section2({param_val,blog_detail_arr_val}) {

  const [blog_detail_arr,setBlog_detail_arr] = useState([])
  const [loading,setLoading] = useState(false)
   
  //  Storing data and creating structured schema
  useEffect(()=>{

  if(blog_detail_arr_val.length !== 0)
  {
    //console.log(blog_detail_arr_val)
    setBlog_detail_arr(blog_detail_arr_val)
    setLoading(true)
    const htmlContent = blog_detail_arr_val[0].blog_info;
  const htmlString = getHtmlString(htmlContent);
  
  //Ceating array for different schema
  const schemas = [
    structured_schema(htmlString,blog_detail_arr_val),
    new_schema(blog_detail_arr_val)
  ]

  //FAQ structured
  if(param_val.blogid === 'monsoon-in-goa-why-yacht-rides-are-still-a-vibe')
  {
    schemas.push(blogfaq1_schema(blog_detail_arr_val));
  }
  if(param_val.blogid === 'what-to-pack-for-a-yacht-ride-during-goa-monsoon-season')
  {
    schemas.push(blogfaq2_schema(blog_detail_arr_val));
  }
  //Script

    // Add each schema as a separate <script>
    const scriptElements = schemas.map((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaObj);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scriptElements.forEach((script) => {
        document.head.removeChild(script);
      });
    };

  }
 
  },[])
  

  //Structured schema
  const getHtmlString = (content) => ReactDOMServer.renderToStaticMarkup(content);

  //sorting list-suhana
  const sortedBlogList = BlogList.sort((a, b) => new Date(b.date) - new Date(a.date));

  
  // First schema
  const structured_schema = (content,blog_detail_arr_val) => ({
    "@context": "http://schema.org",
    "@type": "Article",
    "name": blog_detail_arr_val[0].name,
    "author": {
      "@type": "Person",
      "name": "Yacht Club"
    },
    "datePublished": blog_detail_arr_val[0].date,
    "image": `${process.env.NEXT_PUBLIC_URL}${blog_detail_arr_val[0].img.src}`,
    "articleBody": content,
    "url": `${process.env.NEXT_PUBLIC_URL}/our-blog/${param_val.blogid}`,
    "publisher": {
      "@type": "Organization",
      "name": "Yacht Club Goa"
    }
  })

  //Second schema
  const new_schema = (blog_detail_arr_val) => ({
   "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${process.env.NEXT_PUBLIC_URL}/our-blog/${param_val.blogid}`
  },
  "headline": blog_detail_arr_val[0].meta_title,
  "description": blog_detail_arr_val[0].meta_description,
  "image": `${process.env.NEXT_PUBLIC_URL}${blog_detail_arr_val[0].img}`, 
  "author": {
    "@type": "Organization",
    "name": "Yacht Club Goa"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Yacht Club Goa",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_URL}/logo.png`
    }
  },
  "datePublished": blog_detail_arr_val[0].date,
  "dateModified": blog_detail_arr_val[0].date

  })

  //FAQ Schema
  const blogfaq1_schema = () => ({
   "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it worth visiting Goa in monsoon if beaches are closed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! The beaches may be rough, but the rivers, waterfalls, spice plantations, and monsoon yacht rides offer a different, quieter experience of Goa."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get wet on a yacht during monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if you want to. Our decks are covered and cozy. You can stay dry or dance in the drizzle — your call."
      }
    },
    {
      "@type": "Question",
      "name": "Are yacht prices lower during monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often yes! Off-season rates apply, and we offer monsoon-specific discounts and packages."
      }
    }
  ]


  })

  const blogfaq2_schema = () => ({
    "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I wear on a yacht during Goa’s monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Opt for breathable, quick-dry outfits like flowy dresses, linen shirts, or light jackets. Avoid heavy fabrics or heels."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to bring my own food on the yacht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can bring your own snacks, but Yacht Club Goa also offers onboard catering. Just let us know your preference while booking."
      }
    },
    {
      "@type": "Question",
      "name": "Are power outlets or charging points available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most of our yachts have USB or basic charging ports. However, carrying a power bank is still advisable for uninterrupted usage."
      }
    }
  ]

  })
  
  return (
    <>
    {
      loading ?
      <>
      <section className={styles.section2}>
        <Container>
        {
            blog_detail_arr.map((blog_val,index)=>{
              return <div key={index}>
              <h1 className={styles.blog_title}>
              {blog_val.name}
              </h1>
              <Row>
              <Col lg={8}>
                  {/* Blog Image and Admin, Count Comments, Description */}
                 <div className={styles.blog_img_main_div}>
                   <Image src={blog_val.img} alt={blog_val.alt} className={styles.sec2_blog_img}
                          width={856} height={500}
                          />
  
                   <div className={styles.blog_date_div}>
                      <p className={styles.sec2_blog_date}>
                        {format(new Date(blog_val.date),'dd')}
                      </p>
  
                      <p className={styles.sec2_blog_month}>
                         {format(new Date(blog_val.date),'MMM')} 
                      </p>
                   </div>
                 </div>
  
                 <div className={styles.blog_admin_comments_main_div}>
                      <div>
                         <p className={styles.blog_admin_name}>
                          <CiUser className={styles.blog_icon}/> {blog_val.admin_name}
                         </p>
                      </div>

                      <div>
                         <p className={styles.blog_admin_name}>
                          <SlCalender className={styles.blog_icon}/> {format(new Date(blog_val.date),'dd-MM-yyyy')}
                         </p>
                      </div>

                      <div>
                         <p className={styles.blog_admin_name}>
                          Blog / <Link href={`/our-blog/${blog_val.param}`} className={styles.blog_breadcrum_link}>
                          {blog_val.name}
                          </Link>
                         </p>
                      </div>
                 </div>
                
                 <div className={styles.blog_info}>
                {blog_val.blog_info}
                 </div>
                 {/* End of Blog Image and Admin, Count Comments, Description */}
  
                 <div className={styles.blog_divider}></div>
  
              </Col>
  
              <Col lg={4}>
                  {/* Latest Post */}
                  <div className={styles.latest_blog_div}>
                      <p className={styles.latest_blog_title}>
                          Latest Post
                      </p>
                       
                       {
                        sortedBlogList.map((latest_val,index)=>{
                          return<div className={styles.latest_blog_info_div} key={index}
                                 style={{display: param_val.blogid === latest_val.param ? 'none' : 'flex'}}>
                          <div>
                          <Image src={latest_val.img} alt={latest_val.alt} className={styles.latest_blog_img}/>
                          </div>
   
                          <div>
                           <p className={styles.latest_blog_auth}>
                               <FaCircleUser className={styles.latest_blog_auth_icon}/> {latest_val.admin}
                           </p>
   
                           <Link href={`/our-blog/${latest_val.param}`} className={styles.latest_blog_link}>
                           {latest_val.title}
                           </Link>
                          </div>
                       </div>
                        })
                       }
                  </div>
                  {/* End of Latest Post */}
                 
             </Col>
          </Row>
             
               {/* Tag div */}
                 <div className={styles.blog_tag_main_div}>
                     <div className={styles.blog_tag_name_main_div}>
                      <p className={styles.blog_tag_title}>
                          Tags
                      </p>
  
                      <div className={styles.blog_tag_name_div}>
                        {
                          blog_val.tag1.map((tag1_val,index)=>{
                            return<p className={styles.tag_name_link} key={index}>
                                   {tag1_val.tag_name}
                                 </p>
                          })
                        }
                      </div>
                     </div>

                 </div>
                 {/* End of Tag div */}
                  
                  {/* Divider */}
                  <div className={styles.rating_divider}></div>
                  {/* End of Divider */}

                 {/* Review */}
                 <div className={styles.rating_main_div}>
                 <p className={styles.blog_tag_title}>
                  Rating:
                 </p>
                 <div className={styles.rating_val_main_div}>
                 <p className={styles.rating_value}>
                    4.9/5 
                  </p>
                  <Rating readonly={true} 
                                  initialValue={4.7} 
                                  allowFraction={true} 
                                  size={20}/>
                 </div>
                 </div>
          </div>

          
            })
          }
       
        </Container>

     
      </section>
      </>
      :
      <Loader/>
    }
    </>
  )
}

export default Section2
