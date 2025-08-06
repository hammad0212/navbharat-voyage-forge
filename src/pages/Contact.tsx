import React, { useState } from 'react';
import {
  Mail, PhoneCall,
} from 'lucide-react';
import sarkehjroja from '../assets/sarkhejroja.jpg';

const states = [
  'Gujarat', 'Maharashtra', 'Rajasthan', 'Punjab', 'Karnataka',
  'Kerala', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Other',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
    state: '', whatsapp: false, call: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sarkehjroja})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-10 md:w-1/2 w-full">
        <h1 className="text-5xl font-bold mb-4">Contact us</h1>
        <p className="text-xl mb-8">Get in touch with us for any enquiries and questions</p>
        <div className="flex gap-6">
          <a href="tel:18002339008" className="bg-blue-700 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition">
            <PhoneCall /> <span>1800 233 9008</span>
          </a>
          <a href="mailto:info@travelmerge.in" className="bg-blue-700 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition">
            <Mail /> <span>Email Us</span>
          </a>
        </div>
      </div>

      {/* Contact Form on Right Side */}
      <div className="absolute top-28 right-10 z-20 bg-white w-full max-w-xl p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Want us to Reach out you?</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="state"
              placeholder="Country"
              value={formData.state}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="No. of Pax"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="tourType"
              value={formData.state}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Where to go?</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Contact via WhatsApp</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="call"
                checked={formData.call}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Contact via Call</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
