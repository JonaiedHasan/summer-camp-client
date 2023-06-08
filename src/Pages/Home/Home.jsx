// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;