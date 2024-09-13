import React, { useState } from 'react';
import axios from 'axios';
import './AddViagem.css';

const AddViagem: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/viagens', { title, description, price, image });
            setMessage('Viagem adicionada com sucesso!');
            setTitle('');
            setDescription('');
            setPrice('');
            setImage('');
        } catch (error: any) {
            setMessage(`Erro ao adicionar viagem: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="add-viagem-container">
            <h2>Adicionar Nova Viagem</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL da Imagem:</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Viagem</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddViagem;

