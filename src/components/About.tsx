import React from 'react';
import { MapPin, Calendar, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About EHS Industries</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Manufacturing facility" 
              className="rounded-lg shadow-xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              EHS Industries, established in 2021 and based in Rajkot, Gujarat, India, is a leading manufacturer 
              specializing in precision metal machined components, forged parts, and investment castings. Our expertise 
              encompasses a comprehensive range of high-grade materials including alloy steel, stainless steel, and mild steel.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We pride ourselves on adhering to global standards such as ASTM, DIN/EN, and IS, ensuring that our products 
              meet the highest international quality benchmarks. Our commitment to excellence is further demonstrated by our 
              ISO 9001:2015 certification, reflecting our dedication to quality management and customer satisfaction.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <Calendar className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-800">Established</h4>
                  <p className="text-gray-600">2021</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-gray-600">Rajkot, Gujarat, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-800">Certification</h4>
                  <p className="text-gray-600">ISO 9001:2015</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-800">Standards</h4>
                  <p className="text-gray-600">ASTM, DIN/EN, IS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;