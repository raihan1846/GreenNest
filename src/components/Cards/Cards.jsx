import React, { Suspense } from 'react';
import Card from '../Card/Card';
import { useLoaderData, useParams } from 'react-router';

const Cards = () => {
    const data = useLoaderData();
    const { id } = useParams();

    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-3xl text-green-400'>Top Rated Indoor Plants</h1> <br />
                <p className='text-center font-bold mb-10'>Our customers' favorite plants that bring beauty and clean air to any indoor space.</p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                {
                    data.map(item => <Card key={item.plantId} item={item} />)

                }
                </Suspense>
                
            </div>
        </div>
    );
};

export default Cards;