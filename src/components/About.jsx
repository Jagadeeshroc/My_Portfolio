import React, { useRef, useState, useEffect, useMemo } from "react";
import { 
  FaReact, FaNodeJs, FaDatabase, FaGraduationCap, FaCode, FaRocket,
  FaBrain, FaLightbulb, FaUniversity, FaLaptopCode, FaProjectDiagram,
  FaAward, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaPython,
  FaChevronLeft, FaChevronRight, FaTimes
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiTypescript,
  SiRedux, SiGraphql, SiNextdotjs, SiFirebase, SiDocker
} from "react-icons/si";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechModel from "./TechModel";

// --- DATA MOVED OUTSIDE COMPONENT FOR MEMORY OPTIMIZATION ---
const TECH_STACK = [
  { 
    name: "React", 
    icon: <FaReact className="text-blue-400" />, 
    color: "bg-blue-100",
    description: "Advanced React patterns including hooks, context API, and performance optimization techniques.",
    projects: "Built 10+ applications using React with complex state management",
    // OPTIMIZED: Reduced width from 1350 to 500
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-green-500" />, 
    color: "bg-green-100",
    description: "Server-side JavaScript with Express, REST API development, and authentication systems.",
    projects: "Created scalable backend services for multiple production applications",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="text-blue-600" />, 
    color: "bg-blue-50",
    description: "Type-safe JavaScript development with interfaces, generics, and advanced type patterns.",
    projects: "Migrated multiple projects from JavaScript to TypeScript",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  { 
    name: "MongoDB", 
    icon: <FaDatabase className="text-green-600" />, 
    color: "bg-green-50",
    description: "NoSQL database design, aggregation pipelines, and performance optimization.",
    projects: "Designed database schemas for multiple applications with complex relationships",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    color: "bg-orange-100",
    description: "Semantic and accessible markup for structuring modern web applications.",
    projects: "Created 30+ responsive layouts and landing pages",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    color: "bg-blue-100",
    description: "Styling techniques with Flexbox, Grid, animations, and responsive design.",
    projects: "Styled numerous websites with dynamic and consistent design systems",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    color: "bg-cyan-100",
    description: "Utility-first CSS framework for rapid UI development with consistent design.",
    projects: "Built full-featured web apps with modern, responsive Tailwind components",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500" />,
    color: "bg-purple-100",
    description: "Responsive design and UI components using the Bootstrap framework.",
    projects: "Developed dashboards and prototypes using Bootstrap utilities and components",
    image: "https://images.unsplash.com/photo-1607799275518-d6e690d7b0b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    color: "bg-yellow-100",
    description: "Proficient in ES6+, asynchronous programming, and DOM manipulation.",
    projects: "Implemented interactive features in web apps and solved algorithm challenges",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500" />,
    color: "bg-yellow-100",
    description: "Experience in scripting, automation, data analysis, and backend logic.",
    projects: "Built CLI tools, APIs, and scripts for automation and productivity",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const EDUCATION_DATA = [
  {
    degree: "Bachelor of Technology in Computer Science",
    University: "Sri Krishnadevaraya University",
    institution: "JCNRM Degree College",
    year: "2021 - 2024",
    icon: <FaUniversity className="text-purple-500" />,
    description: "Specialized in Web Technologies and Software Architecture with 70%",
    highlights: ["Focus on COMPUTER SCIENCE, ELECTRONICS, MATHEMATICS"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "JCNRM Junior College",
    year: "2018 - 2020",
    icon: <FaGraduationCap className="text-blue-500" />,
    description: "Focus on Mathematics and Computer Science with 6.34 GPA",
    highlights: ["MATHEMATICS, PHYSICS, CHEMISTRY"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const ACHIEVEMENTS_DATA = [
  {
    title: "Web Development Internship",
    description: "Gained practical experience in web development and agile methodologies",
    icon: <FaLaptopCode className="text-indigo-500" />,
    count: "1500+"
  },
  {
    title: "Python Internship",
    description: "Learned fundamentals of python programming and data structures",
    icon: <FaAward className="text-red-500" />,
    count: "3 Months"
  },
  {
    title: "Coding Practice",
    description: "Intensive hands-on development experience across multiple domains",
    icon: <FaCode className="text-indigo-500" />,
    count: "6000+ Hrs"
  },
  {
    title: "Projects",
    description: "Diverse portfolio including complex full-stack applications",
    icon: <FaProjectDiagram className="text-purple-500" />,
    count: "15+"
  },
  {
    title: "Problem Solver",
    description: "Exceptional algorithmic thinking with LeetCode solutions",
    icon: <FaBrain className="text-yellow-500" />,
    count: "500+"
  },
  {
    title: "Quick Learner",
    description: "Adaptable to new technologies with online courses",
    icon: <FaRocket className="text-green-500" />,
    count: "100+ Hrs"
  }
];

const COLLEGE_MEMORIES = [
  {
    title: "Data Representation",
    description: "Developed AI-based solution for Data Representation project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    year: "2022"
  },
  {
    title: "Web Development",
    description: "Gained practical experience in web development and agile methodologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    year: "2023"
  },
  {
    title: "Python Internship",
    description: "Learned fundamentals of python programming and data structures",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    year: "2023"
  }
];

const About = () => {
  const achievementsContainerRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true // OPTIMIZATION: Only animate once to save resources
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Simplified Scroll Logic using native behavior
  const scrollAchievements = (direction) => {
    const container = achievementsContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 sm:px-6 py-12 md:px-20 lg:px-40 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        
        {/* --- Personal Intro Card --- */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-16 sm:mb-24 relative"
        >
          {/* Reduced blur radius for performance */}
          <div className="hidden sm:block absolute -top-20 -left-20 w-64 h-64 bg-blue-900/30 rounded-full blur-2xl"></div>
          <div className="hidden sm:block absolute -bottom-20 -right-20 w-64 h-64 bg-purple-900/30 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative group w-full lg:w-1/2"
            >
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl z-10">
                <img 
                  src="/assets/IMG_20250621_131258.png"
                  alt="Jagadeesh Vanganooru"
                  // LCP Image: Eager load, high priority
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Jagadeesh Vanganooru</h1>
                  <div className="text-xs sm:text-base md:text-lg text-blue-300 font-mono">Full-Stack Developer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="w-full lg:w-1/2 bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-700/50"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Innovative Developer
                </span> & Problem Solver
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  My journey in computer science has equipped me with both theoretical knowledge 
                  and practical skills to build robust, scalable applications.
                </p>
                <p>
                  With a strong foundation in data structures and algorithms, I approach problems 
                  methodically. My experience spans across multiple domains including web development.
                </p>
                <p>
                  Beyond coding, I'm an avid learner constantly exploring new technologies. 
                  I believe in writing clean, maintainable code that stands the test of time.
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-xl border border-gray-600/30">
                  <div className="text-sm sm:text-base text-blue-400 font-bold">Experience</div>
                  <div className="text-lg sm:text-xl text-white">Fresher</div>
                </div>
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-xl border border-gray-600/30">
                  <div className="text-sm sm:text-base text-purple-400 font-bold">Specialization</div>
                  <div className="text-lg sm:text-xl text-white">MERN Stack</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Achievements --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            My Achievements
          </h2>
          
          <div className="relative group">
            <div className="flex justify-end gap-2 mb-4 px-2">
              <button 
                onClick={() => scrollAchievements('left')}
                className="p-3 rounded-full text-white bg-gray-800 hover:bg-blue-600 transition-all shadow-lg z-10"
                aria-label="Scroll Left"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={() => scrollAchievements('right')}
                className="p-3 rounded-full text-white bg-gray-800 hover:bg-blue-600 transition-all shadow-lg z-10"
                aria-label="Scroll Right"
              >
                <FaChevronRight />
              </button>
            </div>

            <div 
              ref={achievementsContainerRef}
              className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {ACHIEVEMENTS_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedAchievement(item)}
                  className="snap-center flex-shrink-0 w-72 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4 text-gray-300 group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.count}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Education Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            Academic Journey
          </h2>
          
          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-blue-300">{edu.year}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} bg-gray-800/40 p-8 rounded-2xl border border-gray-700`}>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4 text-purple-400">{edu.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start text-sm text-gray-400">
                        <span className="text-blue-400 mr-2">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- College Memories --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            College Memories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGE_MEMORIES.map((memory, index) => (
              <div key={index} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg bg-gray-800">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-blue-400 font-mono text-sm mb-1">{memory.year}</div>
                  <h3 className="text-lg font-bold text-white">{memory.title}</h3>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2">{memory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- Tech Stack --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openTechModal(tech)}
                className={`flex flex-col items-center p-6 rounded-xl bg-gray-800/40 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all cursor-pointer`}
              >
                <div className="text-4xl mb-3 text-gray-400 hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Footer CTA --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center pb-12"
        >
          <div className="inline-block p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="bg-gray-900 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to <span className="text-blue-400">Collaborate?</span>
              </h2>
              <div className="flex justify-center gap-4 mt-8">
                <a href="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors">
                  View Projects
                </a>
                <a href="/contact" className="px-8 py-3 border border-gray-600 hover:border-white text-white font-bold rounded-full transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- MODALS (Optimized with AnimatePresence) --- */}
      <AnimatePresence>
        {selectedTech && (
          <TechModel tech={selectedTech} onClose={() => setSelectedTech(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl max-w-lg w-full p-8 border border-gray-700 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="text-5xl text-blue-400 p-4 bg-gray-900 rounded-xl border border-gray-700">
                  {selectedAchievement.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{selectedAchievement.count}</div>
                  <div className="text-lg text-gray-400">{selectedAchievement.title}</div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedAchievement.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;