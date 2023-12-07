import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vols = () => {
  const [vols, setVols] = useState([]);

  useEffect(() => {
    // Fetch vols data from your backend
    axios.get('http://localhost:3006/vols')
      .then(response => {
        console.log(response.data); // Log the API response
        setVols(response.data);
      })
      .catch(error => console.error('Error fetching vols:', error));
  }, [])

  return (
    <div>
      <h2>Vols</h2>
      <ul>
        {Array.isArray(vols) && vols.length > 0 ? (
          vols.map((vol) => (
            <li key={vol._id}>
              <p>Vol Number: {vol.volNumber}</p>
              <p>Date Depart: {vol.datedepart}</p>
              <p>Date Retour: {vol.dateretour}</p>
              <p>Classe: {vol.classe}</p>
              <p>Aller: {vol.destination.aller}</p>
              <p>Arriver: {vol.destination.arriver}</p>
            </li>
          ))
        ) : (
          <p>No vols available</p>
        )}
      </ul>
    </div>
  );
};

export default Vols;
