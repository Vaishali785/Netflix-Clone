import React, { useEffect, useState } from 'react'
import { getMovies } from '../utils/getMoviesToDisplay'
import { getMovieImdbId } from '../utils/getMovieImdbId';
import './Row.css';

function RowItemImages({ title, fetchUrl, isLargeRow, setPlayTrailerInRow, setImdbId, setLoading }) {
    const [movies, setMovies] = useState();
    const [clickedMovie, setClickedMovie] = useState();

    useEffect(() => {
        getMovies(fetchUrl).then((res) => setMovies(res?.movies))
    }, [fetchUrl])

    const handleClick = async (movie) => {
        setPlayTrailerInRow(title);

        if (clickedMovie === movie?.title) {
            setClickedMovie('');
            setImdbId('');
        } else {
            setClickedMovie(movie?.title);
            setLoading(true);
            const fetchedMoviesByTitle = await getMovieImdbId(movie);
            const selectedMovie = await fetchedMoviesByTitle?.search?.filter(m => m.title === movie?.title);
            const selectedMovieId = selectedMovie[0]?.imdbid;
            setLoading(false);
            setImdbId(selectedMovieId);
        }
    }
    return (
        <div className={`row-posters ${movies ? "" : "no-movie-largePoster"}`} >
            {movies?.map((movie, index) => (
                index < 50 &&
                <img className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                    key={index}
                    data-row={title}
                    onClick={() => handleClick(movie)}
                    src={movie ? (movie?.image || movie?.posterImage) : 'https://themesfinity.com/wp-content/uploads/2018/02/default-placeholder.png'}       //bcoz some backdrop_path are missing in API
                    alt={movie?.title}
                />
            ))
            }
        </div>
    )
}

export default RowItemImages