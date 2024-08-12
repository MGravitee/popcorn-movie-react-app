import { baseImgEndPoint } from "../global/globalsVariables";
import { useState, useEffect } from "react";

//the backdrop image is way to small, gotta grab the bigger one
function HeroBanner({ movieList }) {
  const [backdrop, setBackdrop] = useState(0);
  const [firstImg, setFirstImg] = useState("hero-image");
  const [secondImg, setSecondImg] = useState("hero-image hidden");
  const [thirdImg, setThirdImg] = useState("hero-image hidden");

  function selectFirst() {
    setFirstImg("hero-image");
    setSecondImg("hero-image hidden");
    setThirdImg("hero-image hidden");
    setBackdrop(0);
  }
  function selectSecond() {
    setFirstImg("hero-image hidden");
    setSecondImg("hero-image");
    setThirdImg("hero-image hidden");
    setBackdrop(1);
  }

  function selectThird() {
    setFirstImg("hero-image hidden");
    setSecondImg("hero-image hidden");
    setThirdImg("hero-image");
    setBackdrop(3);
  }

  //getting the image slider to cycle is actually really hard search useInterval and use example from overreacted.io

  return (
    <div className="hero-div">
      {movieList.length > 0 && (
        <img
          className={firstImg}
          src={`${baseImgEndPoint}${movieList[0].backdrop_path}`}
          alt={movieList[0].original_title}
        />
      )}
      {movieList.length > 0 && (
        <img
          className={secondImg}
          src={`${baseImgEndPoint}${movieList[1].backdrop_path}`}
          alt={movieList[1].original_title}
        />
      )}
      {movieList.length > 0 && (
        <img
          className={thirdImg}
          src={`${baseImgEndPoint}${movieList[2].backdrop_path}`}
          alt={movieList[2].original_title}
        />
      )}

      {movieList.length > 0 && (
        <h2 className="movie-title">{movieList[backdrop].original_title}</h2>
      )}
      <div className="slider-flex">
        <div onClick={() => selectFirst()} className="slider-circle"></div>
        <div onClick={() => selectSecond()} className="slider-circle"></div>
        <div onClick={() => selectThird()} className="slider-circle"></div>
      </div>
    </div>
  );
}

export default HeroBanner;
