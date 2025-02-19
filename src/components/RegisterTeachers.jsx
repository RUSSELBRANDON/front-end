import React, { useState } from 'react';
import './EnregistrerE.css';

function RegisterTeachers() {
  const [form, setForm] = useState({
    matricule: '',
    nom: '',
    prenom: '',
    contact: '',
    email: ''
  });

  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAddressInputs, setShowAddressInputs] = useState(false);
  const [addressType, setAddressType] = useState(''); // Peut être 'contact' ou 'email'

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
      const updatedEntries = entries.map((entry, index) =>
        index === currentIndex ? form : entry
      );
      setEntries(updatedEntries);
      setFilteredEntries(updatedEntries);
      setIsEditing(false);
    } else {
      setEntries([...entries, form]);
      setFilteredEntries([...entries, form]);
    }
    setForm({
      matricule: '',
      nom: '',
      prenom:'',
      contact: '',
      email: ''
    });
    setShowAddressInputs(false);
    setAddressType('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const filtered = entries.filter(entry =>
      entry.matricule.includes(search) ||
      entry.nom.includes(search) ||
      entry.contact.includes(search) ||
      entry.email.includes(search)
    );
    setFilteredEntries(filtered);
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

  const toggleAddressInputs = () => {
    setShowAddressInputs(!showAddressInputs);
  };

  const handleAddressTypeChange = (type) => {
    setAddressType(type);
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
              value={form.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="button" onClick={toggleAddressInputs}>Adresse</button>
          </div>
          {showAddressInputs && (
            <div className="form-group">
              <button type="button" onClick={() => handleAddressTypeChange('contact')}>
                Par Contact
              </button>
              <button type="button" onClick={() => handleAddressTypeChange('email')}>
                Par Email
              </button>
              {addressType === 'contact' && (
                <input
                  type="text"
                  placeholder="Entrez le numéro de téléphone"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              )}
              {addressType === 'email' && (
                <input
                  type="email"
                  placeholder="Entrez l'email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          )}
          <button type="submit">{isEditing ? 'Modifier' : 'Enregistrer'}</button>
        </form>
        <div className="table-container">
          <div className="search-group">
            <input
              type="text"
              placeholder="Rechercher..."
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
                  <th>Contact</th>
                  <th>Email</th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.matricule}</td>
                    <td>{entry.nom}</td>
                    <td>{entry.contact}</td>
                    <td>{entry.email}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Modifier</button>
                      <button onClick={() => handleDelete(index)}>Supprimer</button>
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
