const API_KEY = process.env.REACT_APP_API_KEY;


const requests = {
    fetchPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&include_video=true&include_adult=false`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&include_video=true&include_adult=false`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_video=true&include_adult=false`,
    fetchTomCruiseMovies: `/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${API_KEY}&include_video=true&include_adult=false`,
    fetchAnimationMovies: `/discover/movie?with_genres=animation&include_video=true&include_adult=false`,
    fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35&page=2&without_genres=16&include_video=true&include_adult=false `,

    // fetchNetflixOriginals: `/discover/tv&with_networks=213&include_video=true&include_adult=false `,
    // fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28&page=1&include_video=true&include_adult=false `,
    // fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27&page=3&include_video=true&include_adult=false `,
    // fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749&page=1&with_keywords=love%2Cromance%2Cromantic&without_genres=animation&include_video=true&include_adult=false `,
    // fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99&page=1&include_video=true&include_adult=false`,

};

export default requests;
