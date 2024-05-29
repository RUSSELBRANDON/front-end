import React, { useState } from 'react';
import './ClasseForm.css';

const ClasseForm = () => {
  const [salle, setSalle] = useState('');
  const [cours, setCours] = useState([]);

  const handleSalleChange = (e) => {
    setSalle(e.target.value);
  };

  const handleCoursChange = (e) => {
    const selectedCours = Array.from(e.target.selectedOptions, option => option.value);
    setCours(selectedCours);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Classe enregistrée :", { salle, cours });
  };

  return (
    <div className="classe-form-container">
      <h2 className="classe-form-title">Formulaire de Classe</h2>
      <form onSubmit={handleSubmit} className="classe-form">
        <div className="classe-form-group">
          <label htmlFor="salle" className="classe-form-label">Salle :</label>
          <input
            type="text"
            id="salle"
            value={salle}
            onChange={handleSalleChange}
            className="classe-form-input"
          />
        </div>
        <div className="classe-form-group">
          <label htmlFor="cours" className="classe-form-label">Cours :</label>
          <select
            id="cours"
            multiple
            value={cours}
            onChange={handleCoursChange}
            className="classe-form-select"
          >
            <option value="cours1">Cours 1</option>
            <option value="cours2">Cours 2</option>
            <option value="cours3">Cours 3</option>
          </select>
        </div>
        <button type="submit" className="classe-form-button">Enregistrer</button>
      </form>
    </div>
  );
};

export default ClasseForm;
