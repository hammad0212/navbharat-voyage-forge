import React, { useState } from 'react';
import { Mail, PhoneCall } from 'lucide-react';
import sarkehjroja from '../assets/sarkhejroja.jpg';

const states = [
  'Gujarat', 'Maharashtra', 'Rajasthan', 'Punjab', 'Karnataka',
  'Kerala', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Other',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
    state: '', pax: '', whatsapp: false, call: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    setFormData({
      name: '', email: '', phone: '', message: '',
      state: '', pax: '', whatsapp: false, call: false,
    });
  };

  return (
    <>
      {/* Contact Section */}
      <div className="relative w-full h-[700px] md:h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sarkehjroja})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-10 md:w-1/2 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-lg md:text-xl mb-8">Get in touch with us for any enquiries and questions</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="tel:9978615150" className="bg-blue-700 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition">
              <PhoneCall /> <span>(+91) 9978615150</span>
            </a>
            <a href="mailto:travelmergeinfo@gmail.com" className="bg-blue-700 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition">
              <Mail /> <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="absolute z-10 top-1/2 right-6 md:right-10 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">Want us to reach out to you?</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="pax"
                value={formData.pax}
                onChange={handleChange}
                placeholder="No. of Pax"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
              rows={3}
              placeholder="Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="whatsapp"
                  checked={formData.whatsapp}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm">Contact via WhatsApp</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="call"
                  checked={formData.call}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm">Contact via Call</span>
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

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[450px] my-8 px-4 md:px-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.010373263855!2d72.5306701!3d22.9958639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d99e948ab5%3A0x9bb283e847edeecc!2sTravel%20Merge%20Holidays!5e0!3m2!1sen!2sin!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
