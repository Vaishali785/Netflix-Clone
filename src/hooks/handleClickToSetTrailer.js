import { useState } from 'react'
import { getMovieImdbId } from '../utils/getMovieImdbId';
import { getMovieTrailer } from '../utils/getMovieTrailer';

const useClickToSetTrailer = () => {
    const [playingTrailerTitle, setPlayingTrailerTitle] = useState();
    const [trailerUrl, setTrailerUrl] = useState();

    const handleClickToSetTrailer = async (clickedMovie) => {
        if (clickedMovie?.title === playingTrailerTitle) {
            setPlayingTrailerTitle('');
            setTrailerUrl('');
        } else {
            /**
             * get trailer based on imdb id 
             */
            setPlayingTrailerTitle(clickedMovie?.title);
            try {
                const fetchedMoviesByTitle = await getMovieImdbId(clickedMovie);
                // console.log(fetchedMoviesByTitle);
                const selectedMovie = await fetchedMoviesByTitle?.search?.filter(movie => movie.title === clickedMovie?.title);
                const selectedMovieId = selectedMovie[0].imdbid;

                const trailerId = await getMovieTrailer(selectedMovieId);
                setTrailerUrl(trailerId);
                return trailerId;
            } catch (error) {
                console.log("Error in fetching trailer id", error);
            }
        }
    }


    return [playingTrailerTitle, handleClickToSetTrailer, trailerUrl]
}

export default useClickToSetTrailer