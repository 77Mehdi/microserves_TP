import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Livres = () => {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/v1/livre')
      .then(response => setLivres(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/api/v1/livre/delete/${id}`)
      .then(() => {
        setLivres(livres.filter(livre => livre._id !== id));
      })
      .catch(error => {
        console.error('Error deleting livre:', error);
      });
  };

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className='min-w-full bg-white border border-gray-300'>
          <thead className="bg-gray-200">
            <tr>
              <th colSpan="3" className="py-2 px-4 text-left text-lg font-bold">Liste des Livres</th>
              <th className="py-2 px-4 text-right">
                <Link to="/livres/nouveau" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ajouter un Nouveau Livre
                </Link>
              </th>
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
            {livres.map(livre => (
              <tr key={livre._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{livre.Code}</td>
                <td className="border px-4 py-2">{livre.Titre}</td>
                <td className="border px-4 py-2">{livre.Description}</td>
                <td className="border px-4 py-2">{livre.Auteur}</td>
                <td className="border px-4 py-2">
                  <Link to={`/livres/${livre._id}/editer`}>
                    <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">Modifier</button>
                  </Link>
                  <button onClick={() => handleDelete(livre._id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 ml-2 rounded">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Livres;
