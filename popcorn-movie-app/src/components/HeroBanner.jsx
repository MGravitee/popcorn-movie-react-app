import { NavLink } from "react-router-dom";
import { baseImgEndPoint } from "../global/globalsVariables";
import { useState, useEffect } from "react";

//the backdrop image is way to small, gotta grab the bigger one
function HeroBanner({ movieList }) {
  const [backdrop, setBackdrop] = useState(0);
  const [firstImg, setFirstImg] = useState("hero-image");
  const [secondImg, setSecondImg] = useState("hero-image hidden");
  const [thirdImg, setThirdImg] = useState("hero-image hidden");
  //can probably improve this by combining the matching states into an array
  const [firstCircle, setFirstCircle] = useState("slider-circle active");
  const [secondCircle, setSecondCircle] = useState("slider-circle");
  const [thirdCircle, setThirdCircle] = useState("slider-circle");

  function selectFirst() {
    setFirstImg("hero-image");
    setSecondImg("hero-image hidden");
    setThirdImg("hero-image hidden");
    setFirstCircle("slider-circle active");
    setSecondCircle("slider-circle");
    setThirdCircle("slider-circle");
    setBackdrop(0);
  }
  function selectSecond() {
    setFirstImg("hero-image hidden");
    setSecondImg("hero-image");
    setThirdImg("hero-image hidden");
    setFirstCircle("slider-circle");
    setSecondCircle("slider-circle active");
    setThirdCircle("slider-circle");
    setBackdrop(1);
  }

  function selectThird() {
    setFirstImg("hero-image hidden");
    setSecondImg("hero-image hidden");
    setThirdImg("hero-image");
    setFirstCircle("slider-circle");
    setSecondCircle("slider-circle");
    setThirdCircle("slider-circle active");
    setBackdrop(2);
  }
  function selectSide(side) {
    let current = backdrop;
    current += side;
    if (current === 0) {
      selectFirst();
    } else if (current === 1) {
      selectSecond();
    } else if (current === 2) {
      selectThird();
    } else if (current === -1) {
      selectThird();
    } else {
      selectFirst();
    }
  }

  //getting the image slider to cycle is actually really hard search useInterval and use example from overreacted.io

  return (
    <div className="hero-div">
      {movieList.length > 0 && (
        <NavLink to={`/detail/${movieList[0].id}`} className={firstImg}>
          <img
            className={firstImg}
            src={`${baseImgEndPoint}original/${movieList[0].backdrop_path}`}
            alt={movieList[0].original_title}
          />
        </NavLink>
      )}
      {movieList.length > 0 && (
        <NavLink to={`/detail/${movieList[1].id}`} className={secondImg}>
          <img
            className={secondImg}
            src={`${baseImgEndPoint}original/${movieList[1].backdrop_path}`}
            alt={movieList[1].original_title}
          />
        </NavLink>
      )}
      {movieList.length > 0 && (
        <NavLink to={`/detail/${movieList[2].id}`} className={thirdImg}>
          <img
            className={thirdImg}
            src={`${baseImgEndPoint}original/${movieList[2].backdrop_path}`}
            alt={movieList[2].original_title}
          />
        </NavLink>
      )}

      {movieList.length > 0 && (
        <h2 className="movie-title">{movieList[backdrop].original_title}</h2>
      )}
      <div className="slider-flex">
        {/*should these be buttons?*/}
        <div onClick={() => selectFirst()} className={firstCircle}></div>
        <div onClick={() => selectSecond()} className={secondCircle}></div>
        <div onClick={() => selectThird()} className={thirdCircle}></div>
      </div>
      <button onClick={() => selectSide(-1)} className="arrow-left">
        &lt;
      </button>
      <button onClick={() => selectSide(1)} className="arrow-right">
        &gt;
      </button>
    </div>
  );
}

export default HeroBanner;
