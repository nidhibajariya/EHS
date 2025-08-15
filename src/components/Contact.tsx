import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss your precision manufacturing requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Globe className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Website</h3>
                <p className="text-gray-600">www.ehsindustries.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Location</h3>
                <p className="text-gray-600">
                  EHS Industries<br />
                  Rajkot, Gujarat, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 XXXX XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-gray-600">info@ehsindustries.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="text-orange-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Support</h3>
                <p className="text-gray-600">
                  24/7 customer support for urgent requirements
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;