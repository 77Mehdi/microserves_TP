import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/client')
      .then(response => setClients(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/v1/client/delete/${id}`)
      .then(() => {
        setClients(clients.filter(client => client._id !== id));
      })
      .catch(error => {
        console.error('Error deleting client:', error);
      });
  };

  return (
    <div className=" min-h-screen bg-gray-100">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Prenom</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{client.nom}</td>
                <td className="border px-4 py-2">{client.prenom}</td>
                <td className="border px-4 py-2">{client.email}</td>
                <td className="border px-4 py-2">
                  <Link to={`/clients/${client._id}/editer`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">Modifier</button>
                  </Link>
                  <button onClick={() => handleDelete(client._id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          <Link to="/clients/nouveau">Ajouter un Nouveau Client</Link>
        </button>
      </div>
    </div>
  );
};

export default Clients;
