import React from 'react'

import {Container,Row,Col} from '../react_bootstrap_plugin_component/react_bootstrap'

//Css
import styles from '../styles/about_us/about_us.module.css'

import Image from 'next/image'

//Images
import sec2_main_img  from '../assets/about_us/section2/sec2_main_img.jpg'
import card_img1 from '../assets/about_us/section2/card_img1.jpeg'
import card_img2 from '../assets/about_us/section2/card_img2.jpeg'
import bg_img1 from '../assets/about_us/section2/bg_img1.png'
import bg_img2 from '../assets/about_us/section2/bg_img2.png'
import bg_img3 from '../assets/about_us/section2/bg_img3.png'

function Section2() {
  return (
    <>
      <section className={styles.section2}>
        <Container>
        <div className={styles.sec2_title_div}>
                <p className={styles.sec2_subtitle}>
                About Us
                </p>

                <h1 className={styles.sec2_title}>
                Setting Sail on a Legacy
                </h1>

                </div>
            <Row>
               <Col lg={6}>
                <Image src={sec2_main_img} alt='Know Yacht Club Goa' className={styles.sec2_main_img}/>
                
               </Col>

               <Col lg={6}>
                <div className={styles.sec2_content_main_div}>
                <div className={styles.sec2_content_div}>
                  <p className={styles.sec2_content_title}>
                  The Story of Yacht Club Goa (Established in 2002)
                  </p>
                  <p className={styles.sec2_content}>
                  Imagine the year 2002. Goa, a land of vibrant culture and breathtaking beauty, 
                  was yet to fully embrace the luxurious escape offered by private yachting. 
                  </p>

                  <p className={styles.sec2_content}>
                  That's when Yacht Club Goa, a pioneer in its field, set sail on its mission: to 
                  share the magic of yachting with everyone.
                  </p>
                </div>
                </div>

                {/* Card */}
                <div className={styles.sec2_card_main_div}>
                   <div className={styles.sec2_card_div}>
                       <Row>
                        <Col lg={6} md={6} className={styles.sec2_card_info_col}>
                            <div className={styles.sec2_card_info_div}>
                               <Image src={card_img1} alt='Luxurious yacht cabin' className={styles.card_img}/>
                                
                              <p className={styles.sec2_card_link}>
                              Your Safe Harbor Awaits
                              </p>
                            
                              <p className={styles.sec2_card_info}>
                              Yacht Club Goa's impeccable safety standards and experienced crew ensure a 
                              stress-free, unforgettable journey.
                              </p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className={styles.sec2_card_info_col}>
                        <div className={styles.sec2_card_info_div}>
                               <Image src={card_img2} alt='Yacht in Goa-luxurious cabins' className={styles.card_img}/>
                                
                              <p className={styles.sec2_card_link}>
                              Experience Unmatched Excellence
                              </p>
                            
                              <p className={styles.sec2_card_info}>
                              From plush interiors to attentive service exceeding every expectation, 
                              Yacht Club Goa curates a personalized yachting adventure that surpasses 
                              all others.
                              </p>
                            </div>
                        </Col>
                       </Row>
                   </div>
                </div>
                {/* End of Card div */}
                </Col>
            </Row>

            <Image src={bg_img1} alt='Goa Birthday Party Venues' className={styles.bg_img1}/>
        </Container>
        <Image src={bg_img2} alt='Luxury Birthday Celebrations in Goa' className={styles.bg_img2}/>

        <Image src={bg_img3} alt='Themed Birthday Parties in Goa' className={styles.bg_img3}/>
      </section>
    </>
  )
}

export default Section2
