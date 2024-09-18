import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Register.css';

const Register: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMensagem('');
    setErro(null);

    if (senha !== confirmaSenha) {
      setErro('As senhas não correspondem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        nome,
        email,
        senha,
        senha_confirmation: confirmaSenha,
      });
      setMensagem(response.data.message);
      navigate('/');  // Redireciona para a página inicial
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErro(error.response?.data.message || 'Erro ao cadastrar');
      } else {
        setErro('Erro ao conectar com o servidor');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-page">
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <label htmlFor="confirma-senha">Confirmar Senha</label>
          <input
            type="password"
            id="confirma-senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
        {mensagem && <p className="success-message">{mensagem}</p>}
        {erro && <p className="error-message">{erro}</p>}
      </div>
    </div>
  );
};

export default Register;
