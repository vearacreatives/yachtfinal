'use client'
import React from 'react'

//Css
import styles from '../styles/gallery/gallery.module.css'
import { Container } from 'react-bootstrap'

//Images
import Image from 'next/image'

//Light Box
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
//End of Light Box
import { Gallery_data } from './Gallery_data'
function Section2() {

  return (
    <>
      <section className={styles.section2}>
        <Container>
       <SlideshowLightbox lightboxIdentifier="lightbox1" 
                          framework="next" 
                          images={Gallery_data}
                          className={styles.gallery_light_box_slide_show}
                          showThumbnails={true}
                          fullScreen={true}>
        {Gallery_data.map((image,index) => (
            <Image
              src={image.src}
              alt={image.alt}
              height={400}
              width={400}
              data-lightboxjs="lightbox1"
              className={styles.gallery_img}
              key={index}
              />
        ))}
       </SlideshowLightbox>
        </Container>
      </section>
    </>
  )
}

export default Section2
