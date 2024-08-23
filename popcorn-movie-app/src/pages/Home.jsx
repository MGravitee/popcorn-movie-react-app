import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl,
} from "../global/globalsVariables";

import {shortenText} from "../utilities/helperFunctions";

import Favourite from "../components/Favourite";
import HeroBanner from "../components/HeroBanner";

function Home() {
  const [movies, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");
  const [activeFilter, setActiveFilter] = useState("now_playing");

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
    setActiveFilter(id);
  }

  return (
    <>
      <HeroBanner movieList={movies} />
      {/* {movies.length > 0 && ( */}
      <div className="filter-btns">
        <button
          className={`underline-slide ${
            activeFilter === "now_playing" ? "active" : ""
          }`}
          onClick={() => handleClick("now_playing")}>
          Now Playing
        </button>
        <button
          className={`underline-slide ${
            activeFilter === "popular" ? "active" : ""
          }`}
          onClick={() => handleClick("popular")}>
          Popular
        </button>
        <button
          className={`underline-slide ${
            activeFilter === "top_rated" ? "active" : ""
          }`}
          onClick={() => handleClick("top_rated")}>
          Top Rated
        </button>
        <button
          className={`underline-slide ${
            activeFilter === "upcoming" ? "active" : ""
          }`}
          onClick={() => handleClick("upcoming")}>
          Upcoming
        </button>
      </div>
      <h1 className="screen-reader-text">Popcorn Movies</h1>
      <ul className="movie-cards">
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <li className="movie-card" key={movie.id}>
                <img
                  src={`${baseImgEndPoint}w342/${movie.poster_path}`}
                  alt={movie.title}
                />
                  <Favourite movieData={movie} />
                  <p className="movie-overview">
                    {shortenText(movie.overview, 25)}
                  </p>
                  <p className="movie-date">{movie.release_date}</p> {/*display the correct format */}
                  <h3 className="movie-title">{shortenText(movie.title, 5)}</h3>
                  <NavLink className='info-btn' to={`/detail/${movie.id}`}>More Info</NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Home;
