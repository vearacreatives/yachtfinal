import Image from 'next/image'

//Image
import img1 from '../assets/home/section2/1.png'
import img2 from '../assets/home/section2/2.png'
import img3 from '../assets/home/section2/3.png'
import img4 from '../assets/home/section2/4.png'

function Section2() {
  return (
    <>
      
    <section className="section2">
        <div className="container">
            <div className="sec2_info_main_div">
            <h2 className='sec2_title'>
            Luxury Yachts for Rent in Goa
            </h2>
            <div className="row mt-4">
                <div className="col-md-3">
                   <div className="sec2_content_div">
                    <Image src={img1} alt="Luxury Bachelorette Party Venues" className="cruise_img"/>

                    <div>
                        <p className="sec2_content_title">
                        Explore
                        </p>

                        <p className="sec2_content_info">
                        Set sail on your dream Goan adventure! Browse our fleet of yachts and boats to find the perfect match for your needs.
                        </p>
                    </div>
                   </div>    
                </div>

                <div className="col-md-3">
                    <div className="sec2_content_div">
                    <Image src={img2} alt="Goa Bachelorette Party Ideas" className="cruise_img"/>
    
                        <div>
                            <p className="sec2_content_title">
                            Book It
                            </p>
    
                            <p className="sec2_content_info">
                            Once you've chosen your yacht club, secure your spot on a yacht. Reservations can usually be made on the phone.
                            </p>
                        </div>
                       </div>  
                </div>

                <div className="col-md-3">
                    <div className="sec2_content_div">
                    <Image src={img3} alt="Private Yacht Bachelorette Parties" className="cruise_img"/>
    
                        <div>
                            <p className="sec2_content_title">
                            Enjoy
                            </p>
    
                            <p className="sec2_content_info">
                            Relax and have fun on the beautiful waters of Goa! Soak up the sun, enjoy water activities, and create unforgettable memories.
                            </p>
                        </div>
                       </div> 
                </div>

                <div className="col-md-3">
                    <div className="sec2_content_div">
                    <Image src={img4} alt="Bachelorette Party Activities in Goa" className="cruise_img"/>
    
                        <div>
                            <p className="sec2_content_title">
                            Special Events
                            </p>
    
                            <p className="sec2_content_info">
                            Make a splash on your next special occasion with our unforgettable yacht celebrations!
                            </p>
                        </div>
                       </div> 
                </div>
            </div>
             
            </div>
        </div>
    </section>
   
    </>
  )
}

export default Section2
