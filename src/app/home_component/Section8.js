import Image from 'next/image'

//Images
import img1 from "../assets/home/section8/birthday/birthday.jpeg"
import img2 from "../assets/home/section8/bachelorette/bachelorette.jpeg"
import img3 from "../assets/home/section8/propose_yacht/propose-yacht.jpeg"
import img4 from "../assets/home/section8/pre_wedding/pre-wedding.jpeg"
import img5 from "../assets/home/section8/romantic_sunset/romantic-sunset.jpeg"
import img6 from "../assets/home/section8/corporate_events/corporate-events.jpeg"
import { service_data } from '../yacht_services_goa_component/service_data'
import Link from 'next/link'


function Section8() {
  return (
    <>
      <section> 
      <div>
        <div className="container">
        <div className="sec8_title_main_div">
           <p className="sec8_subtitle">
            CHARTER PACKAGE
           </p>

           <h2 className="sec8_title">
           Yacht Experiences for Every Occasion
           </h2>
        </div>

        <div className="row m-0">
            {
                service_data.map((val,index)=>{
                    return  <div className="col-lg-4 col-md-6 sec8_img_overlay_col" key={index}>
                    <div className="sec8_img_overlay_main_div">
                    <Link href={`/yacht-services-goa/${val.param}`}>
                        <Image src={val.img} alt={val.alt} className="sec8_img"/>
                    </Link>
                        <div className="sec8_img_overlay">
                        <Link href={`/yacht-services-goa/${val.param}`}>
                            <p className='btn_sec8_choose_package'>
                            {val.name}
                            </p>
                        </Link>
                        </div>
                    </div>
                </div>
                })
            }
            
            
        </div>

    </div>
    </div>

   
    </section>
    </>
  )
}

export default Section8
