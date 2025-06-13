import React from 'react';

const testimonials = [
  {
    id: 1,
    image: '/avatar1.jpg',
    text: 'This platform has transformed the way we plan our trips. Highly recommended for seamless and memorable journeys!',
    name: 'Sarah Williams',
    company: 'Travel Blogger'
  },
  {
    id: 2,
    image: '/avatar2.jpg',
    text: 'Exceptional service and beautiful destinations. The experience was smooth from booking to return.',
    name: 'David Kim',
    company: 'Marketing Lead, Wanderlust Inc.'
  },
  {
    id: 3,
    image: '/avatar3.jpg',
    text: 'User-friendly and packed with amazing packages. My family had a great vacation thanks to them!',
    name: 'Alicia Stone',
    company: 'Lifestyle Influencer'
  }
];

const Testimonials = () => {
  return (
    <div className="py-12 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">What Our Travelers Say</h2>

      <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-lg p-6 min-w-[300px] max-w-sm snap-start transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
            />
            <p className="text-gray-600 text-sm md:text-base italic mb-4 text-center">"{testimonial.text}"</p>
            <h4 className="text-lg font-semibold text-center text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-center text-gray-500">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
