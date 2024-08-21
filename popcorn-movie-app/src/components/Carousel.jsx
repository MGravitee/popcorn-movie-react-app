import React from 'react'
import { NavLink } from "react-router-dom";
import { useSpringCarousel} from 'react-spring-carousel'
import { baseImgEndPoint } from "../global/globalsVariables";
import { useState } from 'react'

//big thanks to this tutorial for getting this to work
//https://dev.to/phandangkhoa96/a-carousel-with-zooming-active-slide-using-react-spring-carousel-4k69
function Carousel({movieList}) {

    const sliderItems = [
        {
          id: 'item-1',
          src: movieList.length > 0 ? `${baseImgEndPoint}original/${movieList[0].backdrop_path}` : `placeholder`,
          link: movieList.length > 0 ? `/detail/${movieList[0].id}` : '#',
        },
        {
            id: 'item-2',
            src: movieList.length > 0 ? `${baseImgEndPoint}original/${movieList[1].backdrop_path}` : `placeholder`,
            link: movieList.length > 0 ? `/detail/${movieList[1].id}` : '#',
        },
        {
            id: 'item-3',
            src: movieList.length > 0 ? `${baseImgEndPoint}original/${movieList[2].backdrop_path}` : `placeholder`,
            link: movieList.length > 0 ? `/detail/${movieList[2].id}` : '#',
          },
          
      ]

    const [currentSlide, setCurrentSlide] = useState(sliderItems[0].id)
      //gonna need breakpoints to get fancy
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem,
        useListenToCustomEvent 
      } = useSpringCarousel({
        itemsPerSlide: 1, 
        withLoop: true,
        gutter: 0,
        initialStartingPosition: 'center',
        items: sliderItems.map((item) => {
            return {
                ...item,
                renderItem: (
                  <NavLink to={item.link} >
                    <img className={currentSlide === item.id ? 'item-1' : 'item-2'} src={item.src} alt="item.id"/>
                  </NavLink>
                )
            }
        }),
      });

      useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })
  return (
    <div className='carousel'>
          {carouselFragment}
      <button onClick={slideToPrevItem}>Prev item</button>
      <button onClick={slideToNextItem}>Next item</button>
    </div>
  )
}

export default Carousel