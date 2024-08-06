import React from 'react'
import {
  baseImgEndPoint,
} from "../global/globalsVariables";

function HeroBanner({movieList}) {
  return (
    <div>
      <img src={`${baseImgEndPoint}${movieList[1].backdrop_path}`} alt={movieList[1].original_title} />
      <img src={`${baseImgEndPoint}${movieList[0].backdrop_path}`} alt={movieList[0].original_title} />
      <img src={`${baseImgEndPoint}${movieList[2].backdrop_path}`} alt={movieList[2].original_title} />
    </div>
  )
}

export default HeroBanner