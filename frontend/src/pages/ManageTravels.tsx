import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageTravels.css';

const ManageTravels: React.FC = () => {
  const [travels, setTravels] = useState<any[]>([]);
  const [newTravel, setNewTravel] = useState({ name: '', description: '', price: '' });
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/travels');
        setTravels(response.data);
      } catch (error) {
        console.error('Failed to fetch travels', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTravels();
  }, []);

  const handleAddTravel = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/travels', newTravel);
      setTravels([...travels, response.data]);
      setNewTravel({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('Failed to add travel', error);
    }
  };

  const handleDelete = async (id: number) => {
    setRemovingId(id);

    try {
      await axios.delete(`http://localhost:8000/api/travels/${id}`);
      setTravels(travels.filter(travel => travel.id !== id));
    } catch (error) {
      console.error('Failed to delete travel', error);
    } finally {
      setRemovingId(null);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="manage-travels-container">
      <h2 className="manage-travels-header">Gerenciar Viagens</h2>
      <div className="add-travel-form">
        <h3>Adicionar Nova Viagem</h3>
        <input
          type="text"
          placeholder="Nome"
          value={newTravel.name}
          onChange={(e) => setNewTravel({ ...newTravel, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={newTravel.description}
          onChange={(e) => setNewTravel({ ...newTravel, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Preço"
          value={newTravel.price}
          onChange={(e) => setNewTravel({ ...newTravel, price: e.target.value })}
        />
        <button onClick={handleAddTravel}>Adicionar Viagem</button>
      </div>
      <ul className="travel-list">
        {travels.map(travel => (
          <li
            key={travel.id}
            className={`travel-list-item ${removingId === travel.id ? 'fade-out' : ''}`}
          >
            <div>
              <strong>{travel.name}</strong> - {travel.description} - R${travel.price}
            </div>
            <button
              className="remove-button"
              onClick={() => handleDelete(travel.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTravels;
