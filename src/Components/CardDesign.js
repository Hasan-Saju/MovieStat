import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
const CardDesign = (props) => {
  return (
    <div className='movie'>
      <Card>
        <CardImg src={props.banner} />
        <CardBody>
          <CardTitle>
            <strong> {props.title}</strong>
          </CardTitle>
          <CardTitle>
            <strong>Rating: {props.rating}</strong>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardDesign;
