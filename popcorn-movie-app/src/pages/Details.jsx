import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl,
} from "../global/globalsVariables";


import { reformatRuntime, displayGenres, displayRating } from "../global/helperFunctions";

import Favourite from "../components/Favourite";
import LoadingSpinner from '../components/LoadingSpinner';

function Details() {

    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState(null);
    const { id } = useParams()

    const getVideos = async () => {

      try {
        const response = await fetch( `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}`);
          if (!response.ok) {
            throw new Error("getVideo fetch failed")
          }
        const vidData = await response.json();
  
          // find() to help search the video array for specific terms to make sure it's
          //actually returning a trailer that can be embedded via youtube 
          const youtubeTrailer = vidData.results.find ( video => {
            return video.site === "YouTube" && video.type === "Trailer";
          } )
        setVideo(youtubeTrailer);
        console.log(youtubeTrailer);
        
      } catch (error) {
        console.error(error)
      }
    };

    const moviesFromApi = async () => {

      try {

        const response = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-CA&append_to_response=release_dates`);
          if (!response.ok) {
          throw new Error("setMovie fetch failed")
        }

      const data = await response.json();

      setMovie(data);
      console.log(data);

    } catch (error) {
      console.error(error)
    }
    };

    useEffect( () => {
      
      moviesFromApi();
      getVideos();
  }, []);


  return (
    <>
      
      {!movie && <div className="place-center"><LoadingSpinner/></div> }
      
        {movie && (
          <>
            <section className='detail-grid'>
              <img className='det-backdrop'  src={`${baseImgEndPoint}original/${movie.backdrop_path}`} alt={movie.title}/>
              <img className='det-poster' src={`${baseImgEndPoint}w342/${movie.poster_path}`} alt={movie.title}/>
              <h1 className='det-title' >{movie.title}</h1>
              <Favourite className='det-fave' movieData={movie} />
              <p className='det-date' >{movie.release_date}</p>
              <p className='det-votes' >{movie.vote_average.toFixed(1)}/10</p>
              <p className='det-runtime' >{}{reformatRuntime(movie.runtime)}</p>
            <p className='det-rating'> {displayRating(movie)}</p>
            </section>
            <section className='detail-below'>
            <ul className='det-genres'>{displayGenres(movie)}</ul>
            <p className='det-summary' >{movie.overview}</p>
            </section>
          </>
      )}
        {video ? (
              <iframe
                className="youtube-player"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : null}
   
    </>
  )
}
export default Details