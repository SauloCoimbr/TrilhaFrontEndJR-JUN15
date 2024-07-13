import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-codigo-certo-red py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Criado por Saulo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
