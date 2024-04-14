import React, { useState, useEffect } from 'react';
import './Banner.css';
import { getMovieImdbId } from '../../utils/getMovieImdbId';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchMovie() {
            const request = await fetch('https://moviesverse1.p.rapidapi.com/top-250-movies', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
                }
            })
            const moviesJson = await request.json();
            const randomMovie = Math.floor(Math.random() * moviesJson.movies.length - 1)
            const randomMoviesByTitle = await getMovieImdbId(moviesJson?.movies[randomMovie]);
            const selectedMovie = await randomMoviesByTitle?.search?.filter(m => m.title === moviesJson?.movies[randomMovie]?.title);
            const selectedMovieId = selectedMovie[0]?.imdbid;


            const fetchTrailerData = await fetch(`https://mdblist.p.rapidapi.com/?i=${selectedMovieId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST_2
                }
            })
            const fetchTrailerJSON = await fetchTrailerData.json();
            setMovie(fetchTrailerJSON);
        }
        fetchMovie();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }
    return (
        <header className='banner'
            style={{
                backgroundImage: `linear-gradient(45deg, black, transparent),url(${movie?.backdrop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // width: "100vw",
                // height: 'auto'
            }}
        >
            {/* <img src={movie?.image} alt="" style={{ height: '100%' }} /> */}
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title}
                </h1>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <p className="banner_description">{truncate(movie?.description, 150)}</p>
            </div>
            <div className='banner_fadeImage' />
        </header>
    )
}

export default Banner
