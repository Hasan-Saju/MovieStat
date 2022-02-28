import { useContext } from "react";
import { CardImg, CardText } from "reactstrap";
import { MovieContext } from "./MovieContext";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./style.css";

const MovieDetails = (props) => {
  const [store, setStore] = useContext(MovieContext);

  return (
    <div className='dwrapper'>
      <div>
        <img className='dwrap-img' src={store.detail.banner} />
      </div>
      <div className='dwrap-body'>
        <div className='dwrap-child' style={{ fontSize: "2rem" }}>
          <strong>{store.detail.title}</strong>
        </div>
        <div className='dwrap-child'>
          <b>Rating:</b> {store.detail.rating}
        </div>
        <div className='dwrap-child'>
          <b>Release: </b>
          {store.detail.release}
        </div>
        <div className='dwrap-child'>
          <strong>Trailer:</strong>
          {/* <a href='{detail.trailer}'> {store.detail.trailer}</a> */}
        </div>
        <div>
          <iframe
            src={store.detail.trailer}
            height='200'
            width='300'
            title='Movie Trailer'
          ></iframe>
        </div>
        <div className='dwrap-child'>
          <b>Plot:</b> {store.detail.plot}
        </div>
        <div className='dwrap-child'>
          <b>Description:</b> {store.detail.description}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
