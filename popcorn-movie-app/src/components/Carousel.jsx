import React from "react";
import { NavLink } from "react-router-dom";
import { useSpringCarousel } from "react-spring-carousel";
import { baseImgEndPoint } from "../global/globalsVariables";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

//big thanks to this tutorial for getting this to work
//https://dev.to/phandangkhoa96/a-carousel-with-zooming-active-slide-using-react-spring-carousel-4k69
function Carousel({ movieList }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const sliderItems = [
    {
      id: "item-1",
      src:
        movieList.length > 0
          ? `${baseImgEndPoint}original/${movieList[0].backdrop_path}`
          : `placeholder`,
      link: movieList.length > 0 ? `/detail/${movieList[0].id}` : "#",
      title: movieList.length > 0 ? movieList[0].title : "",
    },
    {
      id: "item-2",
      src:
        movieList.length > 0
          ? `${baseImgEndPoint}original/${movieList[1].backdrop_path}`
          : `placeholder`,
      link: movieList.length > 0 ? `/detail/${movieList[1].id}` : "#",
      title: movieList.length > 0 ? movieList[1].title : "",
    },
    {
      id: "item-3",
      src:
        movieList.length > 0
          ? `${baseImgEndPoint}original/${movieList[2].backdrop_path}`
          : `placeholder`,
      link: movieList.length > 0 ? `/detail/${movieList[2].id}` : "#",
      title: movieList.length > 0 ? movieList[2].title : "",
    },
  ];

  //scrolls the carousel automatically every 5 seconds
  useEffect(() => {
    movieList.length > 0 ? setInterval(slideToNextItem, 5000) : "";
  }, [movieList]);

  const [currentSlide, setCurrentSlide] = useState(sliderItems[0].id);
  //gonna need breakpoints to get fancy
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: isDesktopOrLaptop ? 3 : 1,
    withLoop: true,
    initialStartingPosition: "center",
    items: sliderItems.map((item) => {
      return {
        ...item,
        renderItem: (
          <NavLink className="splash-link" to={item.link}>
            <h2 className={currentSlide === item.id ? "title-active" : "title-sleep"}>{item.title}</h2>
            <img
              className={currentSlide === item.id ? "item-1" : "item-2"}
              src={item.src}
              alt="item.id"
            />
          </NavLink>
        ),
      };
    }),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(event?.nextItem?.id);
    }
  });
  return (
    <div className="carousel">
      {carouselFragment}
      <button className="carousel-button left" onClick={slideToPrevItem}>
        &lt;
      </button>
      <button className="carousel-button right" onClick={slideToNextItem}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
