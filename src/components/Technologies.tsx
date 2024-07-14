import React from 'react';
import carsImage from '../assets/PanoramaCars_logo_red_white.webp';
import burguerImage from '../assets/PanoramaBurguer_logo.webp';
import Carousel from './Carousel';

const Technologies: React.FC = () => {
  const slides = [
    {
      title: 'Projeto 1',
      description: 'Este é um projeto incrível que utiliza React e Tailwind CSS.',
      image: carsImage,
    },
    {
      title: 'Projeto 2',
      description: 'Outro projeto incrível que utiliza Next.js e TypeScript.',
      image: burguerImage,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Tecnologias</h2>
      <Carousel slides={slides} />
    </div>
  );
};

export default Technologies;
