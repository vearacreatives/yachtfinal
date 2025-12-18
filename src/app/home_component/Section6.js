
import Image from 'next/image'

//Images
// import yatch_img1 from "../assets/home/section6/1.jpg"
// import yatch_img2 from "../assets/home/section6/2.jpeg"
// import yatch_img3 from "../assets/home/section6/3.jpeg"

import bg1 from "../assets/home/section6/bg1.png"
import bg2 from "../assets/home/section6/bg2.png"
import bg3 from "../assets/home/section6/bg3.png"

//Icons
//import { FaSailboat } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa";
//import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link'
import { Section6_data } from './Section6_data';

function Section6() {
  return (
    <>
      <section className="section6">
      <div className="container">
        <div className="sec6_content_main_div">
            <div className="sec6_title_main_div">
               <p className="sec6_subtitle">
               Our yachts & Boats
               </p>

               <h2 className="sec6_title">
               Explore all types of yachts & boats in goa
               </h2>
            </div>

            <div className="row mt-3">
                {
                    Section6_data.map((val,index)=>{
                        return <div className="col-lg-4 col-md-4 sec6_card_col" key={index}>
                        <div className="sec6_card_div">
                            <Link href={val.link}>
                           <Image src={val.img} alt={val.alt} className="sec6_card_img"/>
                           </Link>
                           
                           <Link href={val.link} className="sec6_cruise_name">
                           {val.name}
                           </Link>
                        <p className="sec6_cruise_desc">
                            {val.desc}
                        </p>
    
                        <div className="sec6_prop_div">
                           <val.icon/>
    
                            <p className="sec6_prop_info">
                            {val.capacity}
                            </p>
                        </div>
    
                        <div className="sec6_prop_div">
                            <FaAnchor/>
    
                            <p className="sec6_prop_info">
                            {val.category}
                            </p>
                        </div>
                        </div>
                    </div>
                    })
                }
                
             </div>

             <div className='sec6_btn_div'>
                <Link href='/yacht-sail' className='btn_sec6_explore'>
                    Explore all yachts & boats
                </Link>
             </div>

             <Image src={bg1} alt="Goa Bachelorette Party Ideas" className="sec6_bg_img_explore"/>
        </div>
      </div>

      <Image src={bg2} alt="Private Yacht Bachelorette Parties" className="sec6_arrow_img"/>

      <Image src={bg3} alt="Bachelorette Party Activities in Goa" className="sec6_wheel_img"/>
    </section>
    </>
  )
}

export default Section6
