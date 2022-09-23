import React from 'react';

const BackgroundVideo = () => {
  const videoSource = require("../assets/Video/background.mp4");

  return (
    <div className="Container" >
      <video autoPlay="autoplay" loop="loop" muted className="videoTag">
        <source src={videoSource} type="video/mp4"></source>
      </video>
    </div>
  )
}

export default BackgroundVideo;