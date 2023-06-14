// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import ExtraSection from './ExtraSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
            <title>Playmakers Academy  </title>
        </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;