import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, TrendingUp, Truck } from "lucide-react"; // Import icons from lucide-react
import Footer from "../components/Footer";
import Products from "./Products";

// import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50  overflow-x-hidden">
        {/* Welcome Section */}
        <div className="container mx-auto p-6 md:p-12 text-center ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Welcome to Grocery App
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black">
            Discover fresh groceries delivered straight to your doorstep. Check
            out our products!
          </p>
        </div>

        {/* Promotional Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-2 text-purple-600">
                  <ShoppingBag className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    New Collection
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Summer Sale <br />
                  <span className="text-purple-600">Up to 50% Off</span>
                </h1>
                <p className="max-w-lg text-lg md:text-xl text-gray-600">
                  Discover our latest collection of trendy products. From
                  fashion to electronics, we've got everything you need for the
                  summer season.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Browse Products
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="mt-6 flex items-center space-x-6 divide-x divide-gray-200 text-sm font-medium text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 pl-6">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span>1000+ Sales</span>
                  </div>
                  <div className="flex items-center space-x-2 pl-6">
                    <Truck className="h-5 w-5 text-blue-500" />
                    <span>Free Shipping</span>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative hidden lg:block">
                <img
                  src="./Ecommerce web page-amico.svg"
                  alt="Featured product"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50"></div>

      <Products />
      <Footer />
    </>
  );
}

export default Home;
