import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {NavLink, Link} from "react-router-dom";
import Favourite from "../components/Favourite";
import { baseImgEndPoint } from "../global/globalsVariables";

import {shortenText} from "../utilities/helperFunctions";

function Favourites() {
  const {favourites} = useContext(GlobalContext);
  return (
    <div>
      <h1 className="screen-reader-text">Popcorn Movies | Favourites</h1>
      <ul className="movie-cards">
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <li className="movie-card" key={movie.id}>
              <NavLink title="Link to selected Movie" aria-label="Link to selected Movie" to={`/detail/${movie.id}`}>
              {" "}
              <img
                src={`${baseImgEndPoint}w342/${movie.poster_path}`}
                alt={movie.title}
              />
              </NavLink>
                <Favourite movieData={movie} />
                <p className="movie-overview">
                      {shortenText(movie.overview, 25)}
                    </p>
                    <p className="movie-date">{movie.release_date}</p>{" "}
                    {/*display the correct format */}
                    <h3 className="movie-title">{shortenText(movie.title, 5)}</h3>
                    <NavLink className="info-btn" to={`/detail/${movie.id}`}>
                      More Info
                    </NavLink>
            </li>
          ))
        ) : (
          <div className="no-favourites">
            <p>No favourites to display</p>
            <NavLink className="back-to-home" to="/">Back to Home</NavLink>
          </div>
        )}
      </ul>
    </div>
  );
}
export default Favourites;
