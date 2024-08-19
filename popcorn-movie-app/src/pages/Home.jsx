import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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
        throw new Error("setMovie fetch failed");
      }

      const data = await response.json();
      setMovie(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
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
      <HeroBanner movieList={movies} />
      <div className="filter-btns">
        <a
          href="#"
          className="filter-btn"
          onClick={() => handleClick("now_playing")}>
          Now Paying
        </a>
        <a
          href="#"
          className="filter-btn"
          onClick={() => handleClick("popular")}>
          Popular
        </a>
        <a
          href="#"
          className="filter-btn"
          onClick={() => handleClick("top_rated")}>
          Top Rated
        </a>
        <a
          href="#"
          className="filter-btn"
          onClick={() => handleClick("upcoming")}>
          Upcoming
        </a>
        <div class="animation start-home"></div>
      </div>

      <ul className="movie-cards">
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <li className="movie-card" key={movie.id}>
                <img
                  src={`${baseImgEndPoint}${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="hover-elem">
                  <Favourite movieData={movie} />
                  <div className="movie-date">{movie.release_date}</div>
                  <div className="movie-poster">
                    <div className="movie-title">{movie.title}</div>
                  </div>
                  <div className="movie-overview">{movie.overview}</div>
                  <button className="info-btn">
                    <Link to={`/detail/${movie.id}`}>More Info</Link>
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Home;
