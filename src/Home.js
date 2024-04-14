import React, { useState } from 'react'
import RowWrapper from './components/RowWrapper'
import RowItemImages from './components/RowItem_Images'
import RowItemTrailer from './components/RowItem_Trailer'
import { fetchAction, fetchAnimation, fetchComedy, fetchPopular, fetchTopBoxOffice } from './store/apiRequests';
import Banner from './components/old/Banner';
import Nav from './components/old/Nav';

function Home() {
    const [playTrailerInRow, setPlayTrailerInRow] = useState();
    const [imdbId, setImdbId] = useState();
    const [loading, setLoading] = useState();

    return (
        <div className='home'>
            <Nav />
            <Banner />
            <div className='rows-wrapper'>
                <RowWrapper title="Top Box Office">
                    <RowItemImages title="Top Box Office" isLargeRow fetchUrl={fetchTopBoxOffice} setLoading={setLoading} setPlayTrailerInRow={setPlayTrailerInRow} setImdbId={setImdbId} />
                    <RowItemTrailer title="Top Box Office" playTrailerInRow={playTrailerInRow} imdbId={imdbId} loading={loading} />
                </RowWrapper>

                <RowWrapper title="Popular Now">
                    <RowItemImages title="Popular Now" fetchUrl={fetchPopular} setLoading={setLoading} setPlayTrailerInRow={setPlayTrailerInRow} setImdbId={setImdbId} />
                    <RowItemTrailer title="Popular Now" playTrailerInRow={playTrailerInRow} imdbId={imdbId} loading={loading} />
                </RowWrapper>


                <RowWrapper title="Animation">
                    <RowItemImages title="Animation" fetchUrl={fetchAnimation} setLoading={setLoading} setPlayTrailerInRow={setPlayTrailerInRow} setImdbId={setImdbId} />
                    <RowItemTrailer title="Animation" playTrailerInRow={playTrailerInRow} imdbId={imdbId} loading={loading} />
                </RowWrapper>

                <RowWrapper title="Action">
                    <RowItemImages title="Action" fetchUrl={fetchAction} setLoading={setLoading} setPlayTrailerInRow={setPlayTrailerInRow} setImdbId={setImdbId} />
                    <RowItemTrailer title="Action" playTrailerInRow={playTrailerInRow} imdbId={imdbId} loading={loading} />
                </RowWrapper>

                <RowWrapper title="Comedy">
                    <RowItemImages title="Comedy" fetchUrl={fetchComedy} setLoading={setLoading} setPlayTrailerInRow={setPlayTrailerInRow} setImdbId={setImdbId} />
                    <RowItemTrailer title="Comedy" playTrailerInRow={playTrailerInRow} imdbId={imdbId} loading={loading} />
                </RowWrapper>
            </div>
        </div>
    )
}

export default Home