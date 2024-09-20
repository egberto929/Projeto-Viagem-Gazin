import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/ManageUsers.css'; 

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    setRemovingId(id);

    try {
      await axios.delete(`http://localhost:8000/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user', error);
    } finally {
      setRemovingId(null);
    }
  };

  if (loading) {
    return (
      <div className='carregando'>
        <div className="loader"></div>
        <p className="loading-text">Carregando usuários...</p>
      </div>
    );
  }

  return (
    <div className="manage-users-container">
      <h2 className="manage-users-header">Gerenciar Usuários</h2>
      <ul className="user-list">
        {users.map(user => (
          <li
            key={user.id}
            className={`user-list-item ${removingId === user.id ? 'fade-out' : ''}`}
          >
            {user.name} - {user.email}
            <button
              className="remove-button"
              onClick={() => handleDelete(user.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
