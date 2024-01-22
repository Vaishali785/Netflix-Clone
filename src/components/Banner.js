import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchMovie(){
        const request= await axios.get( 'https://api.themoviedb.org/3/trending/all/week?api_key=e51ff8064a7895bf5fcb1dbb070354ac&language=en-US'
            ); 
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]);
            // console.log(request.data.results)
        return request;
        }
        fetchMovie();
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str
    }
    return (
        <header className='banner' 
            style={{  backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
            backgroundSize: "cover" ,
            backgroundPosition: "center",
            }}>
        <div className="banner_content">
            <h1 className="banner_title">
                {movie?.original_title || movie?.original_name || movie?.name}
            </h1>
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
            <p className="banner_description">{truncate(movie?.overview,150)}</p>
        </div>    
        <div className='banner_fadeImage' />
        </header>
    )
}

export default Banner
