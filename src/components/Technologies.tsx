import React from 'react';
import carsImage from '../assets/PanoramaCars_logo_red_white.webp';
import burguerImage from '../assets/PanoramaBurguer_logo.webp';
import toDoImage from '../assets/PanoramaToDo.webp';
import Carousel from './Carousel';

const Technologies: React.FC = () => {
  const slides = [
    {
      title: 'Panorama Cars',
      description: 'Este é um projeto incrível que utiliza React e Tailwind CSS, nele temos como proposta, compra e venda de veículos',
      image: carsImage,
    },
    {
      title: 'Panorama Burguer',
      description: 'Outro projeto incrível que utiliza ReactJs, Tailwind CSSs e TypeScript, nele temos como proposta, compra e venda de alimentos',
      image: burguerImage,
    },
    {
      title: 'PanoramaToDo',
      description: 'Outro projeto incrível que utiliza React.js, JavaScript e SaSS, nele temos como proposta uma lista de tarefas.',
      image: toDoImage,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Projetos</h2>
      <Carousel slides={slides} />
    </div>
  );
};

export default Technologies;
