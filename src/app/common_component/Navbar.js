'use client'
import React, { useEffect } from 'react'

//Css
import '../styles/common_component/Navbar.css'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

//Icons
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import Image from 'next/image'

//Image
import logo from '../assets/logo.png';
import { usePathname } from 'next/navigation'

//Icons
import { IoCall } from "react-icons/io5";

import { RiYoutubeLine } from "react-icons/ri";
import { ImPinterest2 } from "react-icons/im";

function Navbar() {
  // Open Mobile header
function toogle_mob_view_fun()
{
    document.getElementById('nav_book_btn_main_div_id').classList.toggle('responsive_nav');
    document.getElementById('body_id').style.overflow = 'hidden';

    document.getElementById('open_menu_id').style.display = 'none';
    document.getElementById('open_close_id').style.display = 'block';
}

//End of Open Mobile Header

//Close Mobile Header
function close_mob_view_fun()
{
  document.getElementById('nav_book_btn_main_div_id').classList.toggle('responsive_nav');
  document.getElementById('body_id').style.overflow = 'auto';

  document.getElementById('open_menu_id').style.display = 'block';
  document.getElementById('open_close_id').style.display = 'none';
}
//End of Close Mobile Header

// Scroll
useEffect(()=>{
  window.addEventListener('scroll',handleScroll);

  return () => {
      window.removeEventListener('scroll',handleScroll);
  }
},[])

const handleScroll = () => 
{

  if (window.scrollY > 0) {
    document.getElementById('header_main_div_id').style.boxShadow = '0 2px 4px rgb(0 0 0 / 69%)';
    document.getElementById('header_main_div_id').classList.add('header_main_link_div');
} else {
  document.getElementById('header_main_div_id').style.boxShadow = 'none';
  document.getElementById('header_main_div_id').classList.remove('header_main_link_div');
}
}
//End of Scroll

//Get the current path in the url
  const active_path = usePathname();

  // Define regular expressions for dynamic routes
  const dynamicYachtSellPathPattern = /^\/yacht-sail\/[^/]+$/;
  const isYachtSellDynamic = dynamicYachtSellPathPattern.test(active_path);

  //Blog url
  const blog_url_pattern = /^\/our-blog\/[^/]+$/;
  const blog_url_dynamic = blog_url_pattern.test(active_path);
  //End of blog url
//End of the get current path in the url


//Toggle Dropdown
const toggle_drp = (val) =>
{
  var drp_content = document.getElementById(val);
  if(drp_content.style.display === 'block')
  {
    document.getElementById(val).style.display = 'none'
  }
  else
  {
    document.getElementById(val).style.display = 'block'
  }
  
}
  return (
    <>
     {/* Header */}
    <section>
        <div>
        <div className="header_info_main_div">
        <div className="container">
            <div className="header_info_div">
                <div className="navbar_info_link_div">

                <Link href="/gallery" className={`${active_path === '/gallery' ? "header_info_link active_link" : 'header_info_link'}`}>
                    Gallery
                </Link>


                <Link href="/our-blog" className={`${active_path === '/our-blog' || (blog_url_dynamic) ? "header_info_link active_link" : 'header_info_link'}`}>
                      Blog
                </Link>

                </div>
                
                <div className='nav_social_media_icon_main_div'>
                    <div className='nav_social_media_icon_div'>
                      <Link href='https://www.instagram.com/yachtclubgoa/?igshid=YzA2ZDJiZGQ%3D' target='_blank'>
                        <FaInstagram className='social_media_icon'/>
                      </Link>
                    </div>

                    <div className='nav_social_media_icon_div'>
                      <Link href='https://www.youtube.com/@yachtclub9419' target='_blank'>
                        <RiYoutubeLine className='social_media_icon'/>
                      </Link>
                    </div>
  
                    <div className='nav_social_media_icon_div'>
                      <Link href='https://www.facebook.com/YachtClubGoa' target='_blank'>
                        <TiSocialFacebook className='social_media_icon'/>
                      </Link>
                    </div>

                    <div className='nav_social_media_icon_div'>
                      <Link href='https://www.pinterest.com/yachtclubgoa/' target='_blank'>
                        <ImPinterest2 className='social_media_icon'/>
                      </Link>
                    </div>

                  </div> 

                <div className="header_mob_mail_info_div">
                    <p className="header_mob_email_info">
                       <MdLocationOn className="mob_email_icon"/> Betim Porvorim, Penha de França, Goa
                        
                    </p>

                    <a href='tel: +91 9325087968' className="header_mob_email_info">
                    <IoCall className="mob_email_icon"/> +91 9325087968
                    </a>
                </div>
            </div>
        </div>
       </div>


       <div id="header_main_div_id">
        <div className="container">
            <div className="nav_main_div">
              <Link href='/'>
               <Image src={logo} alt="logo" className="logo_img"/>
               </Link>

               <div className="nav_book_btn_main_div" id="nav_book_btn_main_div_id">
                <div className="navbar navbar_main_div">
                    <Link href="/" className={active_path === '/' ? "active_link" : ''}
                          onTouchStart={()=>close_mob_view_fun()}>
                      Home
                    </Link>
                    <Link href="/about-us" className={active_path === '/about-us' ? "active_link" : ''}
                          onTouchStart={()=>close_mob_view_fun()}>
                      About Us
                    </Link>

                    <Link href="/yacht-sail" 
                          className={(active_path === '/yacht-sail') || (isYachtSellDynamic) ? "active_link" : ''}
                          onTouchStart={()=>close_mob_view_fun()}>
                      Yacht & Boats
                    </Link>

                    {/* <div className="dropdown" onTouchStart={()=>toggle_drp(1)}>
                       <button className={`${(active_path === '/yacht-sell') || (isYachtSellDynamic) ? "active_link" : ''} dropbtn`}>
                          Yacht & Boats <FaPlus className='plus_icon'/>
                       </button>

                       <div className="dropdown-content" id={1}>
                        <Link href="/yacht-sell" >Yacht Sell</Link>
                       </div>
                       </div>  */}

                       {/* <div className="dropdown" onTouchStart={()=>toggle_drp(2)}>
                       <button className={`${(active_path === '/our-blog') || (blog_url_dynamic) ? "active_link" : ''} dropbtn`}>
                       activities & packages <FaPlus className='plus_icon'/>
                       </button>
                       <div className="dropdown-content" id={2}>
                        <Link href="/our-blog">Our Blog</Link>
                       </div>
                       </div>  */}

                    <Link href="/yacht-services-goa" className={active_path === '/yacht-services-goa' ? "active_link" : ''}
                          onTouchStart={()=>close_mob_view_fun()}>
                      Services
                    </Link>

                    <Link href="/contact-us" className={active_path === '/contact-us' ? "active_link" : ''}
                          onTouchStart={()=>close_mob_view_fun()}>
                      Contact
                      </Link>


                    <div className="book_now_mob">
                        <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' target='_blank'>
                        <button className="btn_book_now">
                            Book Now
                        </button>
                        </Link>
                    </div>
                  </div>
               </div>
               
               <FaBars className='mob_menu_icon' id='open_menu_id' onClick={() => toogle_mob_view_fun()}/>
               <IoClose className='mob_menu_icon' id='open_close_id' onClick={() => close_mob_view_fun()}/>
               
               <div className="nav_mob_book_now_div">
                <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' target='_blank'>
                    <button className="btn_book_now">
                      Book Now
                    </button>
                </Link>
               </div>
            </div>
        </div>
       </div>
    </div>
    </section>
    {/* End of Header */}
    </>
  )
}

export default Navbar
