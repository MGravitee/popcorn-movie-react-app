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

        const response = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`);
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
            <h1>{movie.title}</h1>
            <img className='backdrop'  src={`${baseImgEndPoint}/original${movie.backdrop_path}`} alt={movie.title}/>
            <img className='poster' src={`${baseImgEndPoint}${movie.poster_path}`} alt={movie.title}/>
            <p>Release Date: {movie.release_date}</p>
            <p>Average Rating: {movie.vote_average.toFixed(1)}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>{movie.overview}</p>
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