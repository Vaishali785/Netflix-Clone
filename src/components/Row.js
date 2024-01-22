import React, { useState, useEffect } from 'react'
import instance from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow, playTrailerInRow, setPlayTrailerInRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [currentTrailer, setCurrentTrailer] = useState('');


    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(`https://api.themoviedb.org/3${fetchUrl}`)
                .then((res) => {
                    //movie-trailer package can't play trailer of tv shows so removed tv shows
                    setMovies(res.data.results.filter(m => m.poster_path !== null && m.backdrop_path !== null && m?.media_type != "tv"));            //bcoz some movies have both poster_path and backdrop_path missing

                });
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie, e) => {
        if (trailerUrl) {

            //when trailer is running
            //check if second click was on same movie as the previous one 
            if (currentTrailer == e.target.getAttribute('alt')) {
                //if yes then close the trailer and set currentTrailer to null
                setTrailerUrl('');
                setCurrentTrailer('')

                // to remove trailer screen.
                setPlayTrailerInRow('');
            } else {

                // to set trailer screen in the same row as fro which the movie is clicked.
                if (title == e.target.getAttribute('data-row')) {
                    setPlayTrailerInRow(title);
                }

                //if first and second click was on different movies then run trailer of second movie
                setCurrentTrailer(e.target.getAttribute('alt'))
                movieTrailer(e.target.getAttribute('alt'))
                    .then((url) => {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'));
                    })
                    .catch(error => console.log(error));
            }

        } else {
            //when no trailer is running
            setCurrentTrailer(e.target.getAttribute('alt'))  //passed name of maovie

            // to set trailer screen in the same row as fro which the movie is clicked.
            if (title == e.target.getAttribute('data-row')) {
                setPlayTrailerInRow(title);
            }

            //run trailer
            movieTrailer(movie?.name || movie?.original_title || movie?.title, { tbdbId: movie?.id })
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    return (

        // ***************BUG RESOLVED
        // when trailer is running , clicking on any poster wont change the trailer but close it

        <div className='row'>
            <h2>{title}</h2>
            <div className={`row-posters ${movies ? "" : "no-movie-largePoster"}`}>

                {movies.map(movie => (
                    <img className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                        key={movie.id}
                        data-row={title}
                        onClick={(e) => handleClick(movie, e)}
                        src={movie ? `${base_url}${isLargeRow ? movie.poster_path : (movie.backdrop_path)}` : 'https://themesfinity.com/wp-content/uploads/2018/02/default-placeholder.png'}       //bcoz some backdrop_path are missing in API
                        alt={`${((isLargeRow && movie?.poster_path !== null) || (!isLargeRow && movie?.backdrop_path !== null)) ? (movie?.name || movie?.original_title || movie?.title) : ""}`}
                    />
                ))
                }
            </div>
            {playTrailerInRow == title && trailerUrl &&
                <Youtube opts={opts} videoId={trailerUrl} onReady={(event) => event.target.playVideo()} />
            }

        </div>
    )
}

export default Row;
