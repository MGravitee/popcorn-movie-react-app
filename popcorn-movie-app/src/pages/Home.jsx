import { useEffect, useState } from "react";
import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl,
} from "../global/globalsVariables";

import Favourite from "../components/favourite";

function Home() {
  const [movies, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");

  useEffect(() => {
    const moviesFromApi = async () => {
      const response = await fetch(`${movieUrl}${category}?api_key=${APIKey}`);
      const data = await response.json();
      setMovie(data.results);
      console.log(data.results);
    };
    moviesFromApi();
  }, []);
  return (
    <>
      <h2>Hello Luke</h2>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <li className="movie-card" key={movie.id}>
                <Favourite isFavourite={true} />
                <div className="movie-title">{movie.title}</div>
                <div className="movie-date">{movie.release_date}</div>
                <div className="movie-poster">
                  <img
                    src={`${baseImgEndPoint}${movie.poster_path}`}
                    alt="movie.title"
                  />
                </div>
                <div className="movie-overview">{movie.overview}</div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Home;
