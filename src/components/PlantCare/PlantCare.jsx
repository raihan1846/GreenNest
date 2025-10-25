import React from 'react';

const PlantCare = ({data}) => {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
      <figure className="px-6 pt-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
          <img src={data.icon} alt={data.title} className="w-10 h-10 object-contain" />
        </div>
      </figure>
      <div className="card-body text-center">
        <h3 className="text-green-800 text-lg text-center font-semibold">{data.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-ghost text-green-700 hover:bg-green-50">
            Read More
          </button>
        </div>
      </div>
    </div>
    
    );
};

export default PlantCare;   