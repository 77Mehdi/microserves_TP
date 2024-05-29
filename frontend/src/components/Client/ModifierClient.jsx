import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditerClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({ nom: '', prenom: '', email: '' });
  const history = useNavigate();

  useEffect(() => {
    axios.get(`/api/v1/client/${id}`)
      .then(response => setClient(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/v1/client/update/${id}`, client)
      .then(() => history.push(`/clients/${id}`))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Editer Client</h1>
        <div className="dv">
          <label htmlFor="nom" className="block mb-1">Nom :</label>
          <input type="text" name="nom" value={client.nom} onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" placeholder="Nom" />
        </div>
        <div className="dv">
          <label htmlFor="prenom" className="block mb-1">Prenom :</label>
          <input type="text" name="prenom" value={client.prenom} onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" placeholder="Prenom" />
        </div>
        <div className="dv">
          <label htmlFor="email" className="block mb-1">Email :</label>
          <input type="email" name="email" value={client.email} onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" placeholder="Email" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">Enregistrer</button>
      </form>
    </div>
  );
};

export default EditerClient;
