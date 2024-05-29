import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <div className="scroll-text">
        <h1>Bienvenue sur l'application de gestion des emplois de temps</h1>
      </div>
      <div className="cards-container">
        <Link to="/enseignant/RegisterTeachers" className="card">
          <h2>Enregistrer Enseignants</h2>
          <p>Ajouter de nouveaux enseignants à l'application.</p>
        </Link>
        <Link to="/cours/RegisterClasses" className="card">
          <h2>Enregistrer Séances de Cours</h2>
          <p>Ajouter de nouvelles séances de cours.</p>
        </Link>
        <Link to="/requetes/ManageRequests" className="card">
          <h2>Gestion des Requêtes</h2>
          <p>Gérer les requêtes des utilisateurs.</p>
        </Link>
      </div>
      <div className="cards-container">
        <Link to="/cycle/cycle1" className="card">
          <h2>Cycle</h2>
          <p>Gérer les cycles.</p>
          </Link>
          
    
        <Link to="/filiere/FiliereForm" className="card">
          <h2>Filière</h2>
          <p>Gérer les filières disponibles.</p>
        </Link>
        <Link to="/niveau/NiveauForm" className="card">
          <h2>Niveau</h2>
          <p>Gérer les niveaux d'étude.</p>
        </Link>
        <Link to="/matiere/Matiere" className="card"> {/* Nouveau lien pour les matières */}
          <h2>Matières</h2>
          <p>Gérer les matières disponibles.</p>
        </Link>
        <Link to="/classes/ClasseForm" className="card"> {/* Nouveau lien pour les classes */}
          <h2>Classes</h2>
          <p>Gérer les classes disponibles.</p>
        </Link>
      
      </div>
    </div>
  );
}

export default Home;
