import React from 'react'
//Css
import styles from '../styles/about_us/about_us.module.css'

//Bootsrap
import {Container,Row,Col} from '../react_bootstrap_plugin_component/react_bootstrap'

//Images
import img1 from '../assets/about_us/NewSection/1.jpg'
import img2 from '../assets/about_us/NewSection/2.jpg'
import img3 from '../assets/about_us/NewSection/3.jpg'
import img4 from '../assets/about_us/NewSection/4.jpg'

import Image from 'next/image'

function NewSection() {
  return (
    <>
       <section className={styles.new_section}>
       
          {/* Section 1 */}
          <Row className='m-0'>
            <Col lg={6} md={6} className={`${styles.new_info_col_mob} p-0`}>
               <Image src={img1} alt='Yacht Club Goa by Ganesh Narvekar' className={styles.new_img}/>
            </Col>
           
           <Col lg={6} md={6} className={styles.new_info_col_mob}>
            <div className={styles.new_content_main_div}>
              <h2 className={styles.new_title}>
              More Than Just a Yacht Club: Crafting Memories on the Water
              </h2>

              <p className={styles.new_info}>
              From the very beginning, Yacht Club Goa wasn't just about providing yachts; it was about 
              crafting unforgettable experiences. We envisioned a place where guests could escape 
              the ordinary, feeling the gentle caress of the Goan breeze as the sun dips below the 
              horizon, painting the sky in a kaleidoscope of colors. We ensured every yacht embodied 
              this vision, meticulously maintaining the highest standards of quality and ambiance.
              </p>
            </div>
            </Col>
            </Row>
          {/* End of Section 1 */}

          {/* Section 2 */}

          <Row className={`${styles.row_rev_mob} m-0`}>
           
           <Col lg={6} md={6} className={styles.new_info_col_mob}>
            <div className={styles.new_content_main_div}>
              <h2 className={styles.new_title}>
              A Commitment to Service and Safety
              </h2>

              <p className={styles.new_info}>
              At Yacht Club Goa, your safety and comfort are our top priorities. Our dedicated team is 
              committed to providing exceptional service, ensuring your yachting experience is seamless 
              and stress-free. Whether you're a seasoned sailor or a first-time adventurer, we'll guide 
              you with expertise and a genuine passion for the Goan waterways.
              </p>
            </div>
            </Col>


            <Col lg={6} md={6} className={`${styles.new_info_col_mob} p-0`}>
               <Image src={img2} alt='Sailing in the picturesque waters of Goa on a luxury yacht' className={styles.new_img}/>
            </Col>
            </Row>
          {/* End of Section 2 */}

           {/* Section 3 */}
           <Row className='m-0'>
            <Col lg={6} md={6} className={`${styles.new_info_col_mob} p-0`}>
               <Image src={img3} alt="Sailing adventure in Goa's vibrant waters, showcasing the natural beauty of the coastline." className={styles.new_img}/>
            </Col>
           
           <Col lg={6} md={6} className={styles.new_info_col_mob}>
            <div className={styles.new_content_main_div}>
              <h2 className={styles.new_title}>
              Beyond Yachts: A World of Possibilities Awaits
              </h2>

              <p className={styles.new_info}>
              Our journey doesn't stop at luxurious yachts. Over the years, we've expanded our offerings 
              to cater to your diverse desires. Now, you can experience the thrill of jet-skiing alongside 
              the serenity of a private cruise. We understand that every trip is unique, and we strive to 
              create personalized experiences that cater to your specific needs and desires.
              </p>
            </div>
            </Col>
            </Row>
          {/* End of Section 3 */}

           {/* Section 4 */}
           <Row className={`${styles.row_rev_mob} m-0`}>
            
           
           <Col lg={6} md={6} className={styles.new_info_col_mob}>
            <div className={styles.new_content_main_div}>
              <h2 className={styles.new_title}>
              Ready to Write Your Goan Yachting Story?
              </h2>

              <p className={styles.new_info}>
              Yacht Club Goa isn't just a company; it's a portal to a world of possibilities. 
              Whether you dream of romantic getaways, exhilarating celebrations, or simply a 
              day of exploration on the shimmering waters, we have the perfect yacht and experience 
              waiting for you.
              </p>
            </div>
            </Col>

            <Col lg={6} md={6} className={`${styles.new_info_col_mob} p-0`}>
               <Image src={img4} alt='Exquisite luxury yacht on hire at Yacht Club Goa, perfect for private events.' className={styles.new_img}/>
            </Col>
            </Row>
          {/* End of Section 4 */}
          
          <Container>
          <p className={styles.end_line}>
          Explore Yacht Club Goa to browse our yacht options, discover the thrill of jet-skiing, or 
          get a glimpse of the unforgettable parties hosted onboard. Contact us today and let us 
          craft your dream Goan yachting adventure!
          </p>
          </Container>
       </section>
    </>
  )
}

export default NewSection
