import Nav from "./components/nav/Nav";
import Banner from './components/banner/Banner'
import Row from "./components/row/Row";
import requests from "./utils/requests/requests";
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            <Row isLargeRow title="Trending" fetchUrl={requests.trending} />
            <Row title="Popular" fetchUrl={requests.popular} />
            <Row title="Top rated" fetchUrl={requests.top_rated} />
            <Row title="UpComing" fetchUrl={requests.upcoming} />
        </div>
    );
}

export default App;
