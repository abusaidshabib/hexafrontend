import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Home/HeroSection';
import OfferInfinite from '../components/Home/OfferInfinite';
import ProductCategory from '../components/Home/ProductCategory';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OfferInfinite></OfferInfinite>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;