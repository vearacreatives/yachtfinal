
'use client'
import React, { useState } from 'react'
import Image from 'next/image'

//bootstrap
import {Container,Row,Col} from 'react-bootstrap'

//Css
import styles from '../../styles/yacht/yacht_detail.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode,Thumbs } from 'swiper/modules';


//Icons
import { MdAnchor } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//Bootstrap
import {FormControl,FormGroup,FormLabel,FormSelect} from 'react-bootstrap'

//Images
import bg_img1 from '../../assets/yatch_detail/bg1.png'
import bg_img2 from '../../assets/yatch_detail/bg2.png'

//Icons
import { LuDoorOpen } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { yacht_detail_data } from './yacht_detail_data'

//Pagination
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import VideoModal from '@/app/common_component/VideoModal'

//Gif
import loading_gif from '../../assets/loading.gif'
import Link from 'next/link'

function Section2({yach_detail}) {

    //Thumbs Swiper
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    //End of Thumbs Swiper
    
    //filter data
    // const yach_detail = yacht_detail_data.filter((val)=> val.param === param_val.yachtid)
    //End of filtering data

    //Video
    const [video_modal,setVideo_modal] = useState(false);
    const [video_src,setVideo_src] = useState('')

    const video_fun = (val) =>
      {
        setVideo_modal(true);
        setVideo_src(val)
      }
    //End of Video

    //Form
    const [form_data,setForm_data] = useState({
      name: '',
      mobile: '',
      email: '',
      date: '',
      no_of_hour: '',
      no_of_guest: '',
      event: '',
      special_req: ''
    })

    const [errors,setErrors] = useState([])
    //End of Form

    //On Handle
    const onhandle = (e) =>
    {
      const new_data = {...form_data}
      new_data[e.target.name] = e.target.value;

      //Regular expression
      const name_reg = /^[A-Za-z\s]*$/
      const mob_reg = /^[0-9]*$/
      //End of Regular expression

      if(e.target.name === 'name' && !name_reg.test(e.target.value))
      {
        return;
      }
      else if((e.target.name === 'mobile' || e.target.name === 'no_of_guest' || e.target.name === 'no_of_hour') 
              && (!mob_reg.test(e.target.value)))
      {
        return;
      }
      else
      {
        setForm_data(new_data)
      }

      //Checking for errors
      if(!!errors[e.target.name])
      {
       setErrors({
        ...errors,
        [e.target.name]:null
       })
      }
    }
    //End of On Handle

    //Form Submit
    const [mail_sent_status,setMail_sent_status] = useState('');
    const [loading,setLoading] = useState(false);

    const  submit_form = async (e) =>
    {
      e.preventDefault();
      
      setLoading(true);
      
      const req_data = {
      name: form_data.name,
      mobile: form_data.mobile,
      email: form_data.email,
      date: form_data.date,
      no_of_hour: form_data.no_of_hour,
      no_of_guest: form_data.no_of_guest,
      event: form_data.event,
      special_req: form_data.special_req
      }
      const formError = validate()

      if(Object.keys(formError).length > 0)
      {
        setErrors(formError);
        setLoading(false);
      }
      else
      {
        const response = await fetch('/api/YachtSendEmail',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req_data)
        })

        const data = await response.json();
        setMail_sent_status(data.status);
        
        setLoading(false)

      }
    }
    //End of Form Submit

    // Validate 
    const validate = () =>
    {
      const {name,
      mobile,
      email,
      date,
      no_of_hour,
      no_of_guest,
      event,
      special_req} = form_data

      const new_error = {}

      //Reg for mail
      const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

      const email_check = email.match(emailFormat);
      //End of Reg for mail

      if(name === '') {new_error.name = 'Please enter name'}

      if(mobile === '') {new_error.mobile = 'Please enter 10 digit mobile number'}

      if(email === '') {new_error.email = 'Please enter email'}

      if(email !== '') 
      {
        if(email_check === null)
        {
          new_error.email = 'Please enter valid email '
        }
      }

      if(date === '') {new_error.date = 'Please select date'}

      if(no_of_hour === '') {new_error.no_of_hour = 'Please enter number of hours'}

      if(no_of_guest === '') {new_error.no_of_guest = 'Please enter number of guests'}

      if(event === '') {new_error.event = 'Please select event'}

      if(special_req === '') {new_error.special_req = 'Please enter special requirement'}

      return new_error
    }
    // End of Validate


  return (
    <>
      <section className={styles.section2}>
        <Container>
          {
            yach_detail.map((detail_val,index)=>{

              return<div key={index}>
              <h1 className={styles.sec2_subtitle}>
              {detail_val.name}
              </h1>
              <Row>
              <Col lg={8}>

                {/* Section 1 */}
                <Swiper
                  spaceBetween={10}
                  grabCursor= {true}
                  loop= {true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode,Thumbs]}
                  className={styles.sec2_swiper_main}
                >
                  {
            detail_val.img.map((val_img,index)=>{
              return<SwiperSlide key={index}>
           
                   <Image src={val_img.img_name} alt={val_img.alt} className={styles.swiper_main_img} />
                </SwiperSlide>
              })
             }
                </Swiper>
      
                <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        grabCursor= {true}
        loop= {true}
        watchSlidesProgress={true}
        modules={[FreeMode,Thumbs]}
        className={styles.sec2_swiper_thumbs}
      >
        {
            detail_val.thumb_img.map((val_img,index)=>{
              return<SwiperSlide key={index}>
          <Image src={val_img.img_name} alt={val_img.alt} className={styles.swiper_thumbs_img} />
        </SwiperSlide>
        })
      }
                </Swiper>
                {/* End of Section 1 */}

                {/* Section 2 */}

                <p className={`${styles.sec2_info} mt-4`}>
                {detail_val.info1}
                </p>
                {/* End of Section 2 */}

                {/* Section 3 */}
                <div className={styles.sec3_main_div}>
                  <Row>
                    <Col lg={6} md={6}>
                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           {detail_val.category === 'boat' ? 'Boat' : 'Yacht'} Length:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.yacht_measure}
                           </p>
                        </div>

                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           No. of Cabins:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.no_cabin}
                           </p>
                        </div>

                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           No. of Crew Members:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                            {detail_val.no_crew_members}
                           </p>
                        </div>


                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           Refrigerator:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.refrigerator}
                           </p>
                        </div>

                    </Col>

                    <Col lg={6} md={6}>
                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           Max Guests:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.max_guest}
                           </p>
                        </div>

                        <div className={styles.yacht_info_main_div}
                             style={{display: detail_val.min_no_hours !== '' ? 'flex' : 'none'}}>
                           <p className={styles.yacht_info_name}>
                           Min no. of Hours:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.min_no_hours}
                           </p>
                        </div>

                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           Cruising Speed:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.cruising_speed}
                           </p>
                        </div>

                        <div className={styles.yacht_info_main_div}>
                           <p className={styles.yacht_info_name}>
                           Toilet:
                           </p>
                           
                           <p className={styles.yacht_info_val}>
                           {detail_val.toilet}
                           </p>
                        </div>


                    </Col>
                  </Row>
                </div>
                {/* End of Section 3 */}


                {/* Section 5 */}
                {
                  detail_val.requirements.length !== 0 && 
                  <>
                  <p className={styles.sec5_subtitle}>
                  Inclusions for this Booking
                  </p>
  
                  <ul className={styles.sec5_ul}>
                    {
                      detail_val.requirements.map((req_val,index)=>{
                        return<li key={index}>
                                <MdAnchor className={styles.sec5_li_icon}/>
                                {req_val.req_name}
                              </li>
                      })
                    }
                  </ul>
                  </>
                  
                }
                
                {/* End of Section 5 */}
                 
                 {/* Video Gallery */}
                 <Swiper pagination={true} 
                         modules={[Pagination]}
                         slidesPerView={3}
                         spaceBetween={30}
                         breakpoints={{
                          //Mobile
                           320:{
                            slidesPerView: 1,
                            spaceBetween: 30
                           },
                           //Tablet
                           500:{
                            slidesPerView: 2,
                            spaceBetween: 30
                           },
                           //Mini Screen
                           990:{
                            slidesPerView: 3,
                            spaceBetween: 30
                           },
                         }} 
                         className={styles.video_swiper}>
                          {
                            detail_val.video.map((video_img,index)=>{
                              return <SwiperSlide key={index}>
                                     <Image src={video_img.cover} 
                                            alt={video_img.alt}
                                            className={styles.video_image}
                                            onClick={()=> video_fun(video_img.videos)}/>
                                    </SwiperSlide>
                            })
                          }
                  
                 </Swiper>
                 {/* End of Video Gallery */}
                </Col>

                <Col lg={4}>
                  <div className={styles.book_compare_main_div} key={index}>
                     {/* Whatsapp */}
                     <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
                              target='_blank'  
                              className={styles.book_whatsapp_btn}>
                            <FaWhatsapp className={styles.book_whatsapp_icon}/> Chat with us
                        </Link>
                        {/* End of WHatsapp */}

                      {/* Book Form */}
                      <div className={styles.book_form_main_div}>
                      <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          Full Name
                          </FormLabel>
      
                          <FormControl type='text'
                                       name='name'
                                       placeholder='Enter Name'
                                       className={styles.book_form_input}
                                       value={form_data.name}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.name}/>
                          <FormControl.Feedback type='invalid'>
                            {errors.name}
                          </FormControl.Feedback>
                         </FormGroup>
      
                         <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          Mobile Number
                          </FormLabel>
      
                          <FormControl type='text'
                                       name='mobile'
                                       placeholder='Enter Mobile Number'
                                       maxLength={10}
                                       className={styles.book_form_input}
                                       value={form_data.mobile}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.mobile}/>
                          <FormControl.Feedback type='invalid'>
                            {errors.mobile}
                          </FormControl.Feedback>
                         </FormGroup>
      
                         <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          Email
                          </FormLabel>
      
                          <FormControl type='email'
                                       name='email'
                                       placeholder='Enter Email'
                                       className={styles.book_form_input}
                                       value={form_data.email}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.email}/>
                          <FormControl.Feedback type='invalid'>
                            {errors.email}
                          </FormControl.Feedback>
                         </FormGroup>
                         
                         <Row>
                          <Col lg={6} md={6}>
                          <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          Cruiser Date
                          </FormLabel>
      
                          <FormControl type='date'
                                       name='date'
                                       className={styles.book_form_input}
                                       value={form_data.date}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.date}/>
                          <FormControl.Feedback type='invalid'>
                            {errors.date}
                          </FormControl.Feedback>
                         </FormGroup>
                          </Col>
      
                          <Col lg={6} md={6}> 
                          <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          No. of Hours
                          </FormLabel>
                           
                          <FormGroup>
                                <FormControl type="text" 
                                       className={styles.book_form_input}
                                       placeholder="No. of Hours"
                                       name='no_of_hour'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.no_of_hour}
                                       isInvalid={!!errors.no_of_hour}/>
                                       <FormControl.Feedback type='invalid'>
                                           {errors.no_of_hour}
                                       </FormControl.Feedback>
                            </FormGroup>
                         </FormGroup>
                          </Col>
                         </Row>
                         
                         
                         <Row>
                          <Col lg={6} md={6}>
                          <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                          No. of Guests
                          </FormLabel>
                          <FormGroup>
                                <FormControl type="text" 
                                       className={styles.book_form_input}
                                       placeholder="No. of Guests"
                                       name='no_of_guest'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.no_of_guest}
                                       isInvalid={!!errors.no_of_guest}/>
                                       <FormControl.Feedback type='invalid'>
                                           {errors.no_of_guest}
                                       </FormControl.Feedback>
                            </FormGroup>
                          
                         </FormGroup>
                          </Col>
      
                          <Col lg={6} md={6}>
                         <FormGroup>
                          <FormLabel className={styles.book_form_label}>
                            Event
                          </FormLabel>
      
                          <FormSelect name='event'
                                       className={styles.book_form_input}
                                       value={form_data.event}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.event}>
                                  <option value='' disabled selected>
                                    Select
                                  </option>
                                  <option value='Birthday Celebration'>
                                  Birthday Celebration
                                  </option>

                                  <option value='Bachelorette Party'>
                                  Bachelorette Party
                                  </option>

                                  <option value='Propose on Yacht'>
                                  Propose on Yacht
                                  </option>

                                  <option value='Pre-wedding Shoot'>
                                  Pre-wedding Shoot
                                  </option>

                                  <option value='Romantic Sunset'>
                                  Romantic Sunset
                                  </option>

                                  <option value='Corporate Events'>
                                  Corporate Events
                                  </option>

                          </FormSelect>
                          <FormControl.Feedback type='invalid'>
                            {errors.event}
                          </FormControl.Feedback>
                         </FormGroup>
                          </Col>
                         </Row>
      
                         <FormGroup>
                         <FormLabel className={styles.book_form_label}>
                         Special Requirements
                          </FormLabel>
                          <FormControl as='textarea'
                                       name='special_req'
                                       placeholder='Enter Special Requirements'
                                       rows={3}
                                       className={styles.book_form_input}
                                       value={form_data.special_req}
                                       onChange={(e)=>onhandle(e)}
                                       isInvalid={!!errors.special_req}/>
                          <FormControl.Feedback type='invalid'>
                            {errors.special_req}
                          </FormControl.Feedback>
                         </FormGroup>
                          
                          <p className={styles.sec2_message_sending}
                             style={{color: mail_sent_status === 200 ? 'green' : 'red',
                                     display: mail_sent_status !== "" ? 'block' : 'none'
                                    }}>
                            {mail_sent_status === 200 ? 'Email sent successfully!!' : 'Email sending failed'}
                          </p>
      
                         <button className={styles.btn_book_now} 
                                 onClick={(e) => submit_form(e)}
                                 style={{pointerEvents: loading || mail_sent_status === 200  ? 'none' : 'initial'}}
                                 disabled={mail_sent_status === 200 ? true : false}>
                                   {loading ? <Image src={loading_gif} alt='loading gif' className={styles.loading_gif}/>
                                       : 'Book Now'
                              }
                         </button>
                      </div>
                      {/* End of Book Form */}
                      <Image src={bg_img2} alt='image' className={styles.bg_img2}/>
                      </div>
                   
                  
                </Col>
            </Row>
            </div>
            
            })

          }
            

        </Container>

        <Image src={bg_img1} alt='image' className={styles.bg_img1}/>
      </section>

      {/* Video Modal */}
      <VideoModal show={video_modal}
                  onHide={()=> setVideo_modal(false)}
                  video_link={video_src}
                  />
      {/* End of Video Modal */}
    
    </>
  )
}

export default Section2
