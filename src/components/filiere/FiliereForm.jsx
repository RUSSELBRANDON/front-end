import React, { useState } from 'react';
import './FiliereForm.css';

function FiliereForm() {
  const [nom, setNom] = useState('');
  const [anneeScolaire, setAnneeScolaire] = useState('');
  const [nombrePlaces, setNombrePlaces] = useState('');
  const [cycles, setCycles] = useState([]); // 'cycles' au lieu de 'cycle' pour stocker plusieurs cycles sélectionnés
  const [niveaux, setNiveaux] = useState([]); // 'niveaux' au lieu de 'niveau' pour stocker plusieurs niveaux sélectionnés

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleCycleChange = (e) => {
    const selectedCycles = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCycles(selectedCycles);
  };

  const handleNiveauxChange = (e) => {
    const selectedNiveaux = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setNiveaux(selectedNiveaux);
  };

  const handleAnneeScolaireChange = (e) => {
    setAnneeScolaire(e.target.value);
  };

  const handleNombrePlacesChange = (e) => {
    setNombrePlaces(e.target.value);
  };

  const handleEnregistrer = () => {
    // Ajoutez ici la logique pour enregistrer les données
    // Par exemple, vous pouvez appeler une fonction de sauvegarde avec les données actuelles du formulaire
    console.log(
      "Données à enregistrer :",
      nom,
      anneeScolaire,
      nombrePlaces,
      cycles,
      niveaux
    );
  };

  return (
    <div className="filiere-form">
      <h2>Ajouter une Filière</h2>
      <div className="input-group1">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={handleNomChange}
        />
      </div>
      <div className="input-group1">
        <label htmlFor="anneeScolaire">Année Scolaire :</label>
        <input
          type="text"
          id="anneeScolaire"
          value={anneeScolaire}
          onChange={handleAnneeScolaireChange}
        />
      </div>
      <div className="input-group1">
        <label htmlFor="nombrePlaces">Nombre de Places :</label>
        <input
          type="number"
          id="nombrePlaces"
          value={nombrePlaces}
          onChange={handleNombrePlacesChange}
        />
      </div>
      <div>
        <label>Cycle :</label>
        <div className="select-wrapper">
          <select multiple value={cycles} onChange={handleCycleChange}>
            <option value="cycle1">Cycle 1</option>
            <option value="cycle2">Cycle 2</option>
            {/* Ajoutez d'autres options de cycle selon vos besoins */}
          </select>
          <div className="select-arrow">&#x25BC;</div>
        </div>
      </div>
      <div>
        <label>Niveaux :</label>
        <div className="select-wrapper">
          <select multiple value={niveaux} onChange={handleNiveauxChange}>
            <option value="niveau1">Niveau 1</option>
            <option value="niveau2">Niveau 2</option>
            {/* Ajoutez d'autres options de niveaux selon vos besoins */}
          </select>
          <div className="select-arrow">&#x25BC;</div>
        </div>
      </div>
      <button type="button" onClick={handleEnregistrer}>Enregistrer</button>
    </div>
  );
}

export default FiliereForm;
