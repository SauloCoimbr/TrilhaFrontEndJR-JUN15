import React from 'react';
import Card from './Card';
import Badge from './Badge';

const Projects: React.FC = () => {
  return (
    <div  id="projects" className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 mt-4">Meus Projetos</h2>
      <div className="flex flex-wrap">
        <Card title="PanoramaCars" description="Este é um projeto incrível que utiliza React e Tailwind CSS, nele temos como proposta, compra e venda de veículos">
          <Badge color="primary">React</Badge>
          <Badge color="secondary">Tailwind CSS</Badge>
          <Badge to='https://project-x-tan-tau.vercel.app/login' color="secondary">Link</Badge>
        </Card>
        <Card title="PanoramaBurguer" description="Outro projeto incrível que utiliza ReactJs, Tailwind CSSs e TypeScript, nele temos como proposta, compra e venda de alimentos">
          <Badge color="primary">React.js</Badge>
          <Badge color="secondary">TypeScript</Badge>
          <Badge to='https://entrega-s3-template-hamburgueria-saulo-coimbra.vercel.app/' color="secondary">Link</Badge>
        </Card>
        <Card title="PanoramaToDo" description="Outro projeto incrível que utiliza React.js, JavaScript e SaSS, nele temos como proposta uma lista de tarefas.">
          <Badge color="primary">React.js</Badge>
          <Badge color="secondary">TypeScript</Badge>
          <Badge to='https://react-entrega-s1-template-nu-kenzie-saulo-coimbra.vercel.app/' color="secondary">Link</Badge>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
