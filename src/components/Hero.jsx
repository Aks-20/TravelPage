import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import axios from 'axios';

const images = [
  { id: 1, url: '/1.jpg', Caption: "Jammu & Kashmir Starting from ₹4999/-" },
  { id: 2, url: '/2.jpg', Caption: " Himachal pradesh Starting from ₹4999/-" },
  { id: 3, url: '/3.jpg', Caption: "Goa Starting from ₹4999/- " },
  { id: 4, url: '/7.jpg', Caption: "ASSAM Starting from ₹4999/- " },
  { id: 5, url: '/5.jpg', Caption: "MAHARASHTRA Starting from ₹4999/- " },
  { id: 6, url: '/6.jpg', Caption: "KERELA Starting from ₹4999/- " },
];

const Hero = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to fetch top-selling packages
  const fetchTopSellingPackages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/packages/top-selling');
      setPackages(response.data);
      setShowPackages(true);
      console.log('Fetched packages:', response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
      alert('Failed to load packages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle left arrow (previous image)
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle package selection
  const handlePackageSelect = (pkg) => {
    console.log('Selected package:', pkg);
    alert(`You selected ${pkg.title} for ${pkg.destination} at ₹${pkg.price}!`);
    setShowPackages(false);
  };

  return (
    <>
      <div className='text-blue-400 text-3xl mt-8'>
        <h1>Explore Most Popular Destinations</h1>
      </div>
      <div className='text-gray-600 font-thin text-sm'>
        <span>Plan your perfect trip with our most loved and best-selling tour packages.</span>
      </div>
      
      <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img.url}
                loading="lazy"
                className="w-full h-56 object-cover rounded-t-2xl"
                alt={img.Caption}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{img.Caption}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={handlePreviousImage}
            className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition flex items-center gap-2"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={fetchTopSellingPackages}
            disabled={loading}
            className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 disabled:bg-yellow-300 transition flex items-center gap-2"
          >
            {loading ? 'Loading...' : <ArrowRight size={18} />}
          </button>
        </div>
      </div>

      {/* Packages Modal */}
      {showPackages && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Top Selling Packages</h3>
              <button
                onClick={() => setShowPackages(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  onClick={() => handlePackageSelect(pkg)}
                  className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-200"
                >
                  <img
                    src={`/${pkg.image}`}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-package.jpg'; // Fallback image
                    }}
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{pkg.title}</h4>
                    <p className="text-gray-600 mb-2">📍 {pkg.destination}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">₹{pkg.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500"></span>
                        <span className="text-sm text-gray-600 ml-1">{pkg.rating}</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero