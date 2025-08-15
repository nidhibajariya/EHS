import React from 'react';
import { Eye, Target, Compass } from 'lucide-react';

const Vision = () => {
  const cards = [
    {
      icon: <Eye className="text-orange-500" size={48} />,
      title: "Vision",
      content: "To be a globally recognized leader in precision manufacturing, setting industry benchmarks through innovative solutions, superior quality, and sustainable practices that drive technological advancement and customer success."
    },
    {
      icon: <Target className="text-blue-500" size={48} />,
      title: "Mission",
      content: "To deliver exceptional precision metal machined components, forged parts, and investment castings that exceed customer expectations through continuous innovation, rigorous quality standards, and unwavering commitment to excellence."
    },
    {
      icon: <Compass className="text-green-500" size={48} />,
      title: "Core Purpose",
      content: "To empower industries worldwide through precision engineering solutions that enhance operational efficiency, ensure reliability, and contribute to the advancement of manufacturing excellence across diverse sectors."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Vision, Mission & Core Purpose</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500"
            >
              <div className="flex justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-slate-800">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;