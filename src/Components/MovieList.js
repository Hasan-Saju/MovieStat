import React, { useContext, useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "./MovieContext";
import axios from "axios";
import Form from "./Form";
import { Button } from "reactstrap";
import "./welcome.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [store, setStore] = useContext(MovieContext);
  const [sortOrNot, setSorOrNot] = useState(false);
  const [sortedList, setSortedList] = useState();

  useEffect(() => {
    (async function () {
      const options = {
        method: "GET",
        url: "https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/",
        params: { page_size: "50" },
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "4c9566bb43mshfc94bea36d93628p1cad66jsnb58c3cf82648",
        },
      };
      let response = await axios(options);
      let movies = response.data;
      console.log(movies.results);

      setMovieList(movies.results);

      // setStore({
      //   ...store.allMovieList,
      //   allMovieList: movieList,
      // });
      console.log(movieList);
    })();
  }, [sortOrNot]);

  const sortByGF = () => {
    setSorOrNot(!sortOrNot);
  };

  return (
    <div className='background'>
      <h2 style={{ color: "white" }}>Welcome Good People,</h2>
      <h3 style={{ color: "white" }}>Most Popular Movies</h3>
      <Form />
      {movieList.map((movie, index) => (
        <MovieCard imdb_id={movie.imdb_id} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
