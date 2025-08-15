import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">EHS Industries</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of precision metal machined components, forged parts, 
              and investment castings. Committed to excellence, quality, and customer satisfaction 
              since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Vision & Mission', 'Core Values', 'Team', 'Materials', 'Industries'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase().replace(/\s+/g, '').replace('&', '')}`);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="text-orange-400" size={16} />
                <span className="text-gray-400 text-sm">Rajkot, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-orange-400" size={16} />
                <span className="text-gray-400 text-sm">+91 XXXX XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-orange-400" size={16} />
                <span className="text-gray-400 text-sm">info@ehsindustries.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EHS Industries. All rights reserved. | ISO 9001:2015 Certified
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;