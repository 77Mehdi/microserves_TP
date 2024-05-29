import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const LivreDetail = () => {
  const { id } = useParams();
  const [livre, setLivre] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/api/v1/livre/${id}`)
      .then(response => setLivre(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/api/v1/livre/delete/${id}`)
      .then(() => {
        // Handle deletion from UI if needed
      })
      .catch(error => {
        console.error('Error deleting livre:', error);
      });
  };

  if (!livre) return <div className="text-center mt-4">Chargement...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="details">
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <th colSpan="5" className="text-lg font-bold">Détails du Livre</th>
              </tr>
              <tr>
                <th className="px-4 py-2">Code</th>
                <th className="px-4 py-2">Titre</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Auteur</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr key={livre._id}>
                <td className="border px-4 py-2">{livre.Code}</td>
                <td className="border px-4 py-2">{livre.Titre}</td>
                <td className="border px-4 py-2">{livre.Description}</td>
                <td className="border px-4 py-2">{livre.Auteur}</td>
                <td className="border px-4 py-2">
                  <Link to={`/livres/${livre._id}/editer`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">Modifier</button>
                  </Link>
                  <button onClick={() => handleDelete(livre._id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LivreDetail;
