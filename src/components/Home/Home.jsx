import React from 'react';
import Sliders from '../Sliders/Sliders';
import Cards from '../Cards/Cards';

const Home = () => {
    
    return (
        <div>
            <Sliders></Sliders>
            <div className='w-11/12 mx-auto py-3'>
            <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;