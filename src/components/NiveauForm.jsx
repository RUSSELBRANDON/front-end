import React, { useState } from 'react';
import './NiveauForm.css';

function NiveauForm() {
  const [niveau, setNiveau] = useState('');
  const [filieres, setFilieres] = useState([]);
  const [selectedFiliere, setSelectedFiliere] = useState('');
  const [matieres, setMatieres] = useState([]);
  const [selectedMatiere, setSelectedMatiere] = useState('');
  const [niveaux, setNiveaux] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNiveau = { niveau, filieres, matieres };
    setNiveaux([...niveaux, newNiveau]);
    setNiveau('');
    setFilieres([]);
    setMatieres([]);
  };

  return (
    <div className="niveau-form-container">
      <form className="niveau-form" onSubmit={handleSubmit}>
        <h2>Ajouter un Niveau</h2>
        <div className="input-group">
          <label htmlFor="niveau">Niveau :</label>
          <input
            type="text"
            id="niveau"
            value={niveau}
            onChange={handleNiveauChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="filiere">Filières :</label>
          <select
            id="filiere"
            value={selectedFiliere}
            onChange={handleFiliereChange}
            required
          >
            <option value=""></option>
            <option value="Informatique">Informatique</option>
            <option value="Mathématiques">Mathématiques</option>
            <option value="Physique">Physique</option>
            <option value="Chimie">Chimie</option>
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
          <label htmlFor="matiere">Matières :</label>
          <select
            id="matiere"
            value={selectedMatiere}
            onChange={handleMatiereChange}
            required
          >
            <option value=""></option>
            <option value="Matiere1">Matière 1</option>
            <option value="Matiere2">Matière 2</option>
            <option value="Matiere3">Matière 3</option>
            <option value="Matiere4">Matière 4</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
          <button type="button" onClick={handleMatiereAdd}>Ajouter Matière</button>
          <ul>
            {matieres.map((matiere, index) => (
              <li key={index}>{matiere}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      <div className="niveau-table">
        <h2>Niveaux Enregistrés</h2>
        <table>
          <thead>
            <tr>
              <th>Niveau</th>
              <th>Filières</th>
              <th>Matières</th>
            </tr>
          </thead>
          <tbody>
            {niveaux.map((niveau, index) => (
              <tr key={index}>
                <td>{niveau.niveau}</td>
                <td>{niveau.filieres.join(', ')}</td>
                <td>{niveau.matieres.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NiveauForm;
