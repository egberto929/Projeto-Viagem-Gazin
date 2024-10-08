import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/ViewReservations.css';

interface Reserva {
  id: number;
  user_id: number;
  name: string;
  viagem_title: string;
  price: string;
  created_at: string;
}

const ViewReservations: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/reservas');
        setReservas(response.data.reservas);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, []);

  if (loading) {
    return (
      <div className='carregando'>
        <div className="loader"></div>
        <p className="loading-text">Carregando reservas...</p>
      </div>
    );
  }
  

  return (
    <div className="view-reservations-container">
      <h1>Reservas</h1>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Viagem</th>
            <th>Preço</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(reserva => (
            <tr key={reserva.id}>
              <td>{reserva.id}</td>
              <td>{reserva.name}</td>
              <td>{reserva.viagem_title}</td>
              <td>R${reserva.price}</td>
              <td>{new Date(reserva.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReservations;