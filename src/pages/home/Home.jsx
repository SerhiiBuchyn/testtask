import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Posts from '../../components/Posts/Posts';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <Carousel />
    <Posts />
    <Banner />
    <Gallery />
    <Posts />
    <Footer />
  </div>
);

export default Home;
