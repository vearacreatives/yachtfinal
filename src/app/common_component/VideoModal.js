'use client'
import React, { useRef } from 'react'

import Modal from 'react-bootstrap/Modal';


//Css
import '../styles/common_component/VideoModal.css'

function VideoModal(props) {

    //Stop Video
    const video_ref = useRef(null)
    const handel_close = () => 
    {
        video_ref.current.pause();
        props.onHide();
    }
    //End of Video play

  return (
    <>
      <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='view_modal'>
      
      <Modal.Body className='video_body'>
      <video src={props.video_link} 
               ref={video_ref} 
               autoPlay 
               loop 
               playsInline //IOS compatiblity
               className='video_player' />

      <button className='video_modal_close_btn' onClick={() => handel_close()}>
        Close
      </button>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default VideoModal
