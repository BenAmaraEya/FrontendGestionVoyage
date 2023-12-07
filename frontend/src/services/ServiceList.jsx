import React from "react";
import ServiceCard from "./ServiceCard";
import { Row, Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "Discover your destination's weather with our integrated weather calculator, providing detailed forecasts to help you plan your journey with peace of mind"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour guide",
        desc: "Your Trusted Companion for the Ultimate Guided Tours and Unparalleled Travel Experiences"
    },
    {
        imgUrl: customizationImg,
        title: "Customize your Trip",
        desc: ": Customize Your Trip to Create the Perfect Journey Tailored Just for You"
    }
]

const ServiceList = () => {
    return (
        <Row>
            {serviceData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))
            }
        </Row>
    );
};

export default ServiceList;
