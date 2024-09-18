import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Home.css';

interface Viagem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  departureDate: string;
  returnDate: string;
  itinerary: string;
}

const viagens: Viagem[] = [
  { id: 1, title: 'Rio de Janeiro', description: 'Explore as belas praias e o Cristo Redentor no Rio de Janeiro.', price: '1.800', image: 'https://via.placeholder.com/300x200?text=Rio+de+Janeiro', departureDate: '10/10/2024', returnDate: '15/10/2024', itinerary: 'Visita ao Cristo Redentor, Pão de Açúcar e praias.' },
  { id: 2, title: 'Foz do Iguaçu', description: 'Admire as impressionantes Cataratas do Iguaçu e a natureza ao redor.', price: '2.000', image: 'https://via.placeholder.com/300x200?text=Foz+do+Iguaçu', departureDate: '15/11/2024', returnDate: '20/11/2024', itinerary: 'Passeios pelas Cataratas e Parque Nacional.' },
  { id: 3, title: 'Salvador', description: 'Vivencie a rica cultura e história de Salvador, a primeira capital do Brasil.', price: '1.500', image: 'https://via.placeholder.com/300x200?text=Salvador', departureDate: '20/12/2024', returnDate: '25/12/2024', itinerary: 'Passeios históricos, Pelourinho, e praias.' },
  { id: 4, title: 'São Paulo', description: 'Descubra a vibrante vida urbana e os museus de São Paulo.', price: '1.600', image: 'https://via.placeholder.com/300x200?text=São+Paulo', departureDate: '05/01/2025', returnDate: '10/01/2025', itinerary: 'Museus, parques, e vida noturna.' },
  { id: 5, title: 'Florianópolis', description: 'Relaxe nas praias paradisíacas de Florianópolis e aproveite a vida noturna.', price: '1.700', image: 'https://via.placeholder.com/300x200?text=Florianópolis', departureDate: '15/02/2025', returnDate: '20/02/2025', itinerary: 'Praias e atividades aquáticas.' },
  { id: 6, title: 'Porto Alegre', description: 'Explore o charme de Porto Alegre e conheça a cultura gaúcha.', price: '1.400', image: 'https://via.placeholder.com/300x200?text=Porto+Alegre', departureDate: '10/03/2025', returnDate: '15/03/2025', itinerary: 'Centro histórico e festivais locais.' },
  { id: 7, title: 'Belo Horizonte', description: 'Descubra a capital mineira com sua culinária e paisagens.', price: '1.550', image: 'https://via.placeholder.com/300x200?text=Belo+Horizonte', departureDate: '05/04/2025', returnDate: '10/04/2025', itinerary: 'Passeios históricos e gastronomia.' },
  { id: 8, title: 'Recife', description: 'Conheça as praias e a cultura vibrante de Recife e Olinda.', price: '1.800', image: 'https://via.placeholder.com/300x200?text=Recife', departureDate: '15/05/2025', returnDate: '20/05/2025', itinerary: 'Passeios culturais e praias.' },
  { id: 9, title: 'Brasília', description: 'Explore a arquitetura moderna e os pontos turísticos de Brasília.', price: '1.700', image: 'https://via.placeholder.com/300x200?text=Brasília', departureDate: '01/06/2025', returnDate: '06/06/2025', itinerary: 'Arquitetura moderna e passeios turísticos.' },
  { id: 10, title: 'Natal', description: 'Desfrute das praias de Natal e das dunas de Genipabu.', price: '1.900', image: 'https://via.placeholder.com/300x200?text=Natal', departureDate: '10/07/2025', returnDate: '15/07/2025', itinerary: 'Praias, dunas e passeios aquáticos.' },
  { id: 11, title: 'Maceió', description: 'Aproveite as praias de Maceió e a rica cultura local.', price: '1.800', image: 'https://via.placeholder.com/300x200?text=Maceió', departureDate: '20/08/2025', returnDate: '25/08/2025', itinerary: 'Passeios pelas praias e vida cultural.' },
  { id: 12, title: 'Jericoacoara', description: 'Experimente o charme de Jericoacoara com suas dunas e lagoas.', price: '2.200', image: 'https://via.placeholder.com/300x200?text=Jericoacoara', departureDate: '05/09/2025', returnDate: '10/09/2025', itinerary: 'Passeios nas dunas e lagoas.' },
  { id: 13, title: 'Chapada Diamantina', description: 'Explore as belezas naturais da Chapada Diamantina com suas cachoeiras e trilhas.', price: '1.900', image: 'https://via.placeholder.com/300x200?text=Chapada+Diamantina', departureDate: '20/10/2025', returnDate: '25/10/2025', itinerary: 'Trilhas, cachoeiras e passeios ecológicos.' },
  { id: 14, title: 'Pipa', description: 'Desfrute das praias e da vida noturna em Pipa, um destino popular do Rio Grande do Norte.', price: '1.800', image: 'https://via.placeholder.com/300x200?text=Pipa', departureDate: '05/11/2025', returnDate: '10/11/2025', itinerary: 'Praias, vida noturna e atividades aquáticas.' },
  { id: 15, title: 'Paraty', description: 'Conheça o charme histórico de Paraty e suas praias deslumbrantes.', price: '2.000', image: 'https://via.placeholder.com/300x200?text=Paraty', departureDate: '15/12/2025', returnDate: '20/12/2025', itinerary: 'Passeios históricos, praias e natureza.' }
];

