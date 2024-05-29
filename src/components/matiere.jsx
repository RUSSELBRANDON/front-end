import React, { useState } from 'react';
import './Matiere.css';

function Matiere() {
  const [matiere, setMatiere] = useState('');

  const niveauxDisponibles = ["Niveau 1", "Niveau 2", "Niveau 3"];
  const enseignantsDisponibles = ["Enseignant 1", "Enseignant 2", "Enseignant 3"];
  const coursDisponibles = ["Cours 1", "Cours 2", "Cours 3"];

  const handleMatiereChange = (e) => {
    setMatiere(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire
    console.log("Formulaire soumis :", matiere);
  };

  return (
    <div className="matiere-container">
      <h2>Gérer les Matières</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="matiere">Matière :</label>
          <input
            type="text"
            id="matiere"
            value={matiere}
            onChange={handleMatiereChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="niveau">Niveau :</label>
          <select id="niveau" >
            {niveauxDisponibles.map((niveau, index) => (
              <option key={index}>{niveau}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="enseignant">Enseignant :</label>
          <select id="enseignant" >
            {enseignantsDisponibles.map((enseignant, index) => (
              <option key={index}>{enseignant}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="cours">Cours :</label>
          <select id="cours">
            {coursDisponibles.map((cours, index) => (
              <option key={index}>{cours}</option>
            ))}
          </select>
        </div>
        <button type="submit">Enregistrer Matière</button>
      </form>
    </div>
  );
}

export default Matiere;
