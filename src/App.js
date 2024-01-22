// 18th Oct 2021
import './App.css';
import Banner from './components/Banner';
import requests from './components/requests';
import Row from './components/Row';
import Nav from './components/Nav';
import { useState } from 'react';


function App() {
    const [playTrailerInRow, setPlayTrailerInRow] = useState();

    return (
        <div className="App">
            <Nav />
            <Banner />
            <Row title="Popular Now" fetchUrl={requests.fetchPopular} isLargeRow playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Animation" fetchUrl={requests.fetchAnimationMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
            <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} />
        </div>
    );
}

export default App;
