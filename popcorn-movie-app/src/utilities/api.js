// API Keys

import { APIKey, APIToken } from "../global/globalsVariables";

//EndPoints

import {
    nowPlaying,
    popular,
    topRated,
    upComing,
    movieUrl
  } from "../global/globalsVariables";


const getMoviesByCategory = async (category) => {
    try {
        const response = fetch(`${popularEndPoint}?api_key=${APIKey}`);
        const data = await response.json();
        console.log({ data });
        return json;
    } catch (error) {
        //error stuff
    }
};

export {getMoviesByCategory}