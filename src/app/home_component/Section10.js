'use client'

import {FormGroup,FormControl} from 'react-bootstrap';

import Image from 'next/image'

//Images
import img1 from "../assets/home/section10/1.jpg"
import bg_img from "../assets/home/section10/bg_img.png"
import { useState } from 'react';

//Gif
import loading_gif from '../assets/loading.gif'

function Section10() {

    //Form
    const [form_data,setForm_data] = useState({
        name: '',
        mobile: '',
        mail: '',
        date: '',
        occasion: '',
        no_guests: '',
        no_of_hrs: ''
    })

    const [errors,setErrors] = useState([])
    //End of Form

    //On handle
    const onhandle = (e) =>
    {
        const new_data = {...form_data}
        new_data[e.target.name] = e.target.value;

        //Regular expression for text and number
        const text = /^[A-Za-z\s]*$/;
        const num = /^[0-9]*$/;

        if(e.target.name === 'name' && !text.test(e.target.value))
        {
            return;
        }
        else if((e.target.name === 'mobile' || e.target.name === 'no_guests' || e.target.name === 'no_of_hrs') 
                  && (!num.test(e.target.value)))
        {
            return;
        }
        else
        {
            setForm_data(new_data)
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

    //Submit
    const [mail_sent_status,setMail_sent_status] = useState('');
    const [loading,setLoading] = useState(false);

    const btn_connect_fun = async (e) =>
    {
        e.preventDefault();
        setLoading(true);

        const req_data = {
        name: form_data.name,
        mobile: form_data.mobile,
        mail: form_data.mail,
        date: form_data.date,
        occasion: form_data.occasion,
        no_guests: form_data.no_guests,
        no_of_hrs: form_data.no_of_hrs
        }

        const form_error = validate();
        if(Object.keys(form_error).length > 0)
        {
            setErrors(form_error);
            setLoading(false);
        }
        else
        {
            const response = await fetch('/api/GetInTouchEmail',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(req_data)
            })

            const data = await response.json();
            setMail_sent_status(data.status);
            setLoading(false);
        }
    }
    //End of Submit

    //Validate
    const validate = () =>
    {
        const {
            name,
            mobile,
            mail,
            date,
            occasion,
            no_guests,
            no_of_hrs
        } = form_data;
        
        const new_errors = {}
        
        const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        const email_check = mail.match(emailFormat);

        if(name === ''){new_errors.name = 'Please enter name'}

        if(mobile === ''){new_errors.mobile = 'Please enter phone'}
        
        if(mail === ''){new_errors.mail = 'Please enter mail'}

        if (mail !== '') {
            if (email_check === null) {
                new_errors.mail = "Please enter valid mail"
            }
          }

        if(date === ''){new_errors.date = 'Please select date'}

        if(occasion === ''){new_errors.occasion = 'Please enter occasion'}

        if(no_guests === ''){new_errors.no_guests = 'Please enter no. of guests'}

        if(no_of_hrs === ''){new_errors.no_of_hrs = 'Please enter no. of hours'}

        return new_errors;
    }
    //End of Validate
  return (
    <>
       <section className="section10">
        <div className="row m-0">
            <div className="col-lg-6 sec10_col">
                <div className="sec10_img_overlay_main_div">
                    <Image src={img1} alt="Hire a Private Luxury Yacht in Goa" className="sec10_img"/>

                    <div className="sec10_overlay_div">
                      <div className="sec10_contact_info_div">
                        <p className="sec10_contact_title">
                            Call us for any inquiry
                        </p>

                        <p className="sec10_contact_num">
                        +91 9325087968
                        </p>

                        <Image src={bg_img} alt="image" className="sec10_bg_img"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 sec10_col">
                <div className="sec10_form_main_div">
                    <div className="sec10_dorm_div">
                        <p className="sec10_form_subtitle">
                            Contact Us
                        </p>

                        <h2 className="sec10_form_title">
                            Get in Touch
                        </h2>

                        
                        <div className="row m-0">
                            <div className="col-lg-6">
                            <FormGroup>
                                <FormControl type="text" 
                                       className="sec10_form_input" 
                                       placeholder="Name"
                                       name='name'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.name}
                                       isInvalid={!!errors.name}/>
                            <FormControl.Feedback type='invalid'>
                                {errors.name}
                            </FormControl.Feedback>
                            </FormGroup>
                            </div>

                            <div className="col-lg-6">
                            <FormGroup>
                                <FormControl type="text" 
                                       className="sec10_form_input" 
                                       placeholder="Phone"
                                       maxLength={10}
                                       name='mobile'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.mobile}
                                       isInvalid={!!errors.mobile}/>
                                       <FormControl.Feedback type='invalid'>
                                           {errors.mobile}
                                       </FormControl.Feedback>
                                </FormGroup>
                               
                            </div>
                        </div>
                       
                        <div className="row m-0">
                            <div className="col-lg-6">
                            <FormGroup>
                                <FormControl type="email" 
                                className="sec10_form_input" 
                                placeholder="Your Mail"
                                name='mail'
                                onChange={(e)=>onhandle(e)}
                                value={form_data.mail}
                                isInvalid={!!errors.mail}/>
                                <FormControl.Feedback type='invalid'>
                                    {errors.mail}
                                </FormControl.Feedback>
                                </FormGroup>
                            </div>

                            <div className="col-lg-6">
                                <FormGroup>
                                <FormControl type="date" 
                                className="sec10_form_input" 
                                placeholder="Cruiser Date"
                                name='date'
                                onChange={(e)=>onhandle(e)}
                                value={form_data.date}
                                isInvalid={!!errors.date}/>
                                <FormControl.Feedback type='invalid'>
                                    {errors.date}
                                </FormControl.Feedback>
                                </FormGroup>
                            </div>
                        </div>
                       
                        <div className="row m-0">
                            <div className="col-12">
                                <FormGroup>
                                <FormControl as="textarea"
                                              rows={3}
                                              className="sec10_form_input" 
                                              placeholder="Occasion"
                                              name='occasion'
                                              onChange={(e)=>onhandle(e)}
                                              value={form_data.occasion}
                                              isInvalid={!!errors.occasion}/>
                                              <FormControl.Feedback type='invalid'>
                                                  {errors.occasion}
                                              </FormControl.Feedback>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-lg-6">
                            <FormGroup>
                                <FormControl type="text" 
                                       className="sec10_form_input" 
                                       placeholder="No. of Guests"
                                       name='no_guests'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.no_guests}
                                       isInvalid={!!errors.no_guests}/>
                                       <FormControl.Feedback type='invalid'>
                                           {errors.no_guests}
                                       </FormControl.Feedback>
                            </FormGroup>
                            </div>

                            <div className="col-lg-6">
                            <FormGroup>
                                <FormControl type="text" 
                                       className="sec10_form_input" 
                                       placeholder="No. of Hours"
                                       name='no_of_hrs'
                                       onChange={(e)=>onhandle(e)}
                                       value={form_data.no_of_hrs}
                                       isInvalid={!!errors.no_of_hrs}/>
                                       <FormControl.Feedback type='invalid'>
                                           {errors.no_of_hrs}
                                       </FormControl.Feedback>
                                </FormGroup>
                               
                            </div>
                        </div>
                        
                       {/* Sucess message */}
                  <p className='sec2_message_sending'
                     style={{color: mail_sent_status === 200 ? 'green' : 'red',
                              display: mail_sent_status !== '' ? 'block' : 'none'
                            }}>
                    {mail_sent_status === 200 ? 'Email sent successfully!!' : 'Email sending failed'}
                  </p>
                  {/* End of Success message */}
                        <button className="btn_sec10_msg" 
                                onClick={(e)=>btn_connect_fun(e)}
                                style={{pointerEvents: loading || mail_sent_status === 200  ? 'none' : 'initial'}}
                                disabled={mail_sent_status === 200 ? true : false}   
                                >
                            {loading ? <Image src={loading_gif} alt='loading gif' className='loading_gif'/>
                                 : 'Connect with Us'
                        }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section10
