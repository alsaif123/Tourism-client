import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const PlaceDetails = () => {
  const [place, setPlace] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("http://localhost:5000/getPlaces")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setServiceData(data)
        const placeDetails = data.find((e) => e._id === id);
        setPlace(placeDetails);
        // console.log(blogDetails);
      });
  }, []);
  return (
    <div className="container p-5">
        <Card>
      <Card.Img variant="top" src={place.img}
      style={{
          height:"350px"
      }}
      />
      <Card.Body>
        <Card.Title>{place.placeName}</Card.Title>
        <Card.Text>
       {place.description}
        </Card.Text>
        <Card.Text>
       Total cost : {place.cost} TK
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{Date().toString()}</small>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default PlaceDetails;
