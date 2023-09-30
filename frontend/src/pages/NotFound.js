import React from 'react';
import '../styles/NotFound.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReturnButton from '../components/returnButton';

function NotFound() {
  return (
    <main>
    <Header />
    <div className='notFound'>
      <h2>404</h2>
      <p>Ouuups! La page que vous avez demandé n'a pas été touvée</p>
    <ReturnButton />
    </div>
    <Footer />
    </main>
  );
}

export default NotFound;