import React from 'react';
import Card from './Card';
import Badge from './Badge';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="motivations"
      className="p-4 bg-codigo-certo-white text-codigo-certo-light-text dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text"
    >
      <h2 className="text-xl font-semibold">Motivações</h2>
      <h3 className="mt-4 font-semibold">Impacto Profissional:</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          📈 Entregar consistentemente soluções de alta qualidade em ambientes
          de desenvolvimento dinâmicos, desde startups ágeis até grandes
          empresas de tecnologia.
        </li>
        <li>
          📢 Alcançar milhares de pessoas com insights técnicos, simplificando
          conceitos complexos e promovendo as melhores práticas da indústria.
        </li>
        <li>
          ✨ Focado em aprimorar minhas habilidades em tecnologia, capacitar
          colegas e alcançar novos patamares de excelência.
        </li>
      </ul>
      <h3 className="mt-4 font-semibold">Vamos Conectar:</h3>
      <p className="mt-2">
        🤝 Estou ansioso para contribuir com meus conhecimentos técnicos para uma
        equipe que valorize progresso e inovação.
      </p>
      <h1 className='text-xl mt-5'>Contato:</h1>
      <div className="flex flex-wrap">
        <Card title="LinkedIn" description="Conecte-se comigo no LinkedIn para expandir sua rede profissional e acompanhar minhas atualizações de carreira.">
          <Badge className='gap-2' color="primary" to="https://www.linkedin.com/in/saulo-coimbra-331893250/"> <FaLinkedin/>Link</Badge>
        </Card>
        <Card title="GitHub" description="Confira meu GitHub para ver meus projetos de código aberto, contribuições e repositórios.">
          <Badge className='gap-2' color="secondary" to="https://github.com/SauloCoimbr"><FaGithub/>Link</Badge>
        </Card>
        <Card title="Instagram" description="Siga-me no Instagram para ver minhas fotos, histórias e atualizações diárias.">
          <Badge className='gap-2' color="danger" to="https://www.instagram.com/saulocoimbr?igsh=MThtaDBqNG45cnFqbg=="><FaInstagram/>Link</Badge>
        </Card>
        </div>
    </section>
  );
};

export default Contact;
