// 18th Oct 2021
import './App.css';
import Banner from './components/Banner';
import requests from './components/requests';
import Row from './components/Row';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Popular Now" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Tom Cruise" fetchUrl={requests.fetchTomCruiseMovies} />
    </div>
  );
}

export default App;
