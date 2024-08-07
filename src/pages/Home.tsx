import React from 'react';
import Header from '../components/Header';
import PersonalInfo from '../components/PersonalInfo';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-codigo-certo-white dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text">
      <Header />
      <main className="container mx-auto pt-24 p-4 bg-codigo-certo-white dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text">
        <Technologies/>
        <PersonalInfo />
        <Projects/>
        <About />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
