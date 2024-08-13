import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl,
} from "../global/globalsVariables";

import Favourite from "../components/Favourite";
import HeroBanner from "../components/HeroBanner";

function Home() {
  const [movies, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");

  const moviesFromApi = async () => {
    
    try {
      
    const response = await fetch(`${movieUrl}${category}?api_key=${APIKey}`);
    if (!response.ok) {
      throw new Error("setMovie fetch failed")
    }

    const data = await response.json();
    setMovie(data.results);
    console.log(data.results);
    
  } catch (error) {
    console.error(error)
}
};



    useEffect(() => {

      moviesFromApi();
      }, [category]);

  function handleClick(id) {
    setCategory(id);
  }

  return (
    <>
<<<<<<< HEAD
      <HeroBanner movieList={movies} />
=======
      <HeroBanner movieList={movies}/>
>>>>>>> 6f231fbb0766cd28d210925bc95220fa47f7572a
      <button onClick={() => handleClick("now_playing")}>Now Paying</button>
      <button onClick={() => handleClick("popular")}>Popular</button>
      <button onClick={() => handleClick("top_rated")}>Top Rated</button>
      <button onClick={() => handleClick("upcoming")}>Upcoming</button>

      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <li className="movie-card" key={movie.id}>
                <Favourite movieData={movie} />
                <div className="movie-title">{movie.title}</div>
                <div className="movie-date">{movie.release_date}</div>
                <div className="movie-poster">
                  <img
                    src={`${baseImgEndPoint}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="movie-overview">{movie.overview}</div>
                <button>
                  <Link to={`/detail/${movie.id}`}>More Info</Link>
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Home;
