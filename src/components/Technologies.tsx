import React from 'react';
import Carousel from './Carousel';

const Technologies: React.FC = () => {
  const slides = [
    {
      title: 'Projeto 1',
      description: 'Este é um projeto incrível que utiliza React e Tailwind CSS.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Projeto 2',
      description: 'Outro projeto incrível que utiliza Next.js e TypeScript.',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Técnologias</h2>
      <Carousel slides={slides} />
    </div>
  );
};

export default Technologies;
