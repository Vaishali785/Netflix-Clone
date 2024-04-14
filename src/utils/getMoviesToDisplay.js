
export const getMovies = async (fetchUrl) => {
    try {
        const movies = await fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST,
            }
        })
        const moviesJson = await movies.json();
        // setMovies(moviesJson.movies.filter(m => m.image != null));            //bcoz some movies have both poster_path and backdrop_path missing
        return moviesJson;
    } catch (error) {
        console.log("Error in fetching display movies", error);
    }
};
