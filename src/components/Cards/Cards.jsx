import React, { Suspense, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData, useParams } from 'react-router';

const Cards = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plants.json")
          .then((res) => res.json())
          .then((data) => setPlants(data));
      }, []);

    return (
        <div className='w-11/12 mx-auto py-4'>
            <div>
                <h1 className='text-center font-bold text-3xl text-green-400'>Top Rated Indoor Plants</h1> <br />
                <p className='text-center font-bold mb-10'>Our customers' favorite plants that bring beauty and clean air to any indoor space.</p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                {
                    plants.map(item => <Card key={item.plantId} item={item} />)

                }
                </Suspense>
                
            </div>
            <div className='flex justify-center items-center mt-10'>
             <button className="btn btn-success btn-outline transition-transform duration-200 px-12 hover:scale-105">
                    All Plants
                </button>
            </div>
        </div>
    );
};

export default Cards;