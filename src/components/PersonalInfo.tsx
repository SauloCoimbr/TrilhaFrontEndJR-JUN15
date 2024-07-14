import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <section
      id="personal-info"
      className="p-4 bg-codigo-certo-white text-codigo-certo-light-text dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text"
    >
      <h2 className="text-xl font-semibold mt-4 text-center">
        Saulo Cavalcante Coimbra
      </h2>
      <p className="text-center">Idade: 33 anos</p>
      <h2 className="text-xl font-semibold text-center">
        📱 Engenheiro de Software | JavaScript | React | Angular | TypeScript |
        Node.js | Git | PostgreSQL | Ionic
      </h2>
      <p className="mt-4">
        Olá! Eu sou Saulo Coimbra, um desenvolvedor de software apaixonado por
        transformar ideias em soluções digitais. Acredito que a ciência da
        computação é a chave para resolver os desafios mais complexos da
        sociedade atual. Atualmente, estou aprofundando meus conhecimentos nesta
        área, sempre me esforçando para aprimorar minhas habilidades e
        contribuir para o avanço tecnológico.
      </p>
      <h3 className="mt-4 font-semibold">O Que Eu Ofereço:</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          🖥️ Desenvolvimento Fullstack: Experiência sólida com JavaScript,
          React, TypeScript, Node.js, criando aplicações robustas e eficientes.
        </li>
        <li>
          🌐 Git e Controle de Versão: Proficiência no uso do Git para gestão de
          código, garantindo um fluxo de trabalho colaborativo e organizado.
        </li>
        <li>
          📊 Gestão de Banco de Dados: Proficiência com PostgreSQL, garantindo
          integridade e desempenho dos dados nas aplicações.
        </li>
        <li>
          🔄 Metodologias Ágeis: Dedicado às práticas ágeis e padrões de
          desenvolvimento, entregando código limpo e sustentável.
        </li>
        <li>
          💻 Automação e Testes: Foco na automação de testes e integração
          contínua para garantir a qualidade do software.
        </li>
      </ul>
      <h3 className="mt-4 font-semibold">Vamos Conectar:</h3>
    </section>
  );
};

export default PersonalInfo;
