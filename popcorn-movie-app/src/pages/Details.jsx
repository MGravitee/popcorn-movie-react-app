import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
    APIKey,
    nowPlaying,
    popular,
    topRated,
    upComing,
    baseImgEndPoint,
    movieUrl,
} from "../global/globalsVariables";

import {
    reformatRuntime,
    displayGenres,
    displayRating,
    formatPercentage,
    formatDate,
} from "../utilities/helperFunctions";

import Favourite from "../components/Favourite";
import LoadingSpinner from "../components/LoadingSpinner";

function Details() {
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState(null);
    const { id } = useParams();

    const getVideos = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}`
            );
            if (!response.ok) {
                throw new Error("getVideo fetch failed");
            }
            const vidData = await response.json();

            // find() to help search the video array for specific terms to make sure it's
            //actually returning a trailer that can be embedded via youtube
            const youtubeTrailer = vidData.results.find((video) => {
                return video.site === "YouTube" && video.type === "Trailer";
            });

            setVideo(youtubeTrailer);
            console.log(youtubeTrailer);
        } catch (error) {
            console.error(error);
        }
    };

    const moviesFromApi = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-CA&append_to_response=release_dates`
            );
            if (!response.ok) {
                throw new Error("setMovie fetch failed");
            }

            const data = await response.json();

            setMovie(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        moviesFromApi();
        getVideos();
    }, []);

    return (
        <>
            {!movie && (
                <div className="place-center">
                    <LoadingSpinner />
                </div>
            )}

            {movie && (
                <>
                    <section>
                        <h1 className="screen-reader-text">{`Popcorn Movies | ${movie.title}`}</h1>
                        {movie.backdrop_path ? (
                            <img
                                className="det-backdrop"
                                src={`${baseImgEndPoint}original/${movie.backdrop_path}`}
                                alt={`${movie.title} backdrop`}
                            />
                        ) : (
                            <img
                                className="det-backdrop"
                                src="/no-images-large.webp"
                                alt="No image that displays when chosen movie has no backdrop"
                            />
                        )}
                    </section>
                    <section className="detail-grid">
                        <h2 className="det-title">{movie.title}</h2>
                        {movie.poster_path ? (
                            <img
                                className="det-poster"
                                src={`${baseImgEndPoint}w342/${movie.poster_path}`}
                                alt={`${movie.title} poster`}
                            />
                        ) : (
                            <img
                                className="det-poster"
                                src="/no-images-small.webp"
                                alt="No image that displays when chosen movie has no poster"
                            />
                        )}
                        <Favourite
                            className="det-fave det-item"
                            movieData={movie}
                        />
                        <p className="det-date det-item">
                            {formatDate(movie.release_date)}
                        </p>
                        <div
                            className={
                                movie.vote_average <= 3
                                    ? "default-votes low-votes det-votes"
                                    : movie.vote_average <= 7
                                    ? "default-votes medium-votes det-votes" //These classes can be found in the _components.scss page;
                                    : movie.vote_average <= 10
                                    ? "default-votes good-votes det-votes"
                                    : movie.vote_average !== 0
                                    ? "default-votes no-votes det-votes"
                                    : null
                            }
                        >
                            {movie.vote_average !== 0 &&
                            movie.vote_average < 10 ? (
                                <p className="det-item">
                                    {formatPercentage(movie.vote_average)}
                                </p>
                            ) : movie.vote_average >= 10 ? (
                                <p className="det-item">
                                    {formatPercentage(movie.vote_average)}
                                </p>
                            ) : (
                                <p className="det-item">NR</p>
                            )}
                        </div>
                        <p className="det-runtime det-item">
                            {reformatRuntime(movie.runtime)}
                        </p>
                        <p className="det-rating det-item">
                            {" "}
                            Rated: {displayRating(movie)}
                        </p>
                        {video ? (
                            <Link
                                className=" det-item trailer-link"
                                to={`https://www.youtube.com/embed/${video.key}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Play Trailer →
                            </Link>
                        ) : null}
                        <ul className="det-genres det-item">
                            {displayGenres(movie)}
                        </ul>
                        <p className="det-summary det-item">{movie.overview}</p>
                    </section>
                    {video ? (
                        <iframe
                            className="youtube-embed"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : null}
                </>
            )}
        </>
    );
}
export default Details;
