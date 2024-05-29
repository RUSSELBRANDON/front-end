import React, { useState } from 'react';
import './NiveauForm.css';

function NiveauForm() {
  const [niveau, setNiveau] = useState('');
  const [filieres, setFilieres] = useState([]);
  const [selectedFiliere, setSelectedFiliere] = useState('');
  const [matieres, setMatieres] = useState([]);
  const [selectedMatiere, setSelectedMatiere] = useState('');

  const handleNiveauChange = (e) => {
    setNiveau(e.target.value);
  };

  const handleFiliereChange = (e) => {
    setSelectedFiliere(e.target.value);
  };

  const handleFiliereAdd = () => {
    if (selectedFiliere && !filieres.includes(selectedFiliere)) {
      setFilieres([...filieres, selectedFiliere]);
      setSelectedFiliere('');
    }
  };

  const handleMatiereChange = (e) => {
    setSelectedMatiere(e.target.value);
  };

  const handleMatiereAdd = () => {
    if (selectedMatiere && !matieres.includes(selectedMatiere)) {
      setMatieres([...matieres, selectedMatiere]);
      setSelectedMatiere('');
    }
  };

  return (
    <div className="niveau-form">
      <h2>Ajouter un Niveau</h2>
      <div className="input-group">
        <label htmlFor="niveau">Niveau :</label>
        <input
          type="text"
          id="niveau"
          value={niveau}
          onChange={handleNiveauChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="filiere">Filières :</label>
        <select
          id="filiere"
          value={selectedFiliere}
          onChange={handleFiliereChange}
        >
          <option value=""></option>
          <option value="Informatique">Informatique</option>
          <option value="Mathématiques">Mathématiques</option>
          <option value="Physique">Physique</option>
          <option value="chimie">chimie</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
        <button type="button" onClick={handleFiliereAdd}>Ajouter Filière</button>
        <ul>
          {filieres.map((filiere, index) => (
            <li key={index}>{filiere}</li>
          ))}
        </ul>
      </div>
      <div className="input-group">
        <label htmlFor="matiere">Matieres :</label>
        <select
          id="matiere"
          value={selectedMatiere}
          onChange={handleMatiereChange}
        >
          <option value=""></option>
          <option value="Matiere1">Matiere 1</option>
          <option value="Matiere2">Matiere 2</option>
          <option value="Matiere3">Matiere 3</option>
          <option value="Matiere4">Matiere 4</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
        <button type="button" onClick={handleMatiereAdd}>Ajouter Matiere</button>
        <ul>
          {matieres.map((matiere, index) => (
            <li key={index}>{matiere}</li>
          ))}
        </ul> 
      </div>
      
    </div>
  );
}

export default NiveauForm;
