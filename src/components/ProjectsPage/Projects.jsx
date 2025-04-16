import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "./ProjectData";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works. Each project represents unique challenges and solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="rounded-xl overflow-hidden shadow-2xl"
  >
    <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden group">
      <img 
        src={`${project.images[0]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`} 
        alt={project.title} 
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link 
          to={`/projects/${project.id}`}
          className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 font-bold py-2 px-6 rounded-full flex items-center transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
    
    <div className="bg-gray-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default Projects;