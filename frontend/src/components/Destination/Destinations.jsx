import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './destinations.css'

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destination data from your backend
    axios.get('http://localhost:3006/destination')
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <div>
      <h2>Destinations</h2>
      <table className='destination-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Aller</th>
            <th>Arriver</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map(destination => (
            <tr key={destination._id}>
              <td>{destination._id}</td>
              <td>{destination.aller}</td>
              <td>{destination.arriver}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Destination;
