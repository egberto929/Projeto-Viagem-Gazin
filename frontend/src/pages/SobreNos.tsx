import React from 'react';
import './SobreNos.css';

const SobreNos: React.FC = () => {
    return (
        <div className="sobre-nos">
            <header className="sobre-nos-header">
                <h1>Sobre Nós</h1>
                <p>Conheça nossa história e valores!</p>
            </header>
            <section className="introducao">
                <h2>Bem-vindo à Nexus Turismo</h2>
                <p>
                    Na Nexus Turismo, somos apaixonados por criar experiências de viagem inesquecíveis. Desde nossa fundação, temos o objetivo de proporcionar viagens que combinam conforto, aventura e cultura. Cada viagem é cuidadosamente planejada para atender às suas necessidades e superar suas expectativas.
                </p>
                <p>
                    Nossa equipe de especialistas está sempre pronta para ajudar você a encontrar o destino perfeito e planejar cada detalhe da sua viagem, garantindo que você tenha uma experiência memorável e sem preocupações.
                </p>
            </section>
            <section className="nossa-historia">
                <h2>Nossa História</h2>
                <p>
                    Fundada em 2010 por um grupo de apaixonados por viagens, a Nexus Turismo começou como uma pequena startup com um grande sonho. Com o tempo, crescemos e evoluímos, expandindo nossos serviços e aprimorando nossa expertise. Hoje, somos uma das principais agências de viagens, reconhecida pela nossa dedicação ao atendimento ao cliente e pela qualidade dos nossos roteiros.
                </p>
                <p>
                    Cada membro da nossa equipe traz uma paixão única e experiência diversificada para garantir que você tenha a melhor experiência possível. Estamos comprometidos em manter o mais alto padrão de excelência em todos os aspectos do nosso trabalho.
                </p>
            </section>
            <section className="equipe">
                <h2>Conheça Nossa Equipe</h2>
                <p>
                    Nossa equipe é composta por profissionais experientes e apaixonados por viagens, cada um trazendo uma abordagem única para garantir que sua experiência seja impecável. Conheça alguns dos nossos membros:
                </p>
                <div className="membros-equipe">
                    <div className="membro">
                        <img src="https://via.placeholder.com/150" alt="João Silva" />
                        <h3>João Silva</h3>
                        <p>Fundador e CEO</p>
                        <p>João é o visionário por trás da Nexus Turismo. Com uma paixão por explorar novos destinos e criar experiências inesquecíveis, ele lidera nossa equipe com um compromisso inabalável com a excelência.</p>
                    </div>
                    <div className="membro">
                        <img src="https://via.placeholder.com/150" alt="Maria Oliveira" />
                        <h3>Maria Oliveira</h3>
                        <p>Especialista em Destinos Internacionais</p>
                        <p>Maria é nossa especialista em destinos internacionais, com um conhecimento profundo sobre culturas e atrações ao redor do mundo. Ela está aqui para ajudar você a encontrar o destino perfeito para suas férias dos sonhos.</p>
                    </div>
                    <div className="membro">
                        <img src="https://via.placeholder.com/150" alt="Pedro Santos" />
                        <h3>Pedro Santos</h3>
                        <p>Consultor de Turismo</p>
                        <p>Pedro é um consultor experiente que se dedica a criar roteiros personalizados para atender às suas necessidades e preferências. Ele está sempre pronto para oferecer conselhos e recomendações para garantir uma viagem perfeita.</p>
                    </div>
                </div>
            </section>
            <section className="valores">
                <h2>Nossos Valores</h2>
                <p>
                    Na Nexus Turismo, nossos valores são a base de tudo o que fazemos. Estamos comprometidos com:
                </p>
                <ul>
                    <li><strong>Compromisso com a Excelência:</strong> Buscamos constantemente melhorar nossos serviços e garantir a satisfação total dos nossos clientes.</li>
                    <li><strong>Atendimento Personalizado:</strong> Cada cliente é único, e trabalhamos para criar experiências que atendam às suas necessidades específicas.</li>
                    <li><strong>Transparência e Honestidade:</strong> Mantemos uma comunicação clara e aberta, assegurando que você tenha todas as informações necessárias para tomar decisões informadas.</li>
                </ul>
            </section>
            <section className="roteiro">
                <h2>Roteiros Personalizados</h2>
                <p>
                    Oferecemos uma ampla gama de roteiros personalizados, adaptados às suas preferências e interesses. Aqui estão alguns exemplos dos roteiros que podemos criar para você:
                </p>
                <ul>
                    <li><strong>Roteiro Clássico Europeu:</strong> Uma viagem encantadora pelas principais cidades da Europa, incluindo Paris, Roma e Londres, com visitas a atrações icônicas e experiências culturais únicas.</li>
                    <li><strong>Aventura na Ásia:</strong> Explore a vibrante cultura e paisagens diversificadas da Ásia com um roteiro que inclui Tóquio, Bangkok e Pequim, oferecendo uma mistura de tradição e modernidade.</li>
                    <li><strong>Férias Exóticas no Caribe:</strong> Relaxe e desfrute das praias paradisíacas do Caribe com um roteiro que inclui resorts de luxo, atividades aquáticas e muito mais.</li>
                </ul>
            </section>
            <section className="contato">
                <h2>Entre em Contato</h2>
                <p>
                    Se você tiver alguma dúvida ou precisar de mais informações, estamos à disposição para ajudar. Entre em contato conosco através dos seguintes canais:
                </p>
                <ul>
                    <li>Email: <a href="mailto:contato@nexusturismo.com">contato@nexusturismo.com</a></li>
                    <li>Telefone: <a href="tel:+1112345678">(11) 1234-5678</a></li>
                </ul>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows={4} required />
                    <button type="submit">Enviar</button>
                </form>
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 Nexus Turismo. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default SobreNos;
