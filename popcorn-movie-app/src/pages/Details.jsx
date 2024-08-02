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
    const { id } = useParams()

    useEffect( () => {
      const moviesFromApi = async () => {
        const response = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`);
        const data = await response.json();
        setMovie(data);
        console.log(data)
        
      };

      moviesFromApi();
    }, []);


  return (
    <>
      
      {!movie && <div className="place-center"><LoadingSpinner/></div> }
      
        {movie && (
          <>
          <h1>{movie.title}</h1>
          <img src={`${baseImgEndPoint}${movie.backdrop_path}`} alt={movie.title}/>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average} rating</p>
                                    
    
          </>
      )}
   
    </>
  )
}
export default Details