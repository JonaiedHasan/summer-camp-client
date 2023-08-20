// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import ExtraSection from './ExtraSection';
import { Helmet } from 'react-helmet';
import Reviews from './Reviews';

const Home = () => {
    
    return (
       
        <div>
        <Helmet>
            <title>Playmakers Academy  </title>
        </Helmet>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <ExtraSection></ExtraSection>
        <PopularInstructor></PopularInstructor>
        <Reviews></Reviews>
    </div>
    );
};

export default Home;