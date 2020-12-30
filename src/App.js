import './App.scss';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  document.title = 'Fake Netflix.com'

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now (Weekly)" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
    </div>
  );
}

export default App;
