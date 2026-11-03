import Image from 'next/image'

//Images
import boat_img from '../assets/home/section3/boat_img.png'
import img1 from "../assets/home/section3/img1.png"
import boat_inside from "../assets/home/section3/boat_inside.png"
import img3 from "../assets/home/section3/img3.png"
import img2 from "../assets/home/section3/img2.png"

function Section3() {
  return (
    <>
      <section>
        <div className="container">
            <div className="sec3_main_div">
                <div className="sec3_img_div">
                    <Image src={boat_img} alt="Luxury yachts in goa" className="boat_img"/>
                    <Image src={img1} alt="Luxury Bachelorette Party Venues" className="boat_arrow_img"/>
                </div>
                
                <div className="sec3_content_main_div">
                <div className="sec3_content_div">
                    <div>
                    <p className="sec3_title">
                    Luxury Yachts
                    </p>

                    <h2 className="sec3_main_title">
                    Unforgettable Yacht Experiences in Goa
                    </h2>

                    <p className="sec3_info">
                    Yacht club Goa was started in the year 2002. It was commenced to help everyone 
                    experience the luxurious yacht life. To allow them to feel the closeness to 
                    the river where the sky meets it at the horizon and the witness the various 
                    shades of the Goan sunsets.We are very particular about the quality of our 
                    service and the ambiance of our yachts. We have now progressed on to also 
                    include jet-ski rides. Our costumers safety is our utmost concern.
                    </p>

                    <div className="sec3_year_div">
                        <Image src={boat_inside} alt="Yacht interior" className="boat_inner_img"/>
                         
                        <div>
                            <p className="sec3_year_title">
                            Goa’s First Luxury Yacht Provider
                            </p>

                            <p className="sec3_year_val">
                            2002
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <Image src={img3} alt="Goa Bachelorette Party Ideas" className="boat_wheel_img"/>
                <Image src={img2} alt="Private Yacht Bachelorette Parties" className="arrow_img_bg"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section3
