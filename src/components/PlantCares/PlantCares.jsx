import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantCare from '../PlantCare/PlantCare';

const PlantCares = () => {
    const [plantsCare, setPlantsCare] = useState([]);

    useEffect(() => {
        fetch("/plantCare.json")
            .then((res) => res.json())
            .then((data) => setPlantsCare(data));
    }, []);
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-green-400'>Top Rated Indoor Plants</h1> <br />
            <p className='text-center font-bold mb-10'>Our customers' favorite plants that bring beauty and clean air to any indoor space.</p>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    plantsCare.map(data => <PlantCare key={data.id} data={data}></PlantCare>)

                }
            </div>
        </div>
    );
};

export default PlantCares;