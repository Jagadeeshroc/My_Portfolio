import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "./ProjectData";
import { FiArrowLeft, FiGithub, FiExternalLink, FiPlay, FiCheck } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiRedux, SiTypescript, SiGraphql, SiTailwindcss, SiJavascript, SiPython } from "react-icons/si";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Project not found</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FiArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  // Technology icon mapping
  const techIcons = {
    'React': <SiReact className="w-6 h-6 text-cyan-400" />,
    'Node.js': <SiNodedotjs className="w-6 h-6 text-green-500" />,
    'MongoDB': <SiMongodb className="w-6 h-6 text-green-600" />,
    'Firebase': <SiFirebase className="w-6 h-6 text-amber-500" />,
    'Redux': <SiRedux className="w-6 h-6 text-purple-500" />,
    'TypeScript': <SiTypescript className="w-6 h-6 text-blue-500" />,
    'GraphQL': <SiGraphql className="w-6 h-6 text-pink-500" />,
    'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-cyan-300" />,
    'JavaScript': <SiJavascript className="w-6 h-6 text-yellow-400" />,
    'Python': <SiPython className="w-6 h-6 text-blue-400" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center mb-8 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <motion.span 
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            >
              <FiArrowLeft className="w-5 h-5" />
            </motion.span>
            Back to Projects
          </Link>
        </motion.div>

        {/* Main Project Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 mb-16"
        >
          {/* Project Image Gallery */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-r from-purple-500 to-pink-500 group"
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => window.open(project.video, '_blank')}
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiPlay className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Additional Images Grid */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {project.images.slice(1, 4).map((img, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-lg overflow-hidden aspect-square shadow-lg"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Project Details */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Project Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                {project.title}
              </h1>
              
              {/* Project Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {/* Project Metadata */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.date && (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Completed</p>
                    <p className="text-sm font-medium text-white">{project.date}</p>
                  </motion.div>
                )}
                {project.role && (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">My Role</p>
                    <p className="text-sm font-medium text-white">{project.role}</p>
                  </motion.div>
                )}
                {project.duration && (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-sm font-medium text-white">{project.duration}</p>
                  </motion.div>
                )}
                {project.status && (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Status</p>
                    <p className="text-sm font-medium text-white">{project.status}</p>
                  </motion.div>
                )}
              </div>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.div 
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-4 py-2 bg-gray-800 rounded-full border border-gray-700"
                    >
                      {techIcons[tech] || <SiJavascript className="w-5 h-5 text-gray-300 mr-2" />}
                      <span className="text-sm text-gray-300 ml-2">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <motion.a 
                    whileHover={{ y: -2 }}
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a 
                    whileHover={{ y: -2 }}
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </motion.a>
                )}
                {project.video && (
                  <motion.button 
                    whileHover={{ y: -2 }}
                    onClick={() => window.open(project.video, '_blank')}
                    className="flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  >
                    <FiPlay className="mr-2" />
                    Watch Demo
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mr-3"></span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-start p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700"
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Challenges Section */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mr-3"></span>
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -3 }}
                    className="p-6 bg-gray-800/50 rounded-xl border-l-4 border-cyan-500 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      <span className="text-cyan-400">Challenge:</span> {item.challenge}
                    </h3>
                    <p className="text-gray-300">
                      <span className="font-medium text-cyan-400">Solution:</span> {item.solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Gallery Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">
              Project Gallery
            </h2>
            {project.video && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(project.video, '_blank')}
                className="flex items-center px-5 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <FiPlay className="mr-2" />
                Watch Video Demo
              </motion.button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-xl overflow-hidden shadow-lg aspect-video"
              >
                <img 
                  src={img} 
                  alt={`${project.title} Screenshot ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <FiExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        {project.testimonials && project.testimonials.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 mr-3"></span>
                What People Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.testimonials.map((testimonial, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -3 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-pink-500/30"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-pink-500 to-purple-500 before:rounded-full">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Related Projects */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">More Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.relatedProjects.map((relatedId) => {
                const relatedProject = projects.find(p => p.id === relatedId);
                if (!relatedProject) return null;
                return (
                  <Link 
                    key={relatedId}
                    to={`/projects/${relatedId}`}
                    className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
                      <img 
                        src={relatedProject.images[0]} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-xl font-bold text-white">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5 bg-gray-800/50 border-t-0 border border-gray-700 group-hover:border-pink-500/30 transition-all duration-300">
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {relatedProject.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-12 rounded-2xl border border-gray-800"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Like what you see?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in working together or want to learn more about this project?
            I'd love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link 
              to="/projects" 
              className="flex items-center px-8 py-4 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;