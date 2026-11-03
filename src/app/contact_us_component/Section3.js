import React from 'react'

//CSS
import styles from '../styles/contact_us/contact_us.module.css'

function Section3() {
  return (
    <section className={styles.section3}>
    
    <iframe className={styles.google_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123026.84370645201!2d73.75893924173293!3d15.506531446542562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf992a968201%3A0x2915f376069e28d7!2sYacht%20Club%20Goa!5e0!3m2!1sen!2sin!4v1715243494276!5m2!1sen!2sin" 
            width="600" height="450" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Section3
