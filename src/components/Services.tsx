import React from 'react';
import { Package, Hammer, RotateCcw, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Package className="text-orange-500" size={64} />,
      title: "Investment Casting",
      description: "Precision investment casting services for complex geometries and tight tolerances. Our advanced casting processes deliver superior surface finish and dimensional accuracy.",
      features: ["Complex geometries", "Tight tolerances", "Superior surface finish", "Various alloy compatibility"]
    },
    {
      icon: <Hammer className="text-red-500" size={64} />,
      title: "Forging",
      description: "High-strength forged components using advanced hot and cold forging techniques. Our forging processes enhance material properties and structural integrity.",
      features: ["Hot & cold forging", "Enhanced strength", "Improved grain structure", "Cost-effective production"]
    },
    {
      icon: <RotateCcw className="text-blue-500" size={64} />,
      title: "Bar Turned Parts",
      description: "Precision bar turning services for cylindrical components with excellent dimensional accuracy. Ideal for high-volume production with consistent quality.",
      features: ["High precision turning", "Excellent surface finish", "High-volume capability", "Consistent quality"]
    },
    {
      icon: <Cog className="text-green-500" size={64} />,
      title: "Metal Machined Components",
      description: "Advanced CNC machining for complex metal components. Our state-of-the-art equipment ensures precision and repeatability for critical applications.",
      features: ["CNC machining", "Complex geometries", "Multi-axis capability", "Quality assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Products & Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive manufacturing solutions tailored to meet your specific requirements with precision and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Custom Manufacturing Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Looking for a specific manufacturing process or custom solution? Our team can work with you to develop tailored approaches for your unique requirements.
            </p>
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;