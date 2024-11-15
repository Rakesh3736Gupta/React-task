import Footer from "../components/Footer";
import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[200px] md:h-[300px] lg:h-[400px]">
        <img
          src="./Contact3.svg"
          alt="Contact Us Hero"
          className="w-full h-full object-cover brightness-50"
          width="300" // Adjusted width for smaller size
          height="200" // Adjusted height for smaller size
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="flex-grow bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MdEmail className="h-6 w-6 text-indigo-600" />
                  <span>support@yourecommerce.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhone className="h-6 w-6 text-indigo-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdLocationOn className="h-6 w-6 text-indigo-600" />
                  <span>123 E-commerce St, Web City, 12345</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Business Hours
                </h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
