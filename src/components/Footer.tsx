import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-codigo-certo-red py-1">
      <div className="container mx-auto text-center">
        <p className='text-xs'>&copy; {new Date().getFullYear()} Criado por Saulo Coimbra. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
