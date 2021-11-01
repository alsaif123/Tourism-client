import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Place from "./Place";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getPlaces")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container py-5  text-center">
      <h2>Places you can visit</h2>
      <div className="row m-3">
        {places.length !== 0 ? (
          <>
            {places.map((place) => (
              <Place place={place} key={place._id} />
            ))}
          </>
        ) : (
          <div className="container spinner d-flex justify-content-center align-items">
            <img
              src="https://i.ibb.co/hfnBb2k/62981-loader.gif"
              alt="spinner"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Places;
