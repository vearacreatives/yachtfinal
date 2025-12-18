'use client'
import React, { useState } from 'react'

//Icons
import { FaPlay } from "react-icons/fa6";
import VideoModal from '../common_component/VideoModal';

//Video
import video_sec5 from '../assets/home/section5/DISCOVER AMAZING AND LUXURIOUS YACHTS.mp4'

function Section5() {

  //Modal
  const [video_modal, setVideo_modal] = useState(false)
  //End of Modal

  return (
    <>
      <section className="section5">
            <button className="btn_play" onClick={() => setVideo_modal(true)}>
                <FaPlay/>
            </button>

            <h2 className="sec5_title">
            Discover Amazing and Luxurious Yachts
            </h2>

            <p className="sec5_info">
            Choose Your Perfect Escape: Music, Decor, Activities - Craft Your Dream Day Aboard
            </p>
    </section>

    {/* Video Modal */}
    <VideoModal
     show = {video_modal}
     onHide = {() => setVideo_modal(false)}
     video_link = {video_sec5}/>
    {/* End of Modal */}
    </>
  )
}

export default Section5
