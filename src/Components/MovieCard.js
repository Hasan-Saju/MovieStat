import { useState, useEffect, useContext } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import axios from "axios";
import "./style.css";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";
import Poster from "./Poster";

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);
  const [
    store,
    setStore,
    searchString,
    setSearchString,
    allMovieList,
    setAllMovieList,
  ] = useContext(MovieContext);
  let navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const options = {
        method: "GET",
        url: `https://data-imdb1.p.rapidapi.com/movie/id/${props.imdb_id}/`,
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "4c9566bb43mshfc94bea36d93628p1cad66jsnb58c3cf82648",
        },
      };
      let response = await axios(options);
      let movieTemp = response.data.results;

      setMovie(movieTemp);
      setAllMovieList([...allMovieList, movieTemp]);

      console.log(movieTemp);
    })();
  }, []);

  const clickForDetails = (e) => {
    console.log("hi");
    setStore({ ...store, detail: movie });
    navigate("/details");
  };

  return (
    movie && (
      <div className='movie'>
        <Poster
          banner={movie.banner}
          title={movie.title}
          clickForDetails={clickForDetails}
        />
      </div>
    )
  );
};

export default MovieCard;
