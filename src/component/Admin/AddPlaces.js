import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import './admin.css'

const AddPlaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgURL, setImgURL] = useState(null);
    const [place, setPlace] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const { placeName, cost, description, img } = place || {};
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onSubmit = (data) => {
     
      const placeInfo = {
        ...data,
        img: imgURL || img,
        date: selectedDate.toLocaleDateString("en-US"),
      };
  
      axios
        .post(
          "https://powerful-dusk-92883.herokuapp.com/addPlaces",
          placeInfo
        )
        .then((res) => {
           
          if (res.data) {
            alert("Success!", "One new place added successfully", "success");
            reset();
          }
        })
        .catch((error) => {
        alert(error)
        });
    };
  
    const handleImgUpload = (event) => {
      
      setIsDisabled(true);
      const imgData = new FormData();
      imgData.set("key", "27b9ad8148808fb842b02c970d1956c1");
      imgData.append("image", event.target.files[0]);
      axios
        .post("https://api.imgbb.com/1/upload", imgData)
        .then((response) => {
       
  
          setImgURL(response.data.data.url);
          alert("Image successfully uploaded");
          setIsDisabled(false);
  
        })
        .catch((error) => {
            alert("Image successfully uploaded");
        });
    };
  return (
    <div className="container text-center my-5">
      <h2>For Admin</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="addPlaceForm">
      
      <Row className="justify-content-center px-4">
          <Form.Group as={Col} md={7}>
            <Form.Label style={{ fontWeight: "bold" }}>Place Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={placeName}
              {...register("placeName", { required: true })}
              placeholder="Your Name"
            />
          </Form.Group>
          <Form.Group as={Col} md={5}>
            <Form.Label style={{ fontWeight: "bold" }}>Cost</Form.Label>
            <Form.Control
              type="text"
              defaultValue={cost}
              {...register("cost", { required: true })}
              placeholder="cost"
            />
          </Form.Group>
          <Form.Group as={Col} md={7}>
            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
            <Form.Control
              style={{ height: "10rem" }}
              type="text"
              defaultValue={description}
              as="textarea"
              {...register("description", { required: true })}
              placeholder="Description"
            />
          </Form.Group>
          <Col md={5}>
            <Form.Label style={{ fontWeight: "bold", display: "block" }}>
              Add Sample Image
            </Form.Label>
            <Button
              as={"label"}
              htmlFor="upload"
              className="d-block p-2 uploadBtn"
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Image
            </Button>
            <Form.Control
              hidden="hidden"
              id="upload"
              type="file"
              onChange={handleImgUpload}
            />
          </Col>
        </Row>
        <div className="text-center mt-3">
          <Button
          
            type="submit"
            className="submitBtn"
            disabled={isDisabled}
          >
            Submit
          </Button>
        </div>
        </Form>
    </div>
  );
};

export default AddPlaces;
