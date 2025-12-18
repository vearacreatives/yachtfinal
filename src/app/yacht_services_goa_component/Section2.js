import React from 'react'
import Link from 'next/link'
//Css
import styles from '../styles/yacht_services_goa/yacht_services_goa.module.css'

//Bootstrap
import {Container,Row,Col} from '../react_bootstrap_plugin_component/react_bootstrap'


import Image from 'next/image'
import { service_data } from './service_data'

function Section2() {
  return (
    <>
      <section className={styles.section2}>
        <Container>
            <p className={styles.sec2_subtitle}>
            Our Services
            </p>

            <h1 className={styles.sec2_title}>
            Yacht Club Goa Charters & Celebrations
            </h1>

            <p className={styles.sec2_info}>
            Create unforgettable moments on the stunning waters of Goa with Yacht Club Goa! 
            From extravagant birthday celebrations and exhilarating bachelorette parties to 
            romantic proposals, stunning pre-wedding shoots, and unforgettable corporate events, 
            we offer a luxurious escape tailored to your desires. Impress your guests, celebrate 
            in style, and create memories that last a lifetime aboard our elegant yachts.
            </p>
           
           {/* Row */}
           <Row>
           {
            service_data.map((val,index)=>{
              return<Col lg={3} md={4} key={index}>
                    <Link href={`/yacht-services-goa/${val.param}`}>
                     <Image src={val.img} alt={val.alt} className={styles.services_img}/>
                     </Link>
                      <Link href={`/yacht-services-goa/${val.param}`}>
                       <p className={styles.service_name}>
                          {val.name}
                        </p>
                        </Link>
                  
              </Col>
            })
           }
           </Row>
          
           {/* End of Row */}
        </Container>
      </section>
    </>
  )
}

export default Section2
