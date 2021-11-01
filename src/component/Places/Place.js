import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Place = ({place}) => {
const {placeName,img,description,cost}=place;
 
  return (
    <>
      <Card className="col-md-3 g-5 mx-5">
        <Card.Img variant="top" src={img} style={
          {
            height:"250px"
            ,padding:"10px",borderRadius:"10px"
          }
        }/>
        <Card.Body>
          <Card.Title>{placeName}</Card.Title>
          <Card.Text>
           {description.slice(0,150)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Details</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Place;
