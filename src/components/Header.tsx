import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import DarkModeToggle from './DarkModeToggle';
import logoCoders from '../assets/WhatsApp Image 2024-07-14 at 15.38.06.jpeg';
import profilePhoto from '../assets/WhatsApp Image 2024-06-27 at 08.39.47.jpeg';


const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-codigo-certo-red text-codigo-certo-white p-4 dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text fixed w-full top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center gap-2">

          <div className='flex items-center gap-2'>
        <img
        src={logoCoders}
        alt="Foto pessoal"
        className="rounded-full w-14 h-14"
      />

          <img
        src={profilePhoto}
        alt="Foto pessoal"
        className="rounded-full w-10 h-10"
      />
            <h2 className="font-semibold text-center">
        📱 Software Engineer
      </h2>
      </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="personal-info" smooth={true} duration={500} className="cursor-pointer">Informações Pessoais</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Meus Projetos</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">Sobre</Link>
            </li>
            <li>
              <Link to="motivations" smooth={true} duration={500} className="cursor-pointer">Motivações</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button onClick={toggleSidebar} className="md:hidden text-codigo-certo-white">
              <FaBars size={24} />
            </button>
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
