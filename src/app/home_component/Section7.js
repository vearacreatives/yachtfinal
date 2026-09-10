
'use client'
import React, { useState } from 'react'

import Image from 'next/image'

//Image
import bg1 from "../assets/home/section7/bg1.png"

//Icons

import { Col, Container, Row } from 'react-bootstrap'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


//Navigation icon
import { FaAngleLeft,FaAngleRight} from "react-icons/fa6";
import Link from 'next/link';
import { Section7_data } from './Section7_data'

//Light Box
// import 'lightbox.js-react/dist/index.css'
import '../../../node_modules/lightbox.js-react/dist/index.css'
//End of Light Box


function Section7() {


    //Navigation swiper
    const [img_swiper,setImg_swiper] = useState(null)

    const get_prev_fun = () =>
    {
        if(img_swiper)
        {
            img_swiper.slidePrev();
        }
    }

    const get_next_fun = () =>
    {
        if(img_swiper)
        {
            img_swiper.slideNext();
        }
    }

    //Full screen
    const fullscreen_fun = (val) =>
    {
      const img_id = document.getElementById(val);
      // img_id.style.objectFit = 'contain'
      img_id.requestFullscreen();
    }

    //End of Full screen
  return (
    <>
      <section className="section7">
            <div className="sec7_img_title_main_div">
             <p className='sec7_subtitle'>
             Memories
             </p>

             <h2 className='sec7_main_title'>
             From our top clients experience
             </h2>
            </div>

            <div className="sec7_data_div">
                <div className="sec7_content_main_div">
                  <div className="sec7_content_div">
                     <p className="sec7_title">
                     Celebrate Unforgettable Moments on the Water
                     </p>

                        <p className='sec7_info'>
                        Turn Milestones into Magic: Craft unforgettable memories aboard your private yacht. 
                        Birthdays, proposals, and celebrations of all kinds become extraordinary on the 
                        sparkling waters of Goa.
                        </p>
                  </div>
                </div>
            </div>

            <Container>
            <Row>
            <Col lg={1} md={1} xs={1} className='img_carousel_nav_col p-0'>
            <FaAngleLeft id='img_carousel_next_prev' 
                         onClick={()=> get_prev_fun()}
                         className='img_carousel_nav_icon'/>
            </Col>

            <Col lg={10} md={10} xs={10}>
           
            <Swiper navigation={
                {
                    nextEl: '#img_carousel_next_id',
                    prevEl: '#img_carousel_next_prev'
                }
                } 
                onSwiper={setImg_swiper}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    //>=320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },

                    //>=500px
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 30
                      },

                     //>=990px
                     990: {
                        slidesPerView: 3,
                        spaceBetween: 30
                      }
                }}
                className="img_carousel_swiper">
        {
          Section7_data.map((val,index)=>{
            return<SwiperSlide key={index}>
            <Image src={val.img} alt={val.alt} className='img_carousel_img' 
                   id={val.id} 
                  onClick={() => fullscreen_fun(val.id)}
                   />
        </SwiperSlide>
          })
        }

        <SwiperSlide>
            <Link href='/gallery' className='img_carousel_swiper_link'>
                + More
            </Link>
        </SwiperSlide>
      </Swiper>
            </Col>

            <Col lg={1} md={1} xs={1} className='img_carousel_nav_col p-0'>
            <FaAngleRight id='img_carousel_next_id' 
                          onClick={() => get_next_fun()}
                          className='img_carousel_nav_icon'/>
            </Col>
        </Row>
            </Container>

        <Image src={bg1} alt="Destination Bachelorette Party in Goa" className="sec7_bg1_img"/>

    </section>
    </>
  )
}

export default Section7
