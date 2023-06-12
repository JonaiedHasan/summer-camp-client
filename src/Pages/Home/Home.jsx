// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import ExtraSection from './ExtraSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;