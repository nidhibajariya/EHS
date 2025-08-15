import React from 'react';
import { Car, Utensils, Settings, Droplet, Plane, Fuel } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Car className="text-orange-500" size={48} />,
      title: "Automotive",
      description: "High-precision components for automotive applications including engine parts, transmission components, and safety systems."
    },
    {
      icon: <Utensils className="text-green-500" size={48} />,
      title: "Food Industries",
      description: "Food-grade stainless steel components designed for hygiene and durability in food processing equipment."
    },
    {
      icon: <Settings className="text-blue-500" size={48} />,
      title: "General Engineering",
      description: "Versatile engineering components for various industrial applications requiring precision and reliability."
    },
    {
      icon: <Droplet className="text-cyan-500" size={48} />,
      title: "Pump & Valve",
      description: "Specialized components for pump and valve systems, engineered for optimal performance and longevity."
    },
    {
      icon: <Plane className="text-purple-500" size={48} />,
      title: "Aerospace",
      description: "Critical aerospace components meeting stringent quality standards and aerospace industry specifications."
    },
    {
      icon: <Fuel className="text-red-500" size={48} />,
      title: "Oil & Gas",
      description: "Robust components designed to withstand harsh conditions in oil and gas exploration and processing."
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our precision-manufactured components serve diverse industries with specialized requirements and exacting standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500"
            >
              <div className="flex justify-center mb-6">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-slate-800">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Industry Partnership</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Partner with us to leverage our industry expertise and precision manufacturing capabilities for your specific application needs.
            </p>
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;