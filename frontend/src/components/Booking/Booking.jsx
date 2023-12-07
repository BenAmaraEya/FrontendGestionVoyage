import React, { useState } from "react";
import { Form, FormGroup, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = ({ tour, avgRating }) => {
  const { price } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    cin: '',
    date: '',
    aller: '',
    arriver: '',
  });
  const [ticketInfo, setTicketInfo] = useState(null);  // Ajout de l'état ticketInfo

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationResponse = await axios.post('http://localhost:3006/reservations', credentials);
      const ticketResponse = await axios.get('http://localhost:3006/tickets');

      console.log('Réservation et billet effectués avec succès!', ticketResponse.data);

      // Définissez les données du ticket
      const requestData = credentials;  // Utilisation des données de réservation
      const ticketInfo = {
        name: requestData.name,
        cin: requestData.cin,
        date: requestData.date,
        aller: requestData.aller,
        arriver: requestData.arriver,
        seatNumber: "A123", // Remplacez cela par la vraie donnée du siège
        Gate: "Gate1", // Remplacez cela par la vraie donnée de la porte
        date: Date.now(),
        // ... autres champs de ticket
      };

      // Afficher le composant Ticket avec les données du ticket
      setTicketInfo(ticketInfo);
      navigate('/thank-you', { state: { ticketInfo } });  // Redirection vers la page de remerciement
    } catch (error) {
      console.error('Erreur lors de la réservation ou de la création du billet:', error);
      // Gérer les erreurs, afficher éventuellement un message à l'utilisateur
    }
  };

  return (
    <div className="booking-container">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          $ {price} <span>/ per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-s-fill" style={{ color: "var(--secondary-color)" }}></i>
          {avgRating === 0 ? null : avgRating}
        </span>
      </div>
      <div className="booking__form">
        <h5>Informations</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
          <FormGroup>
            <input type="text" placeholder="Full Name" id="name" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="CIN" id="cin" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="date" placeholder="Date" id="date" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="From" id="aller" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="To" id="arriver" required onChange={handleChange} />
          </FormGroup>
          <Button className="btn primary__btn" type="submit">Book Now</Button>
        </Form>
      </div>
    </div>
  );
};

export default Booking;
