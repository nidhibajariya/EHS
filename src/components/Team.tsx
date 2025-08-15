import React from 'react';
import { Users, Cog, Award, TrendingUp } from 'lucide-react';

const Team = () => {

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Team Strength</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Users className="text-orange-500 mr-4" size={48} />
              <h3 className="text-2xl font-semibold text-slate-800">Our Expert Team</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              Our team comprises highly skilled engineers, technicians, and quality assurance professionals with extensive 
              experience in precision manufacturing. Each team member brings specialized expertise in metallurgy, machining 
              processes, investment casting, and forging techniques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              With advanced technical qualifications and continuous professional development, our workforce is equipped with 
              the latest industry knowledge and best practices. This ensures that every project benefits from cutting-edge 
              expertise and innovative problem-solving approaches.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Cog className="text-orange-500 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-slate-800">Technical Excellence</h4>
                <p className="text-sm text-gray-600">Advanced engineering expertise</p>
              </div>
              <div className="text-center">
                <Award className="text-orange-500 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-slate-800">Quality Focus</h4>
                <p className="text-sm text-gray-600">Rigorous quality standards</p>
              </div>
              <div className="text-center">
                <TrendingUp className="text-orange-500 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-slate-800">Continuous Growth</h4>
                <p className="text-sm text-gray-600">Ongoing skill development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;