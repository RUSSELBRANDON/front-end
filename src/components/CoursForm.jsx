import React, { useState } from 'react';
import './CoursForm.css';

function CoursForm() {
  const [titre, setTitre] = useState('');
  const [jour, setJour] = useState('');
  const [enseignant, setEnseignant] = useState('');
  const [salle, setSalle] = useState('');
  const [matiere, setMatiere] = useState('');

  const joursDisponibles = [
    "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"
  ];

  const handleTitreChange = (e) => {
    setTitre(e.target.value);
  };

  const handleJourChange = (e) => {
    setJour(e.target.value);
  };

  const handleEnseignantChange = (e) => {
    setEnseignant(e.target.value);
  };

  const handleSalleChange = (e) => {
    setSalle(e.target.value);
  };

  const handleMatiereChange = (e) => {
    setMatiere(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire
    console.log("Formulaire soumis :", { titre, jour, enseignant, salle, matiere });
  };

  return (
    <div className="cours-form">
      <h2>Ajouter un Cours</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="titre">Titre :</label>
          <input
            type="text"
            id="titre"
            value={titre}
            onChange={handleTitreChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="jour">Jour :</label>
          <select
            id="jour"
            value={jour}
            onChange={handleJourChange}
            required
          >
            <option value="">Sélectionner un jour</option>
            {joursDisponibles.map((jour, index) => (
              <option key={index} value={jour}>{jour}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="enseignant">Enseignant :</label>
          <input
            type="text"
            id="enseignant"
            value={enseignant}
            onChange={handleEnseignantChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="salle">Salle :</label>
          <input
            type="text"
            id="salle"
            value={salle}
            onChange={handleSalleChange}
            required
          />
        </div>
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
        <button type="submit">Enregistrer Cours</button>
      </form>
    </div>
  );
}

export default CoursForm;
