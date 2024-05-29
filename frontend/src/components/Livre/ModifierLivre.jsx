import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditerLivre = () => {
  const { id } = useParams();
  const [livre, setLivre] = useState({ titre: '', description: '', auteur: '' });
  const history = useNavigate();

  useEffect(() => {
    axios.get(`/api/v1/livre/${id}`)
      .then(response => setLivre(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = e => {
    setLivre({ ...livre, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/api/v1/livre/${id}`, livre)
      .then(() => history.push(`/livres/${id}`))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold mb-4">Editer Livre</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="titre" value={livre.titre} onChange={handleChange} className="mt-1 bg-gray-200 p-2 w-full border rounded" />
          <input type="text" name="description" value={livre.description} onChange={handleChange} className="mt-1   bg-gray-200 p-2 w-full border rounded" />
          <input type="text" name="auteur" value={livre.auteur} onChange={handleChange} className="mt-1 p-2 w-full  bg-gray-200 border rounded" />
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};

export default EditerLivre;
