import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Link} from "react-router-dom";
import Favourite from "../components/Favourite";
import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl,
} from "../global/globalsVariables";

import {shortenSummary, reformatRuntime} from "../global/helperFunctions";

function Favourites() {
  const {favourites} = useContext(GlobalContext);
  return (
    <div>
      <ul className="movie-cards">
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <li className="movie-card" key={movie.id}>
              <img
                src={`${baseImgEndPoint}w342/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="hover-elem">
                <Favourite movieData={movie} />
                <div className="movie-title">{movie.title}</div>
                <div className="movie-date">{movie.release_date}</div>
                <div className="movie-poster"></div>
                <div className="movie-overview">
                  {shortenSummary(movie.overview, 25)}
                </div>
                <button className="info-btn">
                  <Link to={`/detail/${movie.id}`}>More Info</Link>
                </button>
              </div>
            </li>
          ))
        ) : (
          <div className="no-favourites">
            <p>No favourites to display</p>
            <a href="/">Back to home</a>
          </div>
        )}
      </ul>
    </div>
  );
}
export default Favourites;
