import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {NavLink} from "react-router-dom";
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

import {shortenText} from "../utilities/helperFunctions";

function Favourites() {
  const {favourites} = useContext(GlobalContext);
  return (
    <div>
      <h1 class="screen-reader-text">Popcorn Movies | Favourites</h1>
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
                <div className="movie-title">{shortenText(movie.title, 5)}</div>
                <div className="movie-date">{movie.release_date}</div>
                <div className="movie-poster"></div>
                <div className="movie-overview">
                  {shortenText(movie.overview, 25)}
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
            <NavLink to="/">Back to Home</NavLink>
          </div>
        )}
      </ul>
    </div>
  );
}
export default Favourites;
