import React from 'react';
import Card from './Card';
import Badge from './Badge';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { CiLink } from "react-icons/ci";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 mt-4">Meus Projetos</h2>
      <div className="flex flex-wrap">
        <Card title="PanoramaCars" description="Este é um projeto incrível que utiliza React e Tailwind CSS, nele temos como proposta, compra e venda de veículos">
          <Badge className='gap-2' color="primary"><FaReact/>React.Js</Badge>
          <Badge className='gap-2' color="secondary"><RiTailwindCssFill />Tailwind CSS</Badge>
          <Badge className='gap-2' color="danger" to="https://project-x-tan-tau.vercel.app/login"><CiLink />Link</Badge>
        </Card>
        <Card title="PanoramaBurguer" description="Outro projeto incrível que utiliza ReactJs, Tailwind CSSs e TypeScript, nele temos como proposta, compra e venda de alimentos">
          <Badge className='gap-2' color="primary"><FaReact/>React.js</Badge>
          <Badge className='gap-2' color="secondary"><TbBrandTypescript />TypeScript</Badge>
          <Badge className='gap-2' color="danger" to="https://entrega-s3-template-hamburgueria-saulo-coimbra.vercel.app/"><CiLink />Link</Badge>
        </Card>
        <Card title="PanoramaToDo" description="Outro projeto incrível que utiliza React.js, JavaScript e SaSS, nele temos como proposta uma lista de tarefas.">
          <Badge className='gap-2' color="primary"><FaReact/>React.js</Badge>
          <Badge className='gap-2' color="secondary"><TbBrandTypescript />TypeScript</Badge>
          <Badge className='gap-2' color="danger" to="https://react-entrega-s1-template-nu-kenzie-saulo-coimbra.vercel.app/"><CiLink />Link</Badge>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
