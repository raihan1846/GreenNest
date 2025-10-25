import React from 'react';
import { Link } from 'react-router';

const Card = ({item}) => {
    const {plantId} = item;
    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden">
        <figure className="px-4 pt-4">
            <img
                src={item.image}
                alt={item.plantName}
                className="rounded-xl h-64 w-full object-cover"
            />
        </figure>
        <div className="card-body">
            <div className="flex justify-between items-start">
                <h3 className="card-title text-green-800">{item.plantName}</h3>
                <div className="badge bg-amber-100 text-amber-800 border-0">{item.category}</div>
            </div>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <p className="text-lg font-bold text-green-700">${item.price}</p>
                    <div className="rating rating-sm mt-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <input
                                key={idx}
                                type="radio"
                                name={`rating-${item.plantId}`}
                                className={`mask mask-star-2 bg-orange-400`}
                                checked={idx < Math.floor(item.rating)}
                                readOnly
                            />
                        ))}
                        <span className="ml-2 text-gray-500">{item.rating}</span>
                    </div>
                </div>
                <Link to={`/card-details/${plantId}`} className="btn btn-success btn-outline transition-transform duration-200 hover:scale-105">
                    View Details
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Card;