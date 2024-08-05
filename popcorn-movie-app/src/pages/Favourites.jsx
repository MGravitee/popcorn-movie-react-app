import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Link} from "react-router-dom";
import Favourite from "../components/Favourite";

function Favourites() {
  const {favourites} = useContext(GlobalContext);
  return (
    <div>
      <ul>
        {favourites.length > 0 ? (
          favourites.map((movie) => (
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
          ))
        ) : (
          <p>No favourites to display</p>
        )}
      </ul>
    </div>
  );
}
export default Favourites;
