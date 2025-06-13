import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
const images = [
  { id: 1, url: '/1.jpg',Caption:"Jammu & Kashmir Starting from ₹4999/-"},
  { id: 2, url: '/2.jpg', Caption:" Himachal pradesh Starting from ₹4999/-" },
  { id: 3, url: '/3.jpg', Caption:"Goa Starting from ₹4999/- " },
  { id: 4, url: '/7.jpg', Caption:"ASSAM Starting from ₹4999/- " },
  { id: 5, url: '/5.jpg', Caption:"MAHARASHTRA Starting from ₹4999/- " },
  { id: 6, url: '/6.jpg', Caption:"KERELA Starting from ₹4999/- " },
];
const Hero = () => {
  return (
    <>
<div className='text-blue-400 text-3xl mt-8'>
     <h1  >
Explore Most Popular Destinations
    </h1>
    
</div>
<div className=' text-gray-600 font-thin text-sm'>
<span>
Plan your perfect trip with our most loved and best-selling

tour packages.
</span>

      
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
          
          {/* View Button */}
        
        </div>
      </div>
        ))}
      </div>
    <div className="mt-8 flex justify-end gap-4">
  <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition flex items-center gap-2">
    <ArrowLeft size={18} />
    
  </button>
  <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition flex items-center gap-2">
    
    <ArrowRight size={18} />
  </button>
</div>
    </div>


    </>
  )
}

export default Hero