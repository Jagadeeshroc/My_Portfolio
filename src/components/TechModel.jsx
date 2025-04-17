import React from 'react';
import { motion } from 'framer-motion';

const TechModal = ({ tech, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Just stop propagation here
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-64 lg:h-full">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">{tech.icon}</div>
              <h2 className="text-3xl font-bold text-white">{tech.name}</h2>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">My Expertise</h3>
              <p className="text-gray-300">{tech.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Projects</h3>
              <p className="text-gray-300">{tech.projects}</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">Key Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {tech.skills?.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
                {!tech.skills && (
                  <>
                    <li>Advanced concepts and best practices</li>
                    <li>Performance optimization</li>
                    <li>Integration with other technologies</li>
                    <li>Debugging and problem solving</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechModal;
