import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ClientDetail = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/client/${id}`)
      .then(response => setClient(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/v1/client/delete/${id}`)
      .then(() => {
        setClient(client.filter(client => client._id !== id));
      })
      .catch(error => {
        console.error('Error deleting client:', error);
      });
  };

  if (!client) return <div className="text-center mt-8">Chargement...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th colSpan="3" className="py-2"><h2 className="text-xl font-bold">Details Du Clients</h2></th>
            </tr>
            <tr>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Prenom</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr key={client._id}>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetail;
