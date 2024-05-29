import React from 'react';
import { useNavigate } from 'react-router-dom';

const CycleTable = ({ data = [] }) => {
  const navigate = useNavigate();


  const handleAddClick = () => {
    navigate('/cycle/CycleForm');
  };
  const handleEdit = (index) => {
    setForm(entries[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    setFilteredEntries(updatedEntries);
  };


  return (
    <div>
      <h1>Gestion d'un cycle</h1>
      {data.length > 0 ? (
        <table style={{color: 'black'}}>
          <thead>
            <tr >
              <th>Cycle</th>
              <th>Filière</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cycle, index) => (
              <tr key={index}>
                <td>{cycle.name}</td>
                <td>{cycle.filiere}</td>
                <td>
                  <button className="btn-small btn-primary" onClick={() => handleEdit(index)}>Modifier</button>
                  <button className="btn-small btn-danger" onClick={() => handleDelete(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucune donnée disponible.</p>
      )}
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleAddClick}>Ajouter</button>
      </div>
    </div>
  );
};

export default CycleTable;