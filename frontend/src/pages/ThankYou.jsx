import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/thankyou.css";
import { Link, useLocation } from "react-router-dom";
import Ticket from "./../components/Ticket/Ticket"; // Import the Ticket component

const ThankYou = () => {
  // Utilisez le hook useLocation pour accéder à l'état passé depuis le composant Booking
  const location = useLocation();
  const ticketInfo = location.state && location.state.ticketInfo;

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your Tour is booked</h3>

              {/* Vérifiez si ticketInfo existe avant de le passer comme prop */}
              {ticketInfo && <Ticket ticketInfo={ticketInfo} />}

              <Button className="btn primary__btn w-25">
                <Link to={"/home"}>Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
