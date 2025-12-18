'use client'
import React, { useState } from 'react'

import {Container,Row,Col,FormGroup,FormControl} from 'react-bootstrap'

//CSS
import styles from '../styles/contact_us/contact_us.module.css'

//Icons
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

//Gif
import loading_gif from '../assets/loading.gif'
import Image from 'next/image';
import Link from 'next/link';

function Section2() {
  //Form data and Validation
  const [form_data,setForm_data] = useState({
    fname: '',
    email: '',
    subject: '',
    mobile: '',
    message: ''
  })

  const [errors,setErrors] = useState([]);

  //End of Form Data and validation

  //onHandle
  const onhandle = (e) => 
    {
      const newdata = { ...form_data };
      newdata[e.target.name] = e.target.value;

       // Only allow alphabetic characters for fname and lname
       const re = /^[A-Za-z\s]*$/;
       const mob = /^[0-9]*$/;
       if ((e.target.name === "fname") && !re.test(e.target.value)) 
        {
        return;
      }
      else if ((e.target.name === "mobile") && !mob.test(e.target.value)) {
        return;
      }
      else
      {
        setForm_data(newdata);
      }
     

      // Checking for errors
      if (!!errors[e.target.name]) {
        setErrors({
          ...errors,
          [e.target.name]: null
        })
      }
    }
  //End of onHandle

  //OnSubmit
  const [mail_sent_status,setMail_sent_status] = useState('');
  const [loading,setLoading] = useState(false)
  const submit_fun = async (e) =>
    {
      e.preventDefault();
      
      setLoading(true); //adding loader gif
      const req_data = {
        fname: form_data.fname,
        email: form_data.email,
        subject: form_data.subject,
        mobile: form_data.mobile,
        message: form_data.message
      }

      //Checking for errors
      const formerrors = validate();

      if(Object.keys(formerrors).length > 0)
      {
        setErrors(formerrors);
        setLoading(false);  //removing laoder gif
      }
      else
      {
        //Sending the mail
        const response = await fetch('/api/ContactSendEmail',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(req_data)
        })

        const data = await response.json();
        setMail_sent_status(data.status);

        setLoading(false); //removing loader gif
      }
    }
  //End of OnSubmit

  //Validate
  const validate = () =>
  {
    const {fname,email,subject,mobile,message} = form_data;

    const newerrors = {}

    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const email_check = email.match(emailFormat);

    if (fname === '') { newerrors.fname = "Please enter the name" }

    if (email === '') {
      newerrors.email = "Please enter the email"
    }
    if (email !== '') {
      if (email_check === null) {
        newerrors.email = "Please enter valid email"
      }
    }

    if (subject === '') { newerrors.subject = "Please enter the subject" }

    if (mobile === '') 
      {
      newerrors.mobile = "Please enter the mobile number"
    } 
    
    if(message === '')
      {
        newerrors.message = 'Please enter the message'
      }

    return newerrors;
  }
  //End of validate

  //Reset function
  const reset_fun = (e) =>
    {
      e.preventDefault(e);

      setForm_data({
        fname: '',
        email: '',
        subject: '',
        mobile: '',
        message: ''
      })

      setMail_sent_status('')
    }
  //End of reset function

  return (
    <>
      <section className={styles.section2}>
        <Container>
            <Row>
                <Col lg={6} md={6}>
                  <p className={styles.sec2_subtitle}>
                  Send us email
                  </p>

                  <h1 className={styles.sec2_title}>
                  Feel free to write
                  </h1>
                  
                  {/* Name and Email */}
                  <Row>
                    <Col lg={6}>
                       <FormGroup>
                        <FormControl type='text'
                                     placeholder='Enter Name'
                                     className={styles.sec2_form_input}
                                     name='fname'
                                     onChange={(e)=>onhandle(e)}
                                     value={form_data.fname}
                                     isInvalid={!!errors.fname}/>
                        <FormControl.Feedback type='invalid'>
                         {errors.fname}
                        </FormControl.Feedback>
                       </FormGroup>
                    </Col>

                    <Col lg={6}>
                    <FormGroup>
                        <FormControl type='email'
                                     placeholder='Enter Email'
                                     className={styles.sec2_form_input}
                                     name='email'
                                     onChange={(e)=>onhandle(e)}
                                     value={form_data.email}
                                     isInvalid={!!errors.email}/>
                        <FormControl.Feedback type='invalid'>
                         {errors.email}
                        </FormControl.Feedback>
                       </FormGroup>
                    </Col>
                  </Row>
                  {/* End of Name and Email */}

                   {/* Subject and Enter Phone */}
                   <Row>
                    <Col lg={6}>
                       <FormGroup>
                        <FormControl type='text'
                                     placeholder='Enter Subject'
                                     className={styles.sec2_form_input}
                                     name='subject'
                                     onChange={(e)=>onhandle(e)}
                                     value={form_data.subject}
                                     isInvalid={!!errors.subject}/>
                        <FormControl.Feedback type='invalid'>
                         {errors.subject}
                        </FormControl.Feedback>
                       </FormGroup>
                    </Col>

                    <Col lg={6}>
                    <FormGroup>
                        <FormControl type='text'
                                     placeholder='Enter 10 digit mobile number'
                                     className={styles.sec2_form_input}
                                     name='mobile'
                                     onChange={(e)=>onhandle(e)}
                                     value={form_data.mobile}
                                     maxLength={10}
                                     isInvalid={!!errors.mobile}/>
                        <FormControl.Feedback type='invalid'>
                         {errors.mobile}
                        </FormControl.Feedback>
                       </FormGroup>
                    </Col>
                  </Row>
                  {/* End of Name and Email */}

                  {/* Message */}
                  <Row>
                    <Col lg={12}>
                        <FormGroup>
                        <FormControl as='textarea'
                                     rows={5}
                                     placeholder='Message'
                                     className={styles.sec2_form_input_textarea}
                                     name='message'
                                     onChange={(e)=>onhandle(e)}
                                     value={form_data.message}
                                     isInvalid={!!errors.message}/>
                        <FormControl.Feedback type='invalid'>
                         {errors.message}
                        </FormControl.Feedback>
                        </FormGroup>
                    </Col>
                  </Row>
                  {/* End of Message */}
                  
                  {/* Sucess message */}
                  <p className={styles.sec2_message_sending}
                     style={{color: mail_sent_status === 200 ? 'green' : 'red',
                              display: mail_sent_status !== '' ? 'block' : 'none'
                            }}>
                    {mail_sent_status === 200 ? 'Email sent successfully!!' : 'Email sending failed'}
                  </p>
                  {/* End of Success message */}

                  {/* Buttons */}
                  <div className={styles.sec2_form_btn_div}>
                    <button className={styles.btn_sec2_form} 
                            onClick={(e)=>submit_fun(e)}
                            style={{pointerEvents: loading || mail_sent_status === 200  ? 'none' : 'initial'}}
                            disabled={mail_sent_status === 200 ? true : false}>
                        {loading ? <Image src={loading_gif} alt='Goa Bachelorette Party Ideas' className={styles.loading_gif}/>
                                 : 'Send Message'
                        }
                    </button>

                    

                    <button className={styles.btn_sec2_form_reset} onClick={(e) => reset_fun(e)}>
                        Reset
                    </button>
                  </div>
                  {/* End of Buttons */}
                </Col>

                <Col lg={6} md={6} className={styles.sec2_get_touch_col}>
                <p className={styles.sec2_subtitle}>
                  Need any help?
                </p>

                  <h2 className={styles.sec2_title}>
                  Get in touch with us
                  </h2>

                  {/* Whatsapp */}
                  <div className={`${styles.sec2_get_touch_data_div} mt-3`}>
                    <div className={styles.book_whatsapp_btn}>
                       <FaWhatsapp/>
                    </div>

                    <div className={styles.book_whatsapp_div}>
                    <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
                              target='_blank'
                              className={styles.sec2_get_touch_quest}>
                            Chat with us
                    </Link>

                    <Link href='https://api.whatsapp.com/send?phone=919325087968&text=Hello!%20I%20am%20looking%20for%20a%20Yacht.%20Can%20you%20please%20help%20me%3F' 
                              target='_blank'
                              className={styles.sec2_get_touch_ans}>
                            +91 9325087968
                    </Link>
                    </div>
                  </div>
                  {/* End of WHatsapp */}

                  <div className={`${styles.sec2_get_touch_data_div} mt-3`}>
                    <div className={styles.sec2_get_touch_icon_div}>
                       <IoMdCall/>
                    </div>

                    <div>
                        <p className={styles.sec2_get_touch_quest}>
                        Have any question?
                        </p>

                        <p className={styles.sec2_get_touch_ans}>
                        +91 9325087968
                        </p>
                    </div>
                  </div>

                  <div className={styles.sec2_get_touch_data_div}>
                    <div className={styles.sec2_get_touch_icon_div}>
                       <IoMdMail/>
                    </div>

                    <div>
                        <p className={styles.sec2_get_touch_quest}>
                        Write email
                        </p>

                        <p className={styles.sec2_get_touch_ans}>
                        info@yachtclubgoa.in
                        </p>
                    </div>
                  </div>

                  <div className={styles.sec2_get_touch_data_div}>
                    <div className={styles.sec2_get_touch_icon_div}>
                       <MdLocationPin/>
                    </div>

                    <div>
                        <p className={styles.sec2_get_touch_quest}>
                        Visit anytime
                        </p>

                        <p className={styles.sec2_get_touch_ans}>
                        Betim Porvorim, Penha de França, Goa
                        </p>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Section2
