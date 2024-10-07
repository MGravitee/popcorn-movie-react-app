import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { APIKey, baseImgEndPoint, movieUrl } from "../global/globalsVariables";

import { shortenText, formatPercentage } from "../utilities/helperFunctions";

import Favourite from "../components/Favourite";
import HeroBanner from "../components/HeroBanner";

function Home() {
    const [movies, setMovie] = useState([]);
    const [category, setCategory] = useState("now_playing");
    const [activeFilter, setActiveFilter] = useState("now_playing");

    const moviesFromApi = async () => {
        try {
            const response = await fetch(
                `${movieUrl}${category}?api_key=${APIKey}`
            );
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
            <div className="filter-btns">
                <button
                    className={`underline-slide ${
                        activeFilter === "now_playing" ? "active" : ""
                    }`}
                    onClick={() => handleClick("now_playing")}
                >
                    Now Playing
                </button>
                <button
                    className={`underline-slide ${
                        activeFilter === "popular" ? "active" : ""
                    }`}
                    onClick={() => handleClick("popular")}
                >
                    Popular
                </button>
                <button
                    className={`underline-slide ${
                        activeFilter === "top_rated" ? "active" : ""
                    }`}
                    onClick={() => handleClick("top_rated")}
                >
                    Top Rated
                </button>
                <button
                    className={`underline-slide ${
                        activeFilter === "upcoming" ? "active" : ""
                    }`}
                    onClick={() => handleClick("upcoming")}
                >
                    Upcoming
                </button>
            </div>
            <h1 className="screen-reader-text">Popcorn Movies</h1>
            <ul className="movie-cards">
                {movies.length > 0 &&
                    movies.map((movie) => {
                        return (
                            <li className="movie-card" key={movie.id}>
                                <NavLink
                                    title="Link to selected Movie"
                                    aria-label="Link to selected Movie"
                                    to={`/detail/${movie.id}`}
                                >
                                    {" "}
                                    <img
                                        src={`${baseImgEndPoint}w342/${movie.poster_path}`}
                                        alt={`${movie.title} poster`}
                                    />
                                </NavLink>
                                <Favourite movieData={movie} />
                                <p className="movie-overview">
                                    {shortenText(movie.overview, 25)}
                                </p>
                                <p className="movie-date">
                                    {movie.release_date}
                                </p>
                                <h3 className="movie-title">
                                    {shortenText(movie.title, 5)}
                                </h3>
                                        <div
                                    className={
                                        movie.vote_average <= 3
                                            ? "default-votes low-votes movie-rate"
                                            : movie.vote_average <= 7
                                            ? "default-votes medium-votes movie-rate" //These styles can be found in the _votes.scss;
                                            : movie.vote_average <= 10
                                            ? "default-votes good-votes movie-rate"
                                            : movie.vote_average !== 0
                                            ? "default-votes no-votes movie-rate"
                                            : null
                                    }
                                >
                                    {movie.vote_average !== 0 &&
                                    movie.vote_average < 10 ? (
                                        <p className="rate-text">
                                            {formatPercentage(movie.vote_average)}
                                        </p>
                                    ) : movie.vote_average >= 10 ? (
                                        <p className="rate-text">
                                            {formatPercentage(movie.vote_average)}
                                        </p>
                                    ) : (
                                        <p className="rate-text">NR</p>
                                    )}
                                </div>
                                <NavLink
                                    className="info-btn"
                                    to={`/detail/${movie.id}`}
                                >
                                    More Info
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default Home;
