import React, { useEffect, useState } from "react";
import axios from "axios";

const packages = [
  {
    title: "GOLDEN TEMPLE TOUR",
    image: "/golden-temple.jpg",
  },
  {
    title: "AMAZING KERELA TOUR",
    image: "/kerala.jpg",
  },
  {
    title: "KASHMIR HOLIDAY TOUR",
    image: "/Kashmir.jpg",
  },
  {
    title: "RAJASTHAN TOUR",
    image: "/Rajasthan.jpg",
  },
  {
    title: "TRIP TO GOA",
    image: "/Goa.jpg",
  },
  {
    title: "NAINTAL ESCAPE",
    image: "/Nanital.jpg",
  },
];

const TourPackages = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/destinations");
        setDestinations(res.data);
        console.log("Fetched destinations:", res.data); // Optional: to view in console
      } catch (err) {
        console.error("Error fetching destinations:", err);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-teal-700">Top Selling Tour Packages of India</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with our latest news and happenings through Informe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-48 w-full object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 flex flex-col items-center space-y-4">
              <h3 className="text-teal-700 font-semibold text-center">{pkg.title}</h3>
              <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full font-medium">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
