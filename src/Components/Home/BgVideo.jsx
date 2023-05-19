import React from 'react'
import './Home.css'
import bg_video from './Img/bg_video.mp4'

const BgVideo = () => {
  return (
    <>
          <video autoPlay loop muted preload='auto'>
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default BgVideo