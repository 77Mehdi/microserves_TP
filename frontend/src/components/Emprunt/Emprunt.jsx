import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Emprunts = () => {
  const [emprunts, setEmprunt] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/api/v1/emprunt')
      .then(response => setEmprunt(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th colSpan="3" className=' text-red-900 px-4 py-2 text-left text-xl font-bold'>Liste des emprunts</th>
              <th className='px-4 py-2 text-right'>
                <Link to="/emprunts/nouveau" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Ajouter un Nouveau Emprunt
                </Link>
              </th>
            </tr>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 border-b'>Code Livre</th>
              <th className='px-4 py-2 border-b'>Nom Client</th>
              <th className='px-4 py-2 border-b'>Date d'Emprunt</th>
              <th className='px-4 py-2 border-b'>Date de Retour</th>
            </tr>
          </thead>
          <tbody>
            {emprunts.map(emprunt => (
              <tr key={emprunt.id} className='hover:bg-gray-50'>
                <td className='px-4 py-2 border-b'>{emprunt.code_client}</td>
                <td className='px-4 py-2 border-b'>{emprunt.nom}</td>
                <td className='px-4 py-2 border-b'>{emprunt.dateEmprunt}</td>
                <td className='px-4 py-2 border-b'>{emprunt.dateRetour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Emprunts;
