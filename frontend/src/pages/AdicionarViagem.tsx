import React, { useState } from 'react';
import axios from 'axios';
import './css/AdicionarViagem.css';

const AdicionarViagem: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    setErrorMessage(null);
    setSuccessMessage(null);

    if (file) {
      // Validação do tamanho do arquivo
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage('O arquivo é muito grande. O tamanho máximo é de 5MB.');
        setSelectedFile(null);
      } else {
        setSelectedFile(file);
      }
    }
  };
  
  // Função para converter o arquivo para base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleAddViagem = async (): Promise<void> => {
    if (!selectedFile) {
      setErrorMessage('Por favor, selecione uma imagem antes de enviar.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const base64Image = await convertToBase64(selectedFile);
      // Enviando a imagem convertida para o backend
      const response = await axios.post('http://localhost:8000/api/images', {
        image: base64Image,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccessMessage('Imagem enviada com sucesso!');
      console.log('Imagem enviada com sucesso:', response.data);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(`Erro ao enviar a imagem: ${error.response.data.message || error.message}`);
      } else {
        setErrorMessage('Erro de rede ou servidor. Verifique sua conexão.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Adicionar Imagem</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="input"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button
        onClick={handleAddViagem}
        className="button"
        disabled={loading || !selectedFile}
      >
        {loading ? 'Enviando...' : 'Adicionar Imagem'}
      </button>
    </div>
  );
};

export default AdicionarViagem;