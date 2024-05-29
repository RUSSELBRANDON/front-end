import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import './EnregistrerE.css';

function RegisterTeachers() {
  const [form, setForm] = useState({
    matricule: '',
    nom: '',
    prenom: '',
    adresse:''
  });

  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
 

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios.get('http://localhost:8081/enseignants')
      .then(response => {
        setEntries(response.data);
        setFilteredEntries(response.data);
      })
      .catch(error => {
        alert("Erreur lors du chargement des enseignants:")
        console.error('Erreur lors du chargement des enseignants:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`http://localhost:8081/enseignants/${currentIndex}`, form)
        .then(response => {
          console.log(response.data);
          const updatedEntries = entries.map(entry =>
            entry.id === currentIndex ? form : entry
          );
          setEntries(updatedEntries);
          setFilteredEntries(updatedEntries);
          setIsEditing(false);
        })
        .catch(error => {
          alert("Erreur l'ors de la modification de l'enseignant: veuillez verifier vos champs s'il n'existent pas deja et reesayer");
          console.error('Erreur lors de la modification de l\'enseignant:', error);
        });
    } else {
      axios.post('http://localhost:8081/enseignants', form)
        .then(response => {
          console.log(response.data);
          fetchTeachers();
        })
        .catch(error => {
          alert("Erreur l'ors de l'ajout de l'enseignant: veuillez verifier vos champs s'il n'existent pas deja et reesayer");

          console.error('Erreur lors de l\'ajout de l\'enseignant:', error);
        });
    }
    setForm({
      matricule: '',
      nom: '',
      prenom: '',
      adresse: ''
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`http://localhost:8081/enseignants/matricule/${search}`)
      .then(response => {
        setFilteredEntries([response.data]);
      })
      .catch(error => {
        alert("Aucune correspondance trouver pour le matricule saisi");
        console.error('Erreur lors de la recherche de l\'enseignant:', error);
      });
  };

  const handleEdit = (index) => {
    setForm({ ...entries[index] });
    setIsEditing(true);
    setCurrentIndex(entries[index].id);
  };

  const handleDelete = (index) => {
    axios.delete(`http://localhost:8081/enseignants/${entries[index].id}`)
      .then(response => {
        console.log(response.data);
        fetchTeachers();
      })
      .catch(error => {
        alert("Erreur lors de la suppression de l'enseignant")
        console.error('Erreur lors de la suppression de l\'enseignant:', error);
      });
  };



  return (
    <div id="EnregistrerE">
      <h1>Formulaire d'Enregistrement Des Enseignants</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="matricule">Matricule:</label>
            <input
              type="text"
              id="matricule"
              name="matricule"
              placeholder="Entrez votre matricule"
              value={form.matricule}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrez votre nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prenom:</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Entrez votre prenom"
              value={form.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            
          <label htmlFor="adresse">Adresse:</label>
                <input
                  type="text"
                  placeholder="Entrez votre adresse"
                  name="adresse"
                  value={form.adresse}
                  onChange={handleChange}
                  required
                />
            </div>
          <button className='enre' type="submit">{isEditing ? 'Modifier' : 'Enregistrer'}</button>
        </form>
        <div className="table-container">
          <div className="search-group">
            <input
              type="text"
              placeholder="Rechercher suivant un matricule"
              value={search}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Rechercher</button>
          </div>
          {filteredEntries.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Adresse</th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.matricule}</td>
                    <td>{entry.nom}</td>
                    <td>{entry.prenom}</td>
                    <td>{entry.adresse}</td>
                    <td>
                      <button className='modif' onClick={() => handleEdit(index)}>Modifier</button>
                      <button className='supp' onClick={() => handleDelete(index)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterTeachers;
