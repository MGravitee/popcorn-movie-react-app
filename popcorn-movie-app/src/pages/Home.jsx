import {useEffect, useState} from "react";
import {
  APIKey,
  nowPlaying,
  popular,
  topRated,
  upComing,
  baseImgEndPoint,
  movieUrl
} from "../global/globalsVariables";

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

        {movies.length > 0 && movies.map(movie => {
            return (
              
              <li key={movie.id}>{movie.title}{movie.release_date}</li>
              
            )
        })}
        </ul>





    </>


    




  )
}

export default Home;
