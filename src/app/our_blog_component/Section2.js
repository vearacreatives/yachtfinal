
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Css
import styles from '../styles/blog/blog.module.css'

//Bootstrap
import {Container,Row,Col} from '../react_bootstrap_plugin_component/react_bootstrap'

//Icons
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BlogList } from './BlogList'
import { format } from 'date-fns'

function Section2() {
    //sorting list-suhana
    const sortedBlogList = BlogList.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <section className={styles.section2}>
        <Container>
        <Row>
            {
                sortedBlogList.map((val,index) => {
                    
                    return<Col lg={4} md={4}>
                        <div className={styles.sec2_card_main_div} key={index}>
                        {/* <Link href={`/our-blog/${val.param}`}> */}
                            <Image src={val.img} alt={val.alt} className={styles.card_img}/>
                            {/* </Link> */}
    
                            <div className={styles.sec2_card_info_div}>
                                <div className={styles.sec2_card_info_date_div}>
                                   <p className={styles.sec2_card_date}>
                                    {format(new Date(val.date), 'dd')}
                                   </p>
    
                                   <p className={styles.sec2_card_date_month}>
                                   {format(new Date(val.date), 'MMM')}
                                   </p>
                                </div>
    
                                <div className={styles.sec2_card_content_div}>
                                    <div className={styles.sec2_admin_comment_info}>
                                        <div>
                                            <p className={styles.sec2_card_admin_name}>
                                                <CiUser className={styles.sec2_card_icon}/> {val.admin}
                                            </p>
                                        </div>

                                        <div>
                                            <p className={styles.sec2_card_admin_name}>
                                                <SlCalender className={styles.sec2_card_icon}/> {format(new Date(val.date),'dd-MM-yyyy')}
                                            </p>
                                        </div>
                                    </div>
    
                                    <div className={styles.sec2_card_divider}></div>
                                    
                                    <Link href={`/our-blog/${val.param}`}>
                                    <p className={styles.sec2_card_title}>
                                    {val.title}
                                    </p>
                                    </Link>
                                    
                                    <Link href={`/our-blog/${val.param}`}>
                                    <button className={styles.btn_sec2_card_learn_more}>
                                        Read More 
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
    
                })
            }
            </Row>
          
        </Container>
      </section>
     
    </>
   
  )
  
}

export default Section2
