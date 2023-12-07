import React, { useState } from "react";
import '../styles/tour-deatls.css'
import { Navigate, useParams } from "react-router-dom"; // Assuming you are using React Router
import tours from "../assets/data/tours";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Booking from "../components/Booking/Booking";


const calculateAvgRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return { totalRating: 0, avgRating: 0 };
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = totalRating / reviews.length;

  return { totalRating, avgRating };
};

const TourDetails = () => {
  
  const { tourId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the formData to a backend API, update state, etc.
    console.log("Form submitted:", formData);
  };

  const tour = tours.find((tour) => tour.id === tourId);
const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize}= tour
  if (!tour) {
    return <div>Tour not found</div>;
  }
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <Container>
      <Row>
        <Col lg="8">
          <div className="tour__content">
          <img src={tour.photo} alt={tour.title}  />
        
        
          <div className="tour-info">
            <h2>{tour.title}</h2>
           <div className="d-felx align-items-center
           gap-5">
            <span className="tour__rating
                d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating=== 0 ? null : avgRating}
                    {totalRating === 0 ? ('Not rated'): (
                    <span> {tour.avgRating}({reviews.length}) </span>
                    )}
                </span>
                
           </div>
           <div className="tour__extra-details">
           <span>
                <i class="ri-map-pin-line">{city}</i>
                </span>
                <span>
                <i class="ri-money-dollar-circle-line">${price} per person</i>
                </span>
                <span>
                <i class="ri-group-line">{maxGroupSize}</i>
                </span>
           </div>
           <h5>Description</h5>
           <p>{desc}</p>
            </div>
          </div>
       </Col>
       <Col lg='4'>
        <Booking tour={tour} avgRating={avgRating}/>
          </Col>
      </Row>
    </Container>
  );
};

export default TourDetails;


