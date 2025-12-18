'use client'
import React from 'react'

//Css
import styles from '../styles/about_us/about_us.module.css'

//Bootstrap
import { Container } from 'react-bootstrap'

//Accordian
import Accordion from 'react-bootstrap/Accordion';

function Section6() {
  return (
    <>
      <section className={styles.section6}>
       <Container>
               <h2 className={styles.sec6_title}>
                  FAQ
               </h2>

               <Accordion defaultActiveKey="0" className={styles.sec6_accordian}>
               <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  What types of yachts do you offer?
                  </Accordion.Header>
                   <Accordion.Body>
                   We offer a variety of yachts to suit different needs and preferences, from luxurious cruisers 
                   perfect for celebrations to smaller yachts ideal for intimate gatherings. Explore our 
                   website or contact us for a detailed breakdown of our yacht options. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  How do I book a yacht?
                  </Accordion.Header>
                   <Accordion.Body>
                   Booking a yacht with Yacht Club Goa is easy! Simply browse our website and choose the 
                   yacht that best suits your needs. You can then make a reservation by contacting 
                   us directly to discuss your preferences and get a personalized quote. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  What is the price range for renting a yacht?
                  </Accordion.Header>
                   <Accordion.Body>
                   Our yacht rental prices vary depending on the size and type of yacht, the duration of your charter, 
                   and the season.  We offer competitive rates and transparent pricing. Contact us for a specific 
                   quote based on your desired experience. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  Do you offer any packages or discounts?
                  </Accordion.Header>
                   <Accordion.Body>
                   Yes, we offer a variety of packages for different occasions, such as romantic getaways, 
                   birthday celebrations, and corporate events. We also occasionally offer seasonal 
                   discounts.  Check our website or contact us for the latest deals. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                  <Accordion.Header>
                  Do you offer any activities besides yacht rentals?
                  </Accordion.Header>
                   <Accordion.Body>
                   Yes!  In addition to yacht rentals, we offer jet-skiing adventures to add an 
                   adrenaline rush to your Goan experience. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                  <Accordion.Header>
                  Can I have a party on your yacht?
                  </Accordion.Header>
                   <Accordion.Body>
                   Absolutely! We can help you plan and host an unforgettable yacht party for any occasion. 
                   We can provide catering, entertainment, and decorations to make your event truly special. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                  <Accordion.Header>
                  What is included in a typical yacht charter?
                  </Accordion.Header>
                   <Accordion.Body>
                   The inclusions typically vary depending on your chosen package. However, most charters 
                   include the yacht itself, fuel for a set cruising distance, and the services of a 
                   captain and crew.  Food and beverages can be added based on your preferences. 
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                  <Accordion.Header>
                  Is there anything I need to bring for my yacht trip?
                  </Accordion.Header>
                   <Accordion.Body>
                   We recommend packing sunscreen, sunglasses, a hat, swimwear, and comfortable footwear.  
                   You may also want to bring a camera to capture the stunning Goan scenery.  
                   Specific requirements for your trip will be communicated upon booking.
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                  <Accordion.Header>
                  What are the safety measures in place on your yachts?
                  </Accordion.Header>
                   <Accordion.Body>
                   Your safety is our top priority. All our yachts are meticulously maintained and 
                   equipped with the latest safety features. Our experienced captains are also 
                   trained in emergency procedures.
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                  <Accordion.Header>
                  What are some popular destinations to visit on a yacht charter?
                  </Accordion.Header>
                   <Accordion.Body>
                   Goa boasts a stunning coastline with hidden coves, secluded beaches, and vibrant markets. 
                   Popular destinations include Miramar Beach, Dona Paula Bay, and Vagator Beach.  
                   We can help you customize your itinerary based on your interests.
                  </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10">
                  <Accordion.Header>
                  Is it possible to see dolphins on a yacht trip?
                  </Accordion.Header>
                   <Accordion.Body>
                   Yes, there's always a chance of spotting dolphins while cruising the Goan waters, 
                   especially during specific times of the year.  However, sightings cannot be guaranteed.
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>

           
       </Container>
      </section>
    </>
  )
}

export default Section6
