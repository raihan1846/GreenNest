import React from 'react';

const GreenExpart = ({data}) => {
    return (
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6">
        
        <div className="">
            <div
              key={data.index}
              className="card bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100"
            >
              <figure className="px-8 pt-8">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-green-300 ring-offset-2">
                    <img src={data.img} alt={data.name} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-green-800">{data.name}</h3>
                <p className="text-gray-600">{data.role}</p>
                <p className="text-sm text-gray-500 mt-2">{data.desc}</p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-outline btn-success btn-sm">Contact</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    );
};

export default GreenExpart;