import { relatedArticles } from '../lib/internal-links.mjs';
import React from 'react'
import Image from 'next/image'

//Css
import styles from '../styles/blog/blog_detail.module.css'

import {Container,Row,Col} from '../react_bootstrap_plugin_component/react_bootstrap'


//Icons
import { CiUser } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

import Link from 'next/link'

//Datefns
import { format} from 'date-fns'
import { BlogList } from '../our_blog_component/BlogList'

// Star Rating
import { SlCalender } from "react-icons/sl";


function Section2({param_val,blog_detail_arr_val}) {
  const blog_detail_arr = blog_detail_arr_val;
  const related = relatedArticles(param_val.blogid);
  const sortedBlogList = related.map(link => BlogList.find(item => item?.param === link.href.split('/').pop())).filter(Boolean);
  return (
    <>
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
                          <Link href="/our-blog" className={styles.blog_breadcrum_link}>
                          Goa yacht planning guides
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
                  {/* Related guides */}
                  <div className={styles.latest_blog_div}>
                      <p className={styles.latest_blog_title}>
                          Related guides
                      </p>
                       
                       {
                        sortedBlogList.map((latest_val,index)=>{
                          return<div className={styles.latest_blog_info_div} key={index}
                                 style={{display: 'flex'}}>
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
                  {/* End of Related guides */}
                 
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


          </div>

          
            })
          }
       
        </Container>

     
      </section>
      </>

    </>
  )
}

export default Section2
