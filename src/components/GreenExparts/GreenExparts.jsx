import React, { useEffect, useState } from 'react';
import GreenExpart from '../GreenExpart/GreenExpart';

const GreenExparts = () => {
    const [greenExpart, setGreenExpart] = useState([]);

    useEffect(() => {
        fetch("/exparts.json")
            .then((res) => res.json())
            .then((data) => setGreenExpart(data));
    }, []);
    return (
        <div className='mt-21'>
            <h1 className='text-center font-bold text-3xl text-green-400'>Meet Our Green Experts</h1> <br />
            <p className='text-center font-bold mb-10'>Our team of plant specialists is here to help you with all your plant care needs</p>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    greenExpart.map(data => <GreenExpart key={data.id} data={data}></GreenExpart>)

                }
            </div>
        </div>
    );
};

export default GreenExparts;