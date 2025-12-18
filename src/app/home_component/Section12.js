'use client'
import React from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

//Images
import bg1 from "../assets/home/section12/bg1.png"

//Icons
import { FaRegUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BlogList } from '../our_blog_component/BlogList';
import { format } from 'date-fns';
import Link from 'next/link';

function Section12() {
    //Sorting blog to latsets list
    const sortedBlogList = BlogList.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
       <section className="section12">
        <div className="container sec12_container">
            <div className="row m-0">
                <div className="col-lg-4">
                    <p className="sec12_subtitle">
                        Latest Blog
                    </p>

                    <h2 className="sec12_title">
                        Latest News & updates
                    </h2>

                    <p className="sec12_info">
                        With the largest fleet of luxury sailing and 
                        motor yachts in Santorini we the ultimate sailing experience!
                    </p>
                </div>

                <div className="col-lg-8 sec12_swiper_col">
                   
                    <Swiper  pagination= {{
                                 el: "#sec12_swiper_pagination",
                                 clickable:'true',
                                }}
                    grabCursor= 'true'
                    loop= 'true'
                    slidesPerView = {3}
                    spaceBetween = {20}
                    breakpoints= {{
                        //>=320px Mobile
                       320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                      },

                       //>=500 Tablet
                      500: {
                       slidesPerView: 2,
                       spaceBetween: 20,
                      },

                       //>=990px Mini SCreen
                       990: {
                       slidesPerView: 3,
                       spaceBetween: 20,
                       },
                     }}
                   modules={[Pagination]} 
                   className="sec12_swiper"
                   >
                    {
                        sortedBlogList.map((val,index)=>{
                            return <SwiperSlide key={index}>
                            <div className="sec12_card_main_div">
                               <Image src={val.img} alt={val.alt} className="sec12_img"/>
                                
                              
                               <div className="sec12_swiper_content_main_div">
                                <div className="sec12_calender_div">
                                    {format(new Date(val.date),'dd')} {format(new Date(val.date),'MMM')}
                                </div>
                                <div className="sec12_swiper_info_div">
                                    <div className="sec12_user_comment_div">
                                        <div>
                                            <p className="sec12_user">
                                                <FaRegUser className='user_icon'/> {val.admin}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="sec12_user">
                                                <SlCalender className='user_icon'/> {format(new Date(val.date),'dd-MM-yyyy')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="sec12_swiper_divider"></div>
                                    
                                    <Link href={`/our-blog/${val.param}`}>
                                    <p className="sec12_info_title">
                                        {val.title}
                                    </p>
                                    </Link>
                                    
                                    <div className="sec12_learn_main_div">
                                    <Link href={`/our-blog/${val.param}`}>
                                    <p>
                                        Read More
                                    </p>
                                    </Link>
                                    <div className="sec12_learn_divider"></div>
                                </div>
                                </div>
                               </div>
                               
                            </div>
                          </SwiperSlide>
                        })
                    }
                          
                        <div className="swiper-pagination" id="sec12_swiper_pagination"></div>
                        </Swiper>

                    
                </div>
            </div>
        </div>

        <Image src={bg1} alt="Private Yacht Bachelorette Parties" className="sec12_bg_img"/>
    </section>
    </>
  )
}

export default Section12
