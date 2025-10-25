import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookingForm from '../BookingForm/BookingForm';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [plants, setPlants] = useState({});
    useEffect(() => {
        const plantsDetails = data.find(plant => plant.plantId == id);
        // console.log(plantsDetails);
        setPlants(plantsDetails)
    }, [data, id])
    return (
        <div className='flex'>
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.plantName}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="mb-6">
                                <img
                                    src={plants.image}
                                    alt={plants.plantName}
                                    className="w-full h-80 object-cover rounded-xl"
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{plants.category}</h2>

                            <p className="text-gray-600 mb-6">{plants.description}</p>

                            <div className="flex flex-wrap items-center justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl font-bold text-indigo-600">$ {plants.price}</div>

                                    <div className="flex items-center">
                                        <div className="rating rating-sm">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <input
                                                    key={index}
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    checked={index < Math.floor(plants.rating)}
                                                    readOnly
                                                />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-gray-600">{plants.rating} ({plants.availableStock} reviews)</span>
                                    </div>
                                </div>

                                <div className={`badge badge-lg gap-2 ${plants.availableStock > 0 ? 'badge-success' : 'badge-error'}`}>
                                    {plants.availableStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-700 mb-2">Care Level:</h3>
                                <p className="text-gray-600 mb-2">{plants.careLevel}</p>

                                <h3 className="font-semibold text-gray-700 mb-2">Provider:</h3>
                                <p className="text-gray-600">{plants.providerName}</p>
                            </div>
                        </div>
                    </div>
            <BookingForm></BookingForm>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;
