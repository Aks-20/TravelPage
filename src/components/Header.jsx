import React, { useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [showDestinations, setShowDestinations] = useState(false);

  const handleBookNow = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/destinations');
      setDestinations(response.data);
      setShowDestinations(true);
      console.log('Fetched destinations:', response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      alert('Failed to load destinations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDestinationSelect = (destination) => {
    console.log('Selected destination:', destination);
    // You can add more logic here, like navigation or booking flow
    alert(`You selected ${destination.name}, ${destination.country}!`);
    setShowDestinations(false);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/background.jpg')`, 
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
        <h1 className="text-5xl font-bold leading-tight max-w-2xl">
          Discover Your Next <br /> Adventure
        </h1>
        <p className="text-lg mt-4 max-w-xl">
          Choose from our curated experiences, customized for every kind of traveler.
        </p>
        <button 
          onClick={handleBookNow}
          disabled={loading}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-black text-xl font-semibold py-1 px-4 rounded-full shadow-md w-fit transition-colors duration-200"
        >
          {loading ? 'LOADING...' : 'BOOK NOW'}
        </button>
      </div>

      {/* Destinations Modal */}
      {showDestinations && (
        <div className="absolute inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Choose Your Destination</h3>
              <button
                onClick={() => setShowDestinations(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  onClick={() => handleDestinationSelect(destination)}
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <img
                    src={`/${destination.image}`}
                    alt={destination.name}
                    className="w-12 h-12 rounded object-cover mr-3"
                    loading="
                    lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{destination.name}</h4>
                    <p className="text-gray-600 text-sm">{destination.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;