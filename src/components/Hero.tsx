import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(71, 85, 105, 0.8)), url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920')`
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            EHS Industries
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-orange-400 font-semibold animate-fade-in-up animation-delay-300">
            Precision. Innovation. Excellence.
          </p>
          <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Manufacturer of precision metal machined components and global service provider for forged parts, 
            investment castings, and bar materials. ISO 9001:2015 certified.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-900"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;