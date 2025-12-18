import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Bootstrap
import {Container,Row,Col} from '../../react_bootstrap_plugin_component/react_bootstrap'

//Css
import styles from '../../styles/yacht/yacht_sell.module.css'

//Images
import bg1 from '../../assets/yacht_sell/bg1.png'
import bg2 from '../../assets/yacht_sell/bg2.png'
import { yacht_sell_info } from './yacht_sell_info'

function Section2() {
  return (
    <>
      <section className={styles.section2}>
        <Container>
         <Row>
            {
               yacht_sell_info.map((val,index) => {
                  return<Col lg={4} md={4}>
                  <div className={styles.sec2_card_main_div} key={index}>
                     <Link href={`/yacht-sail/${val.param}`}>
                     <Image src={val.img} alt={val.alt} className={styles.card_img}/>
                     </Link>
                     
                     <Link href={`/yacht-sail/${val.param}`} className={styles.sec2_card_title_link}>
                      {val.name}
                     </Link>

                     <p className={styles.sec2_card_type}>
                      {val.type}
                     </p>

                     <div className={styles.sec2_card_info_val_div}>
                        <p className={styles.sec2_card_info_name}>
                        Length
                        </p>

                        <p className={styles.sec2_card_info_val}>
                        {val.len}
                        </p>
                     </div>

                     <div className={styles.sec2_card_info_val_div}>
                        <p className={styles.sec2_card_info_name}>
                        Capacity
                        </p>

                        <p className={styles.sec2_card_info_val}>
                        {val.capacity}
                        </p>
                     </div>

                     <div className={styles.sec2_card_info_val_div}>
                        <p className={styles.sec2_card_info_name}>
                        Category
                        </p>

                        <p className={styles.sec2_card_info_val}>
                        {val.category}
                        </p>
                     </div>

                     <Link href={`/yacht-sail/${val.param}`} className={styles.link_yacht_sell}>
                     Explore {val.category === 'Boat' ? 'Boat Specs' : 'Yacht Specs'}
                     </Link>
                  </div>
            </Col>
               })
            }
         </Row>
           
        </Container>

        <Image src={bg1} alt='Fun Bachelorette Party Experiences' className={styles.bg1_img}/>

        <Image src={bg2} alt='Bachelorette Party Rentals in Goa' className={styles.bg2_img}/>
      </section>
    </>
  )
}

export default Section2
