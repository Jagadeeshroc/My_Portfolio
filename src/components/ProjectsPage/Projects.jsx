import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "./ProjectData";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Animation Variants for Staggered Loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each child by 0.1s
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of my recent work. Each project represents a journey of 
            solving complex problems with modern technologies.
          </p>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Extracted Component for cleaner code and better React rendering
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-gray-900">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          // PERFORMANCE: Lazy load images that aren't immediately visible
          loading="lazy" 
          // PERFORMANCE: Decode async to prevent UI freeze
          decoding="async"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <Link 
            to={`/projects/${project.id}`}
            className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-500"
          >
            View Details
          </Link>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h2>
          <div className="flex gap-3 text-gray-400">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-md text-xs font-medium bg-gray-700/50 text-blue-300 border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-gray-700/50 text-gray-400 border border-gray-600/50">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;