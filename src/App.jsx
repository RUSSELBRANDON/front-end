import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RegisterTeachers from './components/enseignant/RegisterTeachers';
import RegisterClasses from './components/cours/RegisterClasses';
import ManageRequests from './components/requetes/ManageRequests';
import About from './components/About';
import Contact from './components/Contact';
import CycleForm from './components/cycle/CycleForm';
import CycleTable from './components/cycle/cycle1';
import NiveauForm from './components/niveau/NiveauForm';
import Matiere from './components/matiere/matiere';

import FiliereForm from './components/filiere/FiliereForm';
import ClasseForm from './components/classes/ClasseForm';




import './App.css';

function App() {
  const [cycles, setCycles] = useState([]);

  const handleCycleAdd = (newCycle) => {
    setCycles([...cycles, newCycle]);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <h1>Gestion des Emplois de Temps</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li className="dropdown">
              <span>Pages</span>
              <div className="dropdown-content">
                <Link to="/enseignant/RegisterTeachers">Enregistrer Enseignants</Link>
                <Link to="/cours/RegisterClasses">Enregistrer Séances de Cours</Link>
                <Link to="/requetes/ManageRequests">Gestion des Requêtes</Link>
                <Link to="/cycle/cycle1">Gestion des Cycles</Link>
              </div>
            </li>
            <li><Link to="/contact">Contactez-nous</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/enseignant/RegisterTeachers" element={<RegisterTeachers />} />
            <Route path="/cours/RegisterClasses" element={<RegisterClasses />} />
            <Route path="/requetes/ManageRequests" element={<ManageRequests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cycle/CycleForm" element={<CycleForm handleCycleAdd={handleCycleAdd} />} />
            <Route path="/cycle/cycle1" element={<CycleTable data={cycles} />} />
            <Route path="/niveau/NiveauForm" element={<NiveauForm />} />
            <Route path="/matiere/Matiere" element={<Matiere/>} />
            
            <Route path="/filiere/FiliereForm" element={<FiliereForm/>} />
            <Route path="/classes/ClasseForm" element={<ClasseForm />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;