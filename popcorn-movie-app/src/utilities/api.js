
const APIToken = import.meta.env.VITE_MOVIE_BEARER_TOKEN;

const APIKey = import.meta.env.VITE_MOVIE_API_KEY;
const endpoint = "https://www.tmdbpath.com"

const getMoviesByCategory = async (category) => {
    try {
        const result = fetch(`${endpoint}?api_key=${APIKey}`)
        const json = await result.json();
        return json;

    } catch(error) {
        //error stuff
    }
}