import Image from 'next/image'
import React from 'react'

import loader from '../assets/loading.gif'


function Loader() {
  return (
    <>
      <div className='loader_main_div'>
        <Image src={loader} alt='Yacht Club Goa'/>
      </div>
    </>
  )
}

export default Loader
