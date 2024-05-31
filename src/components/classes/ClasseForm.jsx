import React, { useState } from 'react';
import './ClasseForm.css';

const ClasseForm = () => {
  const [salle, setSalle] = useState('');
  const [cours, setCours] = useState([]);
  const [selectedCours, setSelectedCours] = useState('');
  const [classes, setClasses] = useState([]);

  const handleSalleChange = (e) => {
    setSalle(e.target.value);
  };

  const handleCoursChange = (e) => {
    setSelectedCours(e.target.value);
  };

  const handleCoursAdd = () => {
    if (selectedCours && !cours.includes(selectedCours)) {
      setCours([...cours, selectedCours]);
      setSelectedCours('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = { salle, cours };
    setClasses([...classes, newClass]);
    setSalle('');
    setCours([]);
  };

  return (
    <div className="classe-container">
      <div className="classe-form">
        <h2>Formulaire de Classe</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="salle">Salle :</label>
            <input type="text" id="salle" value={salle} onChange={handleSalleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="cours">Cours :</label>
            <select
              id="cours"
              value={selectedCours}
              onChange={handleCoursChange}
            >
              <option value=""></option>
              <option value="cours1">Cours 1</option>
              <option value="cours2">Cours 2</option>
              <option value="cours3">Cours 3</option>
              {/* Ajoutez d'autres options de cours selon vos besoins */}
            </select>
            <button type="button" onClick={handleCoursAdd}>Ajouter Cours</button>
            <ul>
              {cours.map((cours, index) => (
                <li key={index}>{cours}</li>
              ))}
            </ul>
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
      <div className="classe-table">
        <h2>Liste des Classes</h2>
        <table>
          <thead>
            <tr>
              <th>Salle</th>
              <th>Cours</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classe, index) => (
              <tr key={index}>
                <td>{classe.salle}</td>
                <td>{classe.cours.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClasseForm;
