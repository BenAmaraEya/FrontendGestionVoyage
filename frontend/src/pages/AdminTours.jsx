// Importez les éléments nécessaires de React et de useState
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import './../styles/admin.css'
const AdminTours = () => {
  const [vols, setVols] = useState([]);
  const [newVol, setNewVol] = useState({
    volNumber: '',
    datedepart: new Date(),
    dateretour: new Date(),
    classe: '',
    destination: {
      aller: '',
      arriver: '',
    },
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedVol, setUpdatedVol] = useState({
    _id: '',
    volNumber: '',
    datedepart: new Date(),
    dateretour: new Date(),
    classe: '',
    destination: {
      aller: '',
      arriver: '',
    },
  });

  useEffect(() => {
    // Fetch vols data from your backend
    axios.get('http://localhost:3006/vols')
      .then(response => {
        console.log(response.data);
        setVols(response.data.vols);
      })
      .catch(error => console.error('Error fetching vols:', error));
  }, []);

  const addVol = async () => {
    try {
      let response;

      if (isUpdating) {
        // Si la mise à jour, utilisez une requête PUT au lieu de POST
        response = await axios.put(`http://localhost:3006/vols/${updatedVol._id}`, {
          volNumber: updatedVol.volNumber,
          datedepart: updatedVol.datedepart,
          dateretour: updatedVol.dateretour,
          classe: updatedVol.classe,
          destination: {
            aller: updatedVol.destination.aller,
            arriver: updatedVol.destination.arriver,
          },
        });
      } else {
        // Si l'ajout, utilisez une requête POST
        response = await axios.post('http://localhost:3006/vols', {
          volNumber: newVol.volNumber,
          datedepart: newVol.datedepart,
          dateretour: newVol.dateretour,
          classe: newVol.classe,
          destination: {
            aller: newVol.aller,
            arriver: newVol.arriver,
          },
        });
      }
 
      // Mettez à jour la liste des vols
      const updatedVols = await axios.get('http://localhost:3006/vols');
      setVols(updatedVols.data.vols);

      // Réinitialisez le formulaire
      setNewVol({
        volNumber: '',
        datedepart: new Date(),
        dateretour: new Date(),
        classe: '',
        destination: {
          aller: '',
          arriver: '',
        },
      });

      setIsUpdating(false);
    } catch (error) {
      console.error('Error adding/updating vol:', error);
    }
  };

  const updateVol = (vol) => {
    setIsUpdating(true);
    setUpdatedVol({
      _id: vol._id,
      volNumber: vol.volNumber,
      datedepart: vol.datedepart,
      dateretour: vol.dateretour,
      classe: vol.classe,
      destination: {
        aller: vol.destination.aller,
        arriver: vol.destination.arriver,
      },
    });
  };

  const deleteVol = async (volId) => {
    try {
      // Supprimez le vol depuis le backend
      await axios.delete(`http://localhost:3006/vols/${volId}`);
      // Actualisez la liste des vols
      const updatedVols = await axios.get('http://localhost:3006/vols');
      setVols(updatedVols.data.vols);
    } catch (error) {
      console.error('Error deleting vol:', error);
    }
  };

  return (
    <div>
      <h1>Admin Tours - Manage Vols</h1>
      <h3>Ajouter Vol</h3>

      {/* Formulaire pour ajouter/mettre à jour un vol */}

      <form>
        <label>
          Vol Number:{" "}
          <input
            type="text"
            value={isUpdating ? updatedVol.volNumber : newVol.volNumber}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({ ...updatedVol, volNumber: e.target.value })
                : setNewVol({ ...newVol, volNumber: e.target.value })
            }
          />
        </label>
        <label>
          Classe:{" "}
          <input
            type="text"
            value={isUpdating ? updatedVol.classe : newVol.classe}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({ ...updatedVol, classe: e.target.value })
                : setNewVol({ ...newVol, classe: e.target.value })
            }
          />
        </label>
        <label>
          Date Depart:{" "}
          <input
            type="date"
            value={isUpdating ? updatedVol.datedepart : newVol.datedepart}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({
                    ...updatedVol,
                    datedepart: e.target.value,
                  })
                : setNewVol({
                    ...newVol,
                    datedepart: e.target.value,
                  })
            }
          />
        </label>
        <label>
          Date Retour:{" "}
          <input
            type="date"
            value={isUpdating ? updatedVol.dateretour : newVol.dateretour}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({
                    ...updatedVol,
                    dateretour: e.target.value,
                  })
                : setNewVol({
                    ...newVol,
                    dateretour: e.target.value,
                  })
            }
          />
        </label>
       
        <label>
          Aller:{" "}
          <input
            type="text"
            value={isUpdating ? updatedVol.destination.aller : newVol.aller}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({
                    ...updatedVol,
                     aller: e.target.value 
                  })
                : setNewVol({
                    ...newVol,
                     aller: e.target.value 
                  })
            }
          />
        </label>
        <label>
          Arriver:{" "}
          <input
            type="text"
            value={isUpdating ? updatedVol.destination.arriver : newVol.destination.arriver}
            onChange={(e) =>
              isUpdating
                ? setUpdatedVol({
                    ...updatedVol,
                    destination: { ...updatedVol.destination, arriver: e.target.value },
                  })
                : setNewVol({
                    ...newVol,
                    destination: { ...newVol.destination, arriver: e.target.value },
                  })
            }
          />
        </label>
        <button type="button" onClick={addVol}>
          {isUpdating ? "Update" : "Add"} Vol
        </button>
      </form>

      {/* Afficher les vols existants */}
      <div>
        <h3>Liste des Vols</h3>
        <table>
          <thead>
            <tr>
              <th>Vol Number</th>
              <th>Classe</th>
              <th>Date départ </th>
              <th>Date Retour</th>
              <th>Destination Aller</th>
              <th>Destination Arriver</th>
              <th> Gestion</th>
            </tr>
          </thead>
          <tbody>
            {vols.map((vol) => (
              <tr key={vol._id}>
                <td>{vol.volNumber}</td>
                <td>{vol.classe}</td>
                <td>{vol.datedepart}</td>
                <td>{vol.dateretour}</td>
                <td>{vol.destination && vol.destination.aller}</td>
                <td>{vol.destination && vol.destination.arriver}</td>
                <td className='action-buttons'>
  <Button className='update-btn' onClick={() => updateVol(vol)}>Update</Button>
  <Button className='delete-btn' onClick={() => deleteVol(vol._id)}>Delete</Button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTours;
