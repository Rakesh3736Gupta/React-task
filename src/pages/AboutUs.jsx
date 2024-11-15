import Footer from "../components/Footer";
import React from "react";
import {
  MdShoppingCart,
  MdSupportAgent,
  MdLocalShipping,
  MdStar,
} from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src="./About.svg"
          alt="About Us Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            About Our Store
          </h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="flex-grow bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-black">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our e-commerce store has been dedicated to
                providing high-quality products and exceptional customer
                service. We started as a small family business and have grown
                into a trusted online retailer, serving customers worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to make online shopping easy, enjoyable, and
                accessible to everyone. We carefully curate our product
                selection to ensure we offer the best items at competitive
                prices.
              </p>
            </div>
            <div className="order-first md:order-last mb-8 md:mb-0">
              <img
                src="./Team.svg"
                alt="Our Team"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<MdShoppingCart className="w-12 h-12 text-indigo-600" />}
                title="Quality Products"
                description="We source and offer only the best products to ensure customer satisfaction."
              />
              <ValueCard
                icon={<MdSupportAgent className="w-12 h-12 text-indigo-600" />}
                title="Customer Service"
                description="Our dedicated support team is always ready to assist you with any questions or concerns."
              />
              <ValueCard
                icon={<MdLocalShipping className="w-12 h-12 text-indigo-600" />}
                title="Fast Shipping"
                description="We partner with reliable shipping providers to ensure your orders arrive quickly and safely."
              />
              <ValueCard
                icon={<MdStar className="w-12 h-12 text-indigo-600" />}
                title="Customer Satisfaction"
                description="Your happiness is our priority. We strive to exceed your expectations in every interaction."
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Ready to Start Shopping?
            </h2>
            <p className="text-gray-600 mb-8">
              Explore our wide range of products and find exactly what you're
              looking for.
            </p>
            <a
              href="/products"
              className="bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
