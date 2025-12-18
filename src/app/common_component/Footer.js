'use client'

import Image from 'next/image'
import Link from 'next/link'

//Css
import '../styles/common_component/footer.css'

import {FormGroup,FormControl} from 'react-bootstrap';

//Images
import underline_img from "../assets/home/footer/underline_img.png";
import bg_img1 from "../assets/home/footer/bg_img1.png";
import bg_img2 from "../assets/home/footer/bg_img2.png";
import bg_img3 from "../assets/home/footer/bg_img3.png";
import bg_img4 from "../assets/home/footer/bg_img4.png";

//Icons
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { ImPinterest2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import Script from 'next/script';

//Rating
import { Rating } from 'react-simple-star-rating'

function Footer() {
  return (
    <>
    <Script>
      {
         `
         (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "n2y7h1qqlh");
         `
      }
    </Script>
       <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
             target='_blank' 
             className='whats_app_link'>
         <FaWhatsapp/>
       </Link>
       <section className="footer_section">
        <div className="container">
           <div className="footer_main_div">
            <div className="row m-0">
                
                <div className="col-lg-3 footer_col">
                   <p className="footer_title">
                   About Yacht Club Goa
                   </p>
                   <Image src={underline_img} alt="Private Yacht Birthday Rentals in Goa" className="footer_underline"/>

                   <p className="footer_about_info">
                   Yacht Club Goa was the very first to bring luxury yacht rentals to Goa, and we're dedicated 
                   to providing top-notch service. Explore Goa's beautiful coastline in style and comfort 
                   with us!
                   </p>
                    
                   <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
                              target='_blank'>
                   <button className="btn_footer_book_now">
                    Book Now
                   </button>
                   </Link>
                </div>
                
                <div className="col-lg-3 footer_col">
                    <p className="footer_title">
                     Contact Us
                    </p>
                    <Image src={underline_img} alt="Goa Birthday Party Packages" className="footer_underline"/>
 
                    <a href='tel:+91 9325087968' className="footer_contact_info"> 
                     <FaPhone className='footer_icon'/> +91 9325087968
                    </a>

                    <a href= "mailto: info@yachtclubgoa.in" className="footer_contact_info">
                    <TbMailFilled className='footer_icon'/> info@yachtclubgoa.in
                    </a>

                    <p className="footer_contact_info">
                    <FaLocationDot className='footer_addr_icon'/> Alto- Betim, Britona - Bardez Bridge Approach, Porvorim, Penha de Franc, Goa 403521
                    </p>

                    {/* Rating */}
                    <div className='footer_rating_div'>
                    <Rating initialValue={4.9} allowFraction size={20} 
                            fillColor='#f57c33'
                            readonly={true}/>
                    <p className="footer_contact_info">4.9/5.0</p>
                    </div>
                   
                 </div>
                
                 <div className="col-lg-3 footer_col">
                    <p className="footer_title">
                     Quick Links
                    </p>
                    <Image src={underline_img} alt="Pre-Wedding Photoshoots in Goa" className="footer_underline"/>
 
                     <div className='footer_quick_link_div'>
                     <Link href="/about-us" className="footer_quick_link">
                        About Us
                     </Link>

                     <Link href="/yacht-sail" className="footer_quick_link">
                        Yachts & Boat
                     </Link>

                     <Link href="/yacht-services-goa" className="footer_quick_link">
                        Services
                     </Link>

                     <Link href="/gallery" className="footer_quick_link">
                        Gallery
                     </Link>
                     
                     <Link href="/our-blog" className="footer_quick_link">
                        Blog
                     </Link>

                     <Link href="/contact-us" className="footer_quick_link">
                        Contact Us
                     </Link>
                     </div>

                 </div>
                 
                  <div className="col-lg-3 footer_col">
                    <p className="footer_title">
                    Book Your Yacht Charter
                    </p>
                    <Image src={underline_img} alt="Romantic Pre-Wedding Locations in Goa" className="footer_underline"/>
 
                    <p className="footer_about_info">
                    Create Memories that Last. Sail With Us.
                    </p>
                     
                    <div className="social_media_icons_main_div">
                    <div className="social_media_icon_div">
                        <Link href='https://www.instagram.com/yachtclubgoa/?igshid=YzA2ZDJiZGQ%3D' 
                              className='social_media_link'
                              target='_blank'>
                        <FaInstagram />
                        </Link>
                    </div>
                    <div className="social_media_icon_div">
                        <Link href='https://www.facebook.com/YachtClubGoa' 
                              className='social_media_link'
                              target='_blank'>
                        <FaFacebookF />
                        </Link>
                    </div>

                    <div className="social_media_icon_div">
                        <Link href='https://www.youtube.com/@yachtclub9419' 
                              className='social_media_link'
                              target='_blank'>
                        <RiYoutubeLine />
                        </Link>
                    </div>

                    <div className="social_media_icon_div">
                        <Link href='https://www.pinterest.com/yachtclubgoa/' target='_blank' className='social_media_link'>
                        <ImPinterest2 />
                        </Link>
                    </div>
                </div>
                 </div>
                 
            </div>

            <div className="copyright_main_div">
                <p className="copyright_content">
                Copyright @Yacht Club Goa.  
                </p>
                
                <div>
                <p className="copyright_content">
                Made with <IoMdHeart className='heart_icon'/> by <Link href="https://29tech.in/" target="_blank" className="dev_comp_name">29tech</Link>  
                </p>
                </div>
            </div>
           </div>
        </div>

        <Image src={bg_img1} alt="Destination Pre-Wedding Shoot Goa" className="footer_bg_img1"/>

        <Image src={bg_img2} alt="Goa Beach Pre-Wedding Photography" className="footer_bg_img2"/>

        <Image src={bg_img3} alt="Goa Pre-Wedding Shoot Packages" className="footer_bg_img3"/>

        <Image src={bg_img4} alt="Luxury Bachelorette Party Venues" className="footer_bg_img4"/>
       </section>
    </>
  )
}

export default Footer
