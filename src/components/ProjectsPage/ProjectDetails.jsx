import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./ProjectData";
import { FiArrowLeft, FiGithub, FiExternalLink, FiX, FiZoomIn, FiCheck } from "react-icons/fi"; 
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiRedux, SiTypescript, SiTailwindcss, SiJavascript, SiPython } from "react-icons/si";

// Static Data Moved Outside Component
const TECH_ICONS = {
  'React': <SiReact className="w-5 h-5 text-cyan-400" />,
  'Node.js': <SiNodedotjs className="w-5 h-5 text-green-500" />,
  'MongoDB': <SiMongodb className="w-5 h-5 text-green-600" />,
  'Firebase': <SiFirebase className="w-5 h-5 text-amber-500" />,
  'Redux': <SiRedux className="w-5 h-5 text-purple-500" />,
  'TypeScript': <SiTypescript className="w-5 h-5 text-blue-500" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-cyan-300" />,
  'JavaScript': <SiJavascript className="w-5 h-5 text-yellow-400" />,
  'Python': <SiPython className="w-5 h-5 text-blue-400" />
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  
  // --- FIX 1: Robust ID Matching & Debugging ---
  // We convert both IDs to String() to ensure "1" equals 1
  const project = projects?.find(p => String(p.id) === String(projectId));

  // Debugging: Check your console (F12) to see if data is loading correctly
  useEffect(() => {
    if (!project) {
      console.warn(`Project with ID "${projectId}" not found. Available IDs:`, projects.map(p => p.id));
    }
  }, [projectId, project]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Handle Body Scroll Locking safely
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  // --- FIX 2: Graceful 404 Handling ---
  // Instead of crashing or redirecting, we show a clear "Not Found" message
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Project with ID <span className="text-purple-400 font-mono">{projectId}</span> not found.</p>
          <Link to="/projects" className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors z-50"
            >
              <FiX className="w-6 h-6" />
            </button>

            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center mb-10 text-gray-400 hover:text-white transition-colors group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group cursor-pointer bg-gray-800"
              onClick={() => setSelectedImage(project.images[0])}
            >
              {project.images && project.images.length > 0 ? (
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  fetchPriority="high" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
              )}
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                  <FiZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {project.images.slice(1, 5).map((img, index) => (
                  <div 
                    key={index}
                    className="relative rounded-lg overflow-hidden aspect-video cursor-pointer border border-gray-800 hover:border-purple-500/50 transition-colors bg-gray-800"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-2/5 flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech}
                  className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full border border-gray-700 text-sm text-gray-300 cursor-default"
                >
                  {TECH_ICONS[tech] || <span className="w-2 h-2 rounded-full bg-gray-500 mr-2" />}
                  <span className="ml-2">{tech}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all transform hover:-translate-y-0.5"
                >
                  <FiGithub className="mr-2" /> Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features & Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 p-8 rounded-3xl border border-gray-800"
          >
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiCheck className="mr-3 text-purple-500" /> Key Features
            </h2>
            <ul className="space-y-4">
              {project.features?.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {project.challenges && project.challenges.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/30 p-8 rounded-3xl border border-gray-800"
            >
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-pink-500 mr-3">⚡</span> Challenges
              </h2>
              <div className="space-y-6">
                {project.challenges.map((item, i) => (
                  <div key={i} className="bg-gray-800/50 p-4 rounded-xl">
                    <h3 className="text-white font-medium mb-2">{item.challenge}</h3>
                    <p className="text-sm text-gray-400 border-l-2 border-pink-500 pl-3">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Gallery View</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images?.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "100px" }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3] bg-gray-800"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full">
                    <FiZoomIn className="w-6 h-6" /> 
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        {project.relatedProjects?.length > 0 && (
          <section className="border-t border-gray-800 pt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.relatedProjects.map((relatedId) => {
                const related = projects.find(p => String(p.id) === String(relatedId));
                if (!related) return null;
                return (
                  <Link 
                    key={relatedId} 
                    to={`/projects/${relatedId}`}
                    className="block group bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500/50 transition-all"
                  >
                    <div className="h-48 overflow-hidden bg-gray-700">
                      <img 
                        src={related.images[0]} 
                        alt="" 
                        loading="lazy" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold group-hover:text-purple-400 transition-colors">{related.title}</h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;