import './App.scss';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  document.title = 'Fake Netflix.com'

  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" url={requests.fetchTrending} />
    </div>
  );
}

export default App;
