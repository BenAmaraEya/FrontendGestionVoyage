import React from "react";
import './../Ticket/ticket.css'
const Ticket = ({ ticketInfo }) => {
  // Extract relevant ticket information
  const { name, cin, date, aller, arriver, seatNumber, Gate, date: ticketDate } = ticketInfo;

  return (
    <div className="ticket-container">
      <h3>Your Ticket Information</h3>
      <div className="ticket-details">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>CIN:</strong> {cin}
        </p>
        <p>
          <strong>Date of Reservation:</strong> {new Date(date).toLocaleString()}
        </p>
        <p>
          <strong>From:</strong> {aller}
        </p>
        <p>
          <strong>To:</strong> {arriver}
        </p>
        <p>
          <strong>Seat Number:</strong> {seatNumber}
        </p>
        <p>
          <strong>Gate:</strong> {Gate}
        </p>
        
      </div>
      <h4>Enjoy your trip!</h4>
    </div>
  );
};

export default Ticket;
