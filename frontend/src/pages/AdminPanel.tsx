import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel: React.FC = () => {
  return (
    <div className="admin-panel-container">
      <h1>Painel Administrativo</h1>
      <div className="admin-options">
        <Link to="/admin/manage-users">
          <button>Gerenciar Usuários</button>
        </Link>
        <Link to="/admin/view-reservations">
          <button>Ver Reservas</button>
        </Link>
        <Link to="/admin/add-viagem">
          <button>Adicionar Viagem</button> {/* Novo botão */}
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;

