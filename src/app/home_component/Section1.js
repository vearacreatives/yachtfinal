import Link from 'next/link'
//Font family
import { Allison } from "next/font/google";

const allison = Allison({ weight:['400'], subsets: ["latin"] });

import Image from 'next/image'

//Image
import section1_banner from '../assets/home/section1_banner.jpg';

function Section1() {
  return (
    <>
       <section>
        <div className="sec1_content_main_div">
            <Image src={section1_banner} alt="Hire luxury private yachts in goa" className="sec1_banner"/>
            <div className="sec1_content_overlay">
                <div className="container">
                    <div className="blue_card_div">
                       <div className="orange_card_div"></div>
                       <div className="sec1_info_div">
                        <p className='sec1_content'>
                            <span className={allison.className}>Yachts & Boats</span>
                        </p>

                        <h1 className="sec1_content_title">
                        Hire luxury private yacht in goa
                        </h1>
                        
                        <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
                              target='_blank'>
                        <button className="btn_explore">
                          Book now
                        </button>
                        </Link>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section1
