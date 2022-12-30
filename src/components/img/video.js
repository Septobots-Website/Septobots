import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={"https://www.youtube.com/watch?v=NKdmfcId9YY&t=146s&ab_channel=Septobots%237777"}
      title={"Team:7777 - 2022 Rewind"}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video