import { useEffect, useState } from "react";
import {
  APIKey,
  nowPlayingEndPoint,
  popularEndPoint,
  topRatedEndPoint,
  upComingEndPoint,
  movieUrl,
} from "../global/globalsVariables";

function Home() {
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");

  useEffect(() => {
    const moviesFromApi = async () => {
      const response = await fetch(`${movieUrl}${category}?api_key=${APIKey}`);
      const data = await response.json();
      setMovie(data);
    };
    moviesFromApi();
  }, []);
  return <div>Hello Luke</div>;
}
export default Home;
