import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useEffect, useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import axios from "axios";

const SearchedMovie = () => {
  const [store, setStore, searchString, setSearchString] =
    useContext(MovieContext);
  const [movie, setMovie] = useState();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    (async function () {
      const options = {
        method: "GET",
        url: `https://data-imdb1.p.rapidapi.com/movie/byKeywords/${searchString}/`,
        params: { page_size: "50" },
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "4c9566bb43mshfc94bea36d93628p1cad66jsnb58c3cf82648",
        },
      };
      let response = await axios(options);
      let movieData = response.data.results;
      console.log("HIIIIII");
      console.log(movieData);

      setMovie(movieData[0]);

      console.log(movie[0]);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const options = {
        method: "GET",
        url: `https://data-imdb1.p.rapidapi.com/movie/id/${movie?.imdb_id}/`,
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "4c9566bb43mshfc94bea36d93628p1cad66jsnb58c3cf82648",
        },
      };
      let response = await axios(options);
      let movieTemp = response.data;

      setMovieDetail(movieTemp.results);

      console.log(movieTemp.results);
    })();
  }, [movie]);

  return (
    <div className='dwrapper'>
      <div>
        <img className='dwrap-img' src={movieDetail?.banner} />
      </div>
      <div className='dwrap-body'>
        <div className='dwrap-child' style={{ fontSize: "2rem" }}>
          <strong>{movieDetail?.title}</strong>
        </div>
        <div className='dwrap-child'>
          <b>Rating:</b>
          {movieDetail?.rating}
        </div>
        <div className='dwrap-child'>
          <b>Release: </b>
          {movieDetail?.release}
        </div>
        <div className='dwrap-child'>
          <strong>Trailer:</strong>
          {/* <a href='{detail.trailer}'> {store.detail.trailer}</a> */}
        </div>
        <div>
          <iframe
            src={movieDetail?.trailer}
            height='200'
            width='300'
            title='Movie Trailer'
          ></iframe>
        </div>
        <div className='dwrap-child'>
          <b>Plot:</b>
          {movieDetail?.plot}
        </div>
        <div className='dwrap-child'>
          <b>Description:</b>
          {movieDetail?.description}
        </div>
      </div>
    </div>
    // <div className='movie'>
    //   <Card>
    //     <CardImg src={movieDetail?.banner} />
    //     <CardBody>
    //       <CardTitle>
    //         <strong> {movieDetail?.title}</strong>
    //       </CardTitle>
    //       <CardTitle>
    //         <strong>Rating: {movieDetail?.rating}</strong>
    //       </CardTitle>
    //     </CardBody>
    //   </Card>
    // </div>
  );
};

export default SearchedMovie;