const Home: React.FC = () => {
  const [selectedViagem, setSelectedViagem] = useState<Viagem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Atualiza o estado baseado na presença do token
  }, []);

  const openModal = (viagem: Viagem) => {
    setSelectedViagem(viagem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedViagem(null);
  };

  const handleConfirmReservation = () => {
    if (!isLoggedIn) {
      alert('Você precisa estar logado para confirmar a reserva.');
      navigate('/login');
      return;
    }
    alert('Reserva confirmada para ' + selectedViagem?.title);
    closeModal();
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    setIsLoggedIn(false); // Atualiza o estado para deslogado
    alert('Você saiu da sua conta.');
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Bem-vindo à Nexus Turismo</h1>
        <p>Sua aventura começa aqui</p>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link to="/sobre-nos" className="nav-link">Sobre Nós</Link></li>
            <li><Link to="/contato" className="nav-link">Contato</Link></li>
            {!isLoggedIn ? (
              <li><Link to="/login" className="nav-link">Entrar</Link></li>
            ) : (
              <li><Link to="/" onClick={handleLogout} className="nav-link">Sair</Link></li>
            )}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Descubra Seu Próximo Destino</h2>
          <p>Explore nossas ofertas incríveis ao redor do Brasil.</p>
        </div>
      </section>

      <section id="viagens-destaque" className="featured-trips">
        <h2>Viagens em Destaque</h2>
        <div className="viagem-cards">
          {viagens.slice(0, 5).map(viagem => (
            <div key={viagem.id} className="viagem-card">
              <img src={viagem.image} alt={viagem.title} className="viagem-image" />
              <div className="viagem-info">
                <h3>{viagem.title}</h3>
                <p>{viagem.description}</p>
                <div className="center">
                  <p className="viagem-price">R${viagem.price}</p>
                  <button onClick={() => openModal(viagem)} className="reserve-button">Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="outras-viagens" className="viagens-list">
        <h2>Outras Viagens</h2>
        <div className="viagem-cards">
          {viagens.slice(5).map(viagem => (
            <div key={viagem.id} className="viagem-card">
              <img src={viagem.image} alt={viagem.title} className="viagem-image" />
              <div className="viagem-info">
                <h3>{viagem.title}</h3>
                <p>{viagem.description}</p>
                <div className="center">
                  <p className="viagem-price">R${viagem.price}</p>
                  <button onClick={() => openModal(viagem)} className="reserve-button">Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && selectedViagem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedViagem.title}</h2>
            <p><strong>Descrição:</strong> {selectedViagem.description}</p>
            <p><strong>Data de Saída:</strong> {selectedViagem.departureDate}</p>
            <p><strong>Data de Volta:</strong> {selectedViagem.returnDate}</p>
            <p><strong>Roteiro:</strong> {selectedViagem.itinerary}</p>
            <p><strong>Preço:</strong> R${selectedViagem.price}</p>
            <button onClick={handleConfirmReservation} className="confirm-button">Confirmar Reserva</button>
          </div>
        </div>
      )}

      <footer className="home-footer">
        <p>&copy; 2024 Agência de Viagens. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;



