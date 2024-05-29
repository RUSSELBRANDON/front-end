import React, { useState } from 'react';
import './FiliereForm.css';

function FiliereForm() {
  const [nom, setNom] = useState('');
  const [anneeScolaire, setAnneeScolaire] = useState('');
  const [nombrePlaces, setNombrePlaces] = useState('');
  const [cycle, setCycle] = useState('');
  const [niveaux, setNiveaux] = useState([]);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleAnneeScolaireChange = (e) => {
    setAnneeScolaire(e.target.value);
  };

  const handleNombrePlacesChange = (e) => {
    setNombrePlaces(e.target.value);
  };

 
  const handleCycleChange = (e) => {
    setCycle(e.target.value);
  };

  const handleNiveauxChange = (e) => {
    const selectedNiveaux = Array.from(e.target.selectedOptions, option => option.value);
    setNiveaux(selectedNiveaux);
  };

  const handleEnregistrer = () => {
    // Ajoutez ici la logique pour enregistrer les données
    // Par exemple, vous pouvez appeler une fonction de sauvegarde avec les données actuelles du formulaire
    console.log("Données à enregistrer :", nom, anneeScolaire, nombrePlaces, cycle, niveaux);
  };
 

  return (
    <div className="filiere-form">
      <h2>Ajouter une Filière</h2>
      <div className="input-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={handleNomChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="anneeScolaire">Année Scolaire :</label>
        <input
          type="text"
          id="anneeScolaire"
          value={anneeScolaire}
          onChange={handleAnneeScolaireChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="nombrePlaces">Nombre de Places :</label>
        <input
          type="number"
          id="nombrePlaces"
          value={nombrePlaces}
          onChange={handleNombrePlacesChange}
        />
      </div>
      <div>
          <label htmlFor="cycle">Cycle :</label>
          <select id="cycle" value={cycle} onChange={handleCycleChange}>
            <option value="cycle1">Cycle 1</option>
            <option value="cycle2">Cycle 2</option>
            {/* Ajoutez d'autres options de cycle selon vos besoins */}
          </select>
        </div>
        <div>
          <label htmlFor="niveaux">Niveaux :</label>
          <select id="niveaux"  onChange={handleNiveauxChange}>
            <option value="niveau1">Niveau 1</option>
            <option value="niveau2">Niveau 2</option>
            {/* Ajoutez d'autres options de niveaux selon vos besoins */}
          </select>
        </div>
      <button type="button" onClick={handleEnregistrer}>Enregistrer</button>
    </div>
  );
}

export default FiliereForm;
