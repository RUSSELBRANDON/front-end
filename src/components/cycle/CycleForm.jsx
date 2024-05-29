import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CycleForm = ({ handleCycleAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [filiere, setFiliere] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCycle = { name, filiere };
    handleCycleAdd(newCycle);
    navigate('/cycle/cycle1');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Ajouter un nouveau cycle</h1> <br />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem',color:'black' }}>
          <label htmlFor="name">Nom du cycle :</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '1rem',color:'black'}}>
          <label htmlFor="filiere">Filière :</label>
          <select
            id="filiere"
            required
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          >
            <option value="">Choisir une filière</option>
            <option value="filiere1">Filière 1</option>
            <option value="filiere2">Filière 2</option>
            {/* Ajoutez ici d'autres options si nécessaire */}
          </select>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Enregistrer</button>
      </form>
    </div>
  );
};

export default CycleForm;
