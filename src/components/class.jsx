import React from 'react';
import { Link } from 'react-router-dom';

const ClassroomTable = ({ data }) => {
  return (
    <div>
      <h1>Liste des salles de classe</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Cours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((classroom, index) => (
            <tr key={index}>
              <td>{classroom.name}</td>
              <td>{classroom.course}</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-classroom">Ajouter une nouvelle salle de classe</Link>
    </div>
  );
};

export default ClassroomTable;