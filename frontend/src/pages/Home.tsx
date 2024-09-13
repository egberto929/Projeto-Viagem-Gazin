import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link do React Router
import axios from 'axios';
import './Home.css';

interface Viagem {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

const Home: React.FC = () => {
    const [viagensDestaque, setViagensDestaque] = useState<Viagem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('/api/viagens-destaque')
            .then(response => {
                setViagensDestaque(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Erro ao buscar viagens em destaque');
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <header className="home-header">
                <h1>Bem-vindo à Nexus Turismo</h1>
                <p>Sua aventura começa aqui</p>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li><Link to="/sobre-nos" className="nav-link">Sobre Nós</Link></li>
                        <li><Link to="/contato" className="nav-link">Contato</Link></li>
                        <li><Link to="/login" className="nav-link">Entrar</Link></li>
                    </ul>
                </nav>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h2>Descubra Seu Próximo Destino</h2>
                    <p>Explore nossa lista selecionada de viagens incríveis ao redor do mundo.</p>
                    <a href="#viagens" className="cta-button">Veja Viagens em Destaque</a>
                </div>
            </section>
            <section id="viagens" className="featured-trips">
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="trip-list">
                        {viagensDestaque.map(viagem => (
                            <div key={viagem.id} className="trip-card">
                                <img src={viagem.image} alt={viagem.title} className="trip-image" />
                                <div className="trip-info">
                                    <h3>{viagem.title}</h3>
                                    <p>{viagem.description}</p>
                                    <p className="trip-price">R${viagem.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 Agência de Viagens. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;



const MeuComponente = () => {
    const urlDaImagem = "";

    return (
        <div>
            <img src={urlDaImagem} alt="Descrição da imagem" />
        </div>
    );
}

export default MeuComponente;