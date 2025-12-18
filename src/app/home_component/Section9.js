'use client'

import Image from 'next/image'

//Images
import swiper_img1 from "../assets/home/section9/swiper images/1.jpg";
import swiper_img2 from "../assets/home/section9/swiper images/2.jpg";
import swiper_img3 from "../assets/home/section9/swiper images/3.jpg";

import quote from "../assets/home/section9/swiper images/quote.svg";
import swiper_bg_img from "../assets/home/section9/swiper images/swiper_bg_img.png";
import bg2 from "../assets/home/section9/bg2.png";
import bg1 from "../assets/home/section9/bg1.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Section9() {
  return (
    <>
      <section className="section9">
        <div className="container">
            <p className="sec9_subtitle">
                Testimonials 
            </p>
            <div className='sec9_title_div'>
            <h2 className="sec9_title">
                From our top clients experience
            </h2>
            </div>

            
           <Swiper  pagination= {{
                                 el: "#sec9_swiper_pagination_id",
                                 clickable:'true',
                                }}
                    grabCursor= 'true'
                    loop= 'true'
                   modules={[Pagination]} 
                   className="sec9_swiper"
                   >
                 {/* Slide 1 */}
                 <SwiperSlide>
                    <div className="sec9_swiper_div">
                        <div>
                           <div className="sec9_test_img_div">
                              <Image src={swiper_img1} alt="Binita Patel at Yacht Club Goa" className="sec9_test_img"/>
                           </div>
                        </div>

                        <div>
                            <div className="sec9_test_info_main_div">
                                <div className="sec9_test_info_div">
                                    <Image src={quote} alt="Luxury Bachelorette Party Venues" className="sec9_quote_img"/>

                                    <p className="sec9_test_info">
                                    The day on the yacht was just perfect. We had a fantastic time… one of 
                                    my best and amazing experience . The crew were so friendly and 
                                    cooperative. And thanks to crew member for clicking the best photos 
                                    for us which we can cherish for life time.
                                    </p>

                                    <p className="sec9_test_name">
                                    Binita Patel
                                    </p>
                                </div>

                                    <Image src={swiper_bg_img} alt="Goa Bachelorette Party Ideas" className="sec9_swiper_bg_img"/>
                                
                            </div>
                        </div>
                    </div>
                 </SwiperSlide>
                 {/* End of Slide 1*/}
                 
                 {/* Slide 2 */}
                 <SwiperSlide>
                    <div className="sec9_swiper_div">
                        <div>
                           <div className="sec9_test_img_div">
                              <Image src={swiper_img2} alt="Shivi Talwar at Yacht Club Goa" className="sec9_test_img"/>
                           </div>
                        </div>

                        <div>
                            <div className="sec9_test_info_main_div">
                                <div className="sec9_test_info_div">
                                    <Image src={quote} alt="Private Yacht Bachelorette Parties" className="sec9_quote_img"/>

                                    <p className="sec9_test_info">
                                    The BEST Yacht experience in goa. I have been staying in goa for 4 years now and I am 
                                    surprised I found this so late in life. Ganesh is a gem person and he will help you 
                                    book the yacht and guide you well. The staff is soooo good onboard and they provide 
                                    an amazing speaker to enjoy music and plates, spoons and chips and cold drink too. 
                                    I can’t thank them enough for that amazing sunset. My mom dad also loved it and can’t 
                                    wait to take my friends for the same experience!! You guys are amazing !! If I could 
                                    would give more than 5 stars !!!
                                    </p>

                                    <p className="sec9_test_name">
                                      Shivi Talwar
                                    </p>
                                </div>

                                    <Image src={swiper_bg_img} alt="Bachelorette Party Activities in Goa" className="sec9_swiper_bg_img"/>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* End of Slide 2 */}

                 {/* Slide 3 */}
                 <SwiperSlide>
                    <div className="sec9_swiper_div">
                        <div>
                           <div className="sec9_test_img_div">
                              <Image src={swiper_img3} alt="Vishakha N at Yacht Club Goa" className="sec9_test_img"/>
                           </div>
                        </div>

                        <div>
                            <div className="sec9_test_info_main_div">
                                <div className="sec9_test_info_div">
                                    <Image src={quote} alt="Destination Bachelorette Party in Goa" className="sec9_quote_img"/>

                                    <p className="sec9_test_info">
                                    Great experience and all friends were really overwhelmed..😍 
                                    Staff was cooperative, pleasant area to have clicks before are 
                                    onboard.Everyone had a Wow time and would cherish the moment 🥰
                                    </p>

                                    <p className="sec9_test_name">  
                                       vishakha n
                                    </p>
                                </div>

                                    <Image src={swiper_bg_img} alt="Fun Bachelorette Party Experiences" className="sec9_swiper_bg_img"/>
                                
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/* End of Slide 3 */}
              
           </Swiper>

           <div className="swiper-pagination" id="sec9_swiper_pagination_id"></div>
        </div>
        <Image src={bg2} alt="Bachelorette Party Rentals in Goa" className="sec9_bg1_img"/>

        <Image src={bg1} alt="Corporate Event Planning Services" className="sec9_bg2_img"/>
    </section>
    </>
  )
}

export default Section9
