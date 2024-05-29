import React, { useState } from 'react';
import './CoursForm.css';

function RegisterClasses() {
  const [values, setValues] = useState({ titre: '', jour: '', enseignant: '', salle: '', matiere: '' });
  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { ...values };
    setCourses([...courses, newCourse]);
    setValues({ titre: '', jour: '', enseignant: '', salle: '', matiere: '' });
  };

  return (
    <div className="cour-form">
      <h2>Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titre">Titre:</label>
          <input type="text" id="titre" name="titre" value={values.titre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="jour">Jour:</label>
          <input type="text" id="jour" name="jour" value={values.jour} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="enseignant">Enseignant:</label>
          <select id="enseignant" name="enseignant" value={values.enseignant} onChange={handleChange} required>
            <option value="">Sélectionner un enseignant</option>
            {/* Remplacez les options ci-dessous par vos options réelles */}
            <option value="enseignant1">Enseignant 1</option>
            <option value="enseignant2">Enseignant 2</option>
            <option value="enseignant3">Enseignant 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salle">Salle:</label>
          <select id="salle" name="salle" value={values.salle} onChange={handleChange} required>
            <option value="">Sélectionner une salle</option>
            {/* Remplacez les options ci-dessous par vos options réelles */}
            <option value="salle1">Salle 1</option>
            <option value="salle2">Salle 2</option>
            <option value="salle3">Salle 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="matiere">Matière:</label>
          <select id="matiere" name="matiere" value={values.matiere} onChange={handleChange} required>
            <option value="">Sélectionner une matière</option>
            {/* Remplacez les options ci-dessous par vos options réelles */}
            <option value="matiere1">Matière 1</option>
            <option value="matiere2">Matière 2</option>
            <option value="matiere3">Matière 3</option>
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
      {courses.length > 0 && (
        <div className="courses-list">
          <h2>Liste des cours</h2>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Jour</th>
                <th>Enseignant</th>
                <th>Salle</th>
                <th>Matière</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.titre}</td>
                  <td>{course.jour}</td>
                  <td>{course.enseignant}</td>
                  <td>{course.salle}</td>
                  <td>{course.matiere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RegisterClasses;
