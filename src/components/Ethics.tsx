import React from 'react';
import { CheckCircle, Shield, Users, AlertTriangle, Lock, Leaf } from 'lucide-react';

const Ethics = () => {
  const ethicsPoints = [
    {
      icon: <CheckCircle className="text-orange-500" size={24} />,
      title: "Fair Trade Practices",
      description: "Commitment to ethical business dealings and transparent transactions with all stakeholders"
    },
    {
      icon: <Shield className="text-blue-500" size={24} />,
      title: "Workplace Safety",
      description: "Ensuring a safe, secure, and healthy work environment for all employees and visitors"
    },
    {
      icon: <AlertTriangle className="text-red-500" size={24} />,
      title: "Zero Tolerance for Corruption",
      description: "Maintaining the highest standards of integrity and ethical conduct in all business operations"
    },
    {
      icon: <Lock className="text-purple-500" size={24} />,
      title: "Confidentiality",
      description: "Protecting sensitive information and intellectual property of clients and business partners"
    },
    {
      icon: <Leaf className="text-green-500" size={24} />,
      title: "Environmental Responsibility",
      description: "Commitment to sustainable manufacturing practices and environmental stewardship"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Ethics Policy</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our commitment to ethical business practices forms the foundation of everything we do.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicsPoints.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ethics;