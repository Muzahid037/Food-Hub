import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import JoinUs from '../JoinUs/JoinUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;