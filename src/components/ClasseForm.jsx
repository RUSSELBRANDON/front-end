import React, { useState } from 'react';

const ClasseForm = () => {
  const [salle, setSalle] = useState('');
  const [cours, setCours] = useState([]);

  // Gérer les changements dans les champs du formulaire
  const handleSalleChange = (e) => {
    setSalle(e.target.value);
  };

  const handleCoursChange = (e) => {
    const selectedCours = Array.from(e.target.selectedOptions, option => option.value);
    setCours(selectedCours);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici la logique d'enregistrement de la classe avec les données saisies
    console.log("Classe enregistrée :", { salle, cours });
  };

  return (
    <div>
      <h2>Formulaire de Classe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="salle">Salle :</label>
          <input type="text" id="salle" value={salle} onChange={handleSalleChange} />
        </div>
        <div>
          <label htmlFor="cours">Cours :</label>
          <select id="cours" multiple value={cours} onChange={handleCoursChange}>
            <option value="cours1">Cours 1</option>
            <option value="cours2">Cours 2</option>
            <option value="cours3">Cours 3</option>
            {/* Ajoutez d'autres options de cours selon vos besoins */}
          </select>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default ClasseForm;
