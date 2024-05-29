import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NouveauLivre = () => {
  const [livre, setLivre] = useState({ Code: '', Titre: '', Description: '', Auteur: '' });
  const history = useNavigate();

  const handleChange = e => {
    setLivre({ ...livre, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3002/api/v1/livre/livre', livre)
      .then(() => {
        history.push('/livres');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Ajouter un Nouveau Livre</h1>
        <div className="mb-4">
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code :</label>
          <input type="text" name="Code" placeholder="Code" onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre :</label>
          <input type="text" name="Titre" placeholder="Titre" onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description :</label>
          <input type="text" name="Description" placeholder="Description" onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" />
        </div>
        <div className="mb-6">
          <label htmlFor="auteur" className="block text-sm font-medium text-gray-700">Auteur :</label>
          <input type="text" name="Auteur" placeholder="Auteur" onChange={handleChange} className="mt-1 p-2 w-full bg-gray-200 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Ajouter</button>
      </form>
    </div>
  );
};

export default NouveauLivre;
