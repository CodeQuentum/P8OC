import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import HomeContent from '../components/Homecontent';
import '../styles/Header.css';

function Home() {
    return (
        <main>
        <Intro />
        <Header />
        <HomeContent /> 
        <Footer />
        </main>
    )
}

export default Home;