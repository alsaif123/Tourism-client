import React from 'react';
import Places from '../Places/Places';
import Hero from './Hero';
import './Home.css';
import OurApp from './OurApp';
import OurTeam from './OurTeam';

const Home = () => {
    return (
     <>
     <Hero/>
     <Places/>
     <OurTeam/>
     <OurApp/>
     </>
    );
};

export default Home;