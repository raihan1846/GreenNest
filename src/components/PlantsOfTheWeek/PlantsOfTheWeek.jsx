import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const PlantsOfTheWeek = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [plant, setPlant] = useState({});

  useEffect(() => {
    if (data && id) {
      const plantDetails = data.find((p) => p.plantId == id);
      setPlant(plantDetails || {});
    }
  }, [data, id]);

  

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Plant of the Week
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each week we feature a special plant with exclusive offers and detailed care guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-96 object-cover"
              />

              <div className="absolute top-4 right-4">
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                  25% OFF
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 text-center">
                <i className="fas fa-clock mr-2"></i>Offer Ends In
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
                  <div
                    key={i}
                    className="countdown-item bg-green-600 text-white rounded-lg py-3"
                  >
                    <div className="text-2xl font-bold">03</div>
                    <div className="text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-2">
                {plant.plantName}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="badge badge-primary bg-green-100 text-green-800 border-0 text-sm">
                  <i className="fas fa-leaf mr-1"></i>
                  {plant.category}
                </div>

                <div className="flex items-center">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked={i < plant.rating}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {plant.rating}.0 (128 reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-green-700">
                ${plant.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ${(plant.price * 1.2).toFixed(0)}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Save ${(plant.price * 0.2).toFixed(0)}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {plant.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: 'fas fa-wind text-green-600',
                  title: 'Air Purifying',
                  desc: 'Removes toxins from air',
                },
                {
                  icon: 'fas fa-sun text-amber-500',
                  title: 'Bright Indirect Light',
                  desc: 'Thrives in well-lit spaces',
                },
                {
                  icon: 'fas fa-tint text-blue-500',
                  title: 'Moderate Watering',
                  desc: 'Water when top soil is dry',
                },
                {
                  icon: 'fas fa-arrow-up text-green-600',
                  title: 'Fast Growing',
                  desc: 'Quick growth with proper care',
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="feature-card bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <i className={`${f.icon} text-lg mb-2`}></i>
                  <h4 className="font-semibold text-green-800">{f.title}</h4>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-seedling text-amber-600 text-xl"></i>
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Care Level: {plant.careLevel}
                  </h4>
                  <p className="text-sm text-amber-700">
                    Perfect for plant parents with some experience
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn btn-primary bg-green-700 border-green-700 text-white hover:bg-green-800 flex-1">
                <i className="fas fa-bolt mr-2"></i>
                Get This Week&apos;s Deal
              </button>
              <button className="btn btn-outline btn-success flex-1">
                <i className="fas fa-heart mr-2"></i>
                Add to Wishlist
              </button>
            </div>

            <div className="flex justify-between text-center border-t border-gray-200 pt-4">
              <div>
                <div className="text-green-700 font-bold">128</div>
                <div className="text-sm text-gray-600">Sold This Week</div>
              </div>
              <div>
                <div className="text-green-700 font-bold">94%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-green-700 font-bold">{plant.availableStock}</div>
                <div className="text-sm text-gray-600">Left in Stock</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why We Love This Plant</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            The {plant.plantName} is our plant of the week because of its
            stunning visual appeal and unique personality. It&apos;s the perfect
            statement piece for modern homes and offices.
          </p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              <span>Air Purifier</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              <span>Pet Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              <span>Comes with Care Guide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantsOfTheWeek;
