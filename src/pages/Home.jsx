import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Home/HeroSection';
import OfferInfinite from '../components/Home/OfferInfinite';
import ProductCategory from '../components/Home/ProductCategory';
import TopSellingProducts from '../components/Home/TopSellingProducts';
import ShoppingQuotes from '../components/Home/ShoppingQuotes';
import qoutes from "../../src/assets/HomePage/travel1.jpg";
import qoutes1 from "../../src/assets/HomePage/quotes2.jpg";

import AllProducts from '../components/Home/AllProducts';
import FeaturesAndCollection from '../components/Home/FeaturesAndCollection';
import ProductStat from '../components/Home/ProductStat';
import ProductVideo from '../components/Home/ProductVideo';
import TrustedCompany from '../components/Home/TrustedCompany';
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OfferInfinite></OfferInfinite>
            <ProductCategory></ProductCategory>
            <TopSellingProducts></TopSellingProducts>
            <ShoppingQuotes
                img={qoutes}
                qoutes="Your Ultimate Destination for Exclusive Shopping Delights!"
            />
            <AllProducts></AllProducts>
            <ShoppingQuotes
                img={qoutes1}
                qoutes="Your Ultimate Destination for Exclusive Shopping Delights!"
            />
            <FeaturesAndCollection></FeaturesAndCollection>
            <ProductStat></ProductStat>
            <ProductVideo></ProductVideo>
            <TrustedCompany></TrustedCompany>
        </div>
    );
};

export default Home;