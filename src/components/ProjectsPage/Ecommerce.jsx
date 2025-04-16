import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EcommerceProject = () => {
    const { slug } = useParams();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-80 bg-gradient-to-r from-purple-500 to-pink-500">
                <img 
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <a 
                    href="https://youtu.be/vETF_078JRE?si=RiPJj5LidyzHv9la" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 font-bold py-2 px-6 rounded-full flex items-center transition-all hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Watch Full Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                E-commerce Platform
              </h1>
              
              <p className="text-lg text-gray-300 mb-6">
                A full-featured online store with product listings, cart functionality, and secure checkout process. 
                Implemented user authentication and payment gateway integration.
              </p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS", "Redux", "JWT Auth"].map((tech, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  to="/ecommerce-demo" 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all"
                >
                  Live Demo
                </Link>
                <Link 
                  to="/ecommerce-source" 
                  className="px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details Sections */}
        <div className="space-y-16">
          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Product catalog with categories and filters",
                "Shopping cart with persistent storage",
                "User authentication (login/register)",
                "Secure checkout with Stripe integration",
                "Order history and tracking",
                "Admin dashboard for product management",
                "Responsive design for all devices",
                "Product reviews and ratings"
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Screenshots Section */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </span>
              Screenshots
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ].map((img, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden shadow-lg h-48">
                  <img 
                    src={img} 
                    alt={`E-commerce Screenshot ${i+1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/screenshot/${i+1}`} className="bg-white text-gray-900 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenges Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </span>
              Challenges & Solutions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  challenge: "Managing complex state across multiple components",
                  solution: "Implemented Redux for centralized state management, creating reusable action creators and reducers"
                },
                {
                  challenge: "Secure payment processing",
                  solution: "Integrated Stripe API with tokenization to ensure no sensitive payment data touches our servers"
                },
                {
                  challenge: "Performance with large product catalogs",
                  solution: "Implemented pagination and lazy loading of product images, reducing initial load time by 60%"
                },
                {
                  challenge: "Cart persistence across sessions",
                  solution: "Used localStorage for guest users and database storage for authenticated users with synchronization"
                }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="font-medium text-pink-400 mb-2">Challenge: {item.challenge}</h3>
                  <p className="text-gray-300">Solution: {item.solution}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default EcommerceProject;