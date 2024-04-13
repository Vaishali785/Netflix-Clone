// 18th Oct 2021
import './App.css';
import Banner from './components/Banner';
import requests from './components/requests';
import Row from './components/Row';
import Nav from './components/Nav';
import { useState } from 'react';
import TechnicalIssue from './ErrorPage/TechnicalIssue';


function App() {
    const [playTrailerInRow, setPlayTrailerInRow] = useState();

    return (
        <div className="App">
            <TechnicalIssue />
            {/* <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} /> */}
            {/* <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} /> */}
            {/* <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} playTrailerInRow={playTrailerInRow} setPlayTrailerInRow={setPlayTrailerInRow} /> */}
        </div>
    );
}

export default App;
