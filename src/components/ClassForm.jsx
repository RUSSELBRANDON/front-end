import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassroomForm = ({ handleClassroomAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClassroom = { name, course };
    handleClassroomAdd(newClassroom);
    navigate('/classes'); // Modifiez cette ligne pour rediriger vers la page "ClassroomTable"
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Ajouter une nouvelle salle de classe</h1> <br />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Nom de la salle de classe :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="course">Cours :</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Enregistrer</button>
      </form>
    </div>
  );
};

export default ClassroomForm;