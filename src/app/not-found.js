
'use client'

import {FormGroup,FormControl} from 'react-bootstrap';

import Image from 'next/image'

//Css
import styles from './not_found.module.css'

//Images
import not_found_img from './assets/not_found/banner_img.jpeg'

import Link from 'next/link'

function NotFound() {
  return (
    <>
      <section className={styles.not_found_main_div}>
        <Image src={not_found_img} alt='not found image' className={styles.not_found_img}/>

        <h1 className={styles.not_found_title}>
        Page not found!
        </h1>

        <p className={styles.not_found_info}>
        Sorry we can't find that page! The page you are looking for was never existed.
        </p>
        
        <FormGroup>
          <FormControl type='text'
                       placeholder='Search'
                       className={styles.not_found_search_input}
                       />
        </FormGroup>

        <Link href='/' className={styles.link_go_back_home}>
          Back To Home
        </Link>
      </section>
    </>
  )
}

export default NotFound
