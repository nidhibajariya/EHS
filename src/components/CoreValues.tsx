import React from 'react';
import { Shield, Star, Users, CheckCircle, Lightbulb, Heart, Leaf } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Shield className="text-orange-500" size={40} />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions."
    },
    {
      icon: <Star className="text-yellow-500" size={40} />,
      title: "Excellence",
      description: "We strive for superior quality and continuous improvement in everything we do."
    },
    {
      icon: <Users className="text-blue-500" size={40} />,
      title: "Customer Focus",
      description: "We are dedicated to understanding and exceeding our customers' expectations and needs."
    },
    {
      icon: <CheckCircle className="text-green-500" size={40} />,
      title: "Accountability",
      description: "We take responsibility for our actions and deliver on our commitments consistently."
    },
    {
      icon: <Lightbulb className="text-purple-500" size={40} />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to drive progress and growth."
    },
    {
      icon: <Heart className="text-red-500" size={40} />,
      title: "Respect for People",
      description: "We value diversity, foster inclusivity, and treat everyone with dignity and respect."
    },
    {
      icon: <Leaf className="text-green-600" size={40} />,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices and sustainable manufacturing."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide our decisions and shape our culture at EHS Industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;