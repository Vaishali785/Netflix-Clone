export const getMovieImdbId = async (movie) => {
    const fetchByTitle = `https://mdblist.p.rapidapi.com/?s=${movie.title}${movie.year ? '&y=' + movie.year : '&'}m=movie&l=5`
    try {
        const fetchedData = await fetch(fetchByTitle, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST_2
            }
        });
        const fetchedSelectedMovie = await fetchedData.json();
        setTimeout(() => {
            return new Error("Error in finding trailer");
        }, 3000);
        return fetchedSelectedMovie;
    } catch (error) {
        console.log("Error in fetching movies by title", error);
    }
}
