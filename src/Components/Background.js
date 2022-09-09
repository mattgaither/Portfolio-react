import React from 'react';

const BackgroudVideo = () => {
  const videoSource = require("../assets/Video/background.mp4");

  return (
    <div className="videoContainer" >
      <video autoPlay="autoplay" loop="loop" muted className="videoTag" style={{ position: 'fixed', zIndex: '-1', top: '0', left: '0', width: '100vw' }}>
        <source src={videoSource} type="video/mp4"></source>
      </video>
    </div>
  )
}

export default BackgroudVideo;