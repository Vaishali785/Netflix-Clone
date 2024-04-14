
export const getMovieTrailer = async (movieId) => {
    try {
        const fetchTrailerData = await fetch(`https://mdblist.p.rapidapi.com/?i=${movieId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST_2
            }
        })
        const fetchTrailerJSON = await fetchTrailerData.json();
        if (fetchTrailerJSON) {
            const urlParams = new URLSearchParams(new URL(fetchTrailerJSON?.trailer).search);
            const youtubePlayerId = urlParams.get('v');
            return youtubePlayerId;
        } else {
            throw new Error("Error fetching trailer")
        }
    } catch (error) {
        console.log("Error in fetching trailer from id", error)
    }
}

