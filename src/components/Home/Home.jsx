import React, { useEffect, useState } from 'react';
import Sliders from '../Sliders/Sliders';
import Cards from '../Cards/Cards';
import PlantCares from '../PlantCares/PlantCares';
import GreenExparts from '../GreenExparts/GreenExparts';

const Home = () => {
   
    return (
        <div>
            <Sliders></Sliders>
            <div className='w-11/12 mx-auto py-3'>
            <Cards></Cards>
            </div>
            <div>
                <PlantCares></PlantCares>
            </div>
            <div>
                <GreenExparts></GreenExparts>
            </div>
        </div>
    );
};

export default Home;