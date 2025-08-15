import React from 'react';
import { TestTube, Zap, Activity, Search, Shield } from 'lucide-react';

const Testing = () => {
  const testingServices = [
    {
      icon: <TestTube className="text-orange-500" size={48} />,
      title: "Hardness Testing",
      description: "Comprehensive hardness testing using Rockwell, Brinell, and Vickers methods to ensure material properties meet specifications."
    },
    {
      icon: <Zap className="text-yellow-500" size={48} />,
      title: "Tensile Testing",
      description: "Accurate tensile strength testing to determine yield strength, ultimate tensile strength, and elongation properties."
    },
    {
      icon: <Activity className="text-red-500" size={48} />,
      title: "Impact Testing",
      description: "Charpy and Izod impact testing to evaluate material toughness and resistance to sudden loading conditions."
    },
    {
      icon: <Search className="text-blue-500" size={48} />,
      title: "PMI Testing",
      description: "Positive Material Identification using advanced spectroscopy to verify chemical composition and material grade."
    }
  ];

  const ndtMethods = [
    {
      method: "UT",
      fullName: "Ultrasonic Testing",
      description: "High-frequency sound waves to detect internal defects and measure material thickness."
    },
    {
      method: "RT",
      fullName: "Radiographic Testing",
      description: "X-ray or gamma-ray imaging to reveal internal discontinuities and structural integrity."
    },
    {
      method: "MPI",
      fullName: "Magnetic Particle Inspection",
      description: "Magnetic field application to detect surface and near-surface defects in ferromagnetic materials."
    },
    {
      method: "PT",
      fullName: "Penetrant Testing",
      description: "Liquid penetrant application to identify surface-breaking defects in non-porous materials."
    }
  ];

  return (
    <section id="testing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Inspection & Testing</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive testing and inspection services to ensure every component meets the highest quality standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-slate-800 mb-8">Material Testing Services</h3>
            {testingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-slate-800 mb-8">Non-Destructive Testing (NDT)</h3>
            {ndtMethods.map((ndt, index) => (
              <div 
                key={index}
                className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 mb-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="text-orange-500" size={32} />
                  <div>
                    <h4 className="text-xl font-semibold text-orange-400">
                      {ndt.method} - {ndt.fullName}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {ndt.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Quality Assurance Certification</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              All our testing procedures are ISO 9001:2015 compliant, ensuring reliable and accurate results for your critical applications.
            </p>
            <button className="px-8 py-3 bg-white text-blue-500 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300">
              Download Test Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;