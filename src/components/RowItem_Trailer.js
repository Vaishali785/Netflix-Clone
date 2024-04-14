import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import { getMovieTrailer } from '../utils/getMovieTrailer';

const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    }
}

function RowItemTrailer({ title, playTrailerInRow, imdbId, loading }) {
    const [trailerId, setTrailerId] = useState();

    useEffect(() => {
        if (imdbId) {
            getMovieTrailer(imdbId).then(res => {
                setTrailerId(res);
            });
        } else {
            setTrailerId('');
        }
    }, [imdbId])
    const loadingContent = <h2 style={{ textAlign: 'center', paddingBlock: '5rem' }}>Loading...</h2>
    return (
        <>
            {playTrailerInRow == title &&
                <div className='trailer' data-id={trailerId ? trailerId : ''}>
                    {loading ? loadingContent :
                        trailerId && playTrailerInRow && imdbId &&
                        <Youtube opts={opts} videoId={trailerId} onReady={(event) => event.target.playVideo()} />

                    }
                </div>
            }
        </>
    )
}

export default RowItemTrailer