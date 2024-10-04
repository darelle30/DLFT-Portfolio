import React from 'react';
import Hero from '../components/Hero';
import About from '../pages/About';
import Project from '../pages/Project';
import Contacts from '../pages/Contacts';

const Home = () => {
    return (

        <section id="/home">
            <Hero />
            <About />
            <Project />
            <Contacts />
        </section>
    );
};

export default Home;
