import "./App.css";
import { MovieContext, MovieProvider } from "./Components/MovieContext";
import MovieList from "./Components/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Header from "./Components/Header";
import { Container } from "reactstrap";
import SortByRatings from "./Components/SortByRatings";
import CardDesign from "./Components/CardDesign";
import SearchedMovie from "./Components/SearchedMovie";
import Poster from "./Components/Poster";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        {/* <Container> */}
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/details' element={<MovieDetails />} />
          <Route path='/sortByRatings' element={<SortByRatings />} />
          <Route path='/searchedMovie' element={<SearchedMovie />} />
        </Routes>
        {/* </Container> */}
      </Router>
    </MovieProvider>
  );
}

export default App;
