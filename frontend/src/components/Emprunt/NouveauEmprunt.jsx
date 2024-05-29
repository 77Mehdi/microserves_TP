// NouveauEmprunt.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NouveauEmprunt = () => {
  const [emprunt, setEmprunt] = useState({ code_livre: '', nom: '' });
  const history = useNavigate();

  const handleChange = e => {
    setEmprunt({ ...emprunt, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3003/api/v1/emprunt/add', emprunt)
      .then(() => {
        history.push('/emprunts');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">Ajouter un Nouvel Emprunt</h1>
        <div className="mb-4">
          <label htmlFor="code_livre" className="block text-gray-700">Code Livre :</label>
          <input 
            type="text" 
            name="code_livre" 
            placeholder="Code Livre" 
            onChange={handleChange} 
            className="mt-1 bg-gray-200 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-gray-700">Nom Client :</label>
          <input 
            type="text" 
            name="nom" 
            placeholder="Nom Client" 
            onChange={handleChange} 
            className="mt-1 p-2 w-full  bg-gray-200  rounded border "
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Ajouter</button>
      </form>
    </div>
  );
};

export default NouveauEmprunt;
