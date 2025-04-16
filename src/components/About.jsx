import React, { useState, useEffect } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
  FaLightbulb,
  FaUniversity,
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
    FaHtml5, 
    FaCss3Alt, 
    FaBootstrap, 
    FaJsSquare, 
    FaPython } from "react-icons/fa";
import { 
  SiExpress, 
  SiMongodb, 
  SiJavascript, 
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiNextdotjs,
  SiFirebase,
  SiDocker
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechModel from "./TechModel";


const About = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };



// Add these functions for arrow navigation
const scrollLeft = () => {
  setScrollPosition(prev => {
    const newPos = prev - itemWidth;
    return newPos < 0 ? 0 : newPos;
  });
};

const scrollRight = () => {
  setScrollPosition(prev => {
    if (!containerRef.current) return prev;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    const newPos = prev + itemWidth;
    return newPos > maxScroll ? maxScroll : newPos;
  });
};




// Add this modal component before the return statement's closing </div>


  const techStack = [
    { 
      name: "React", 
      icon: <FaReact className="text-blue-400" />, 
      color: "bg-blue-100",
      description: "Advanced React patterns including hooks, context API, and performance optimization techniques.",
      projects: "Built 10+ applications using React with complex state management",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },

    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-green-500" />, 
      color: "bg-green-100",
      description: "Server-side JavaScript with Express, REST API development, and authentication systems.",
      projects: "Created scalable backend services for multiple production applications",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-blue-600" />, 
      color: "bg-blue-50",
      description: "Type-safe JavaScript development with interfaces, generics, and advanced type patterns.",
      projects: "Migrated multiple projects from JavaScript to TypeScript",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    
    { 
      name: "MongoDB", 
      icon: <FaDatabase className="text-green-600" />, 
      color: "bg-green-50",
      description: "NoSQL database design, aggregation pipelines, and performance optimization.",
      projects: "Designed database schemas for multiple applications with complex relationships",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
        color: "bg-orange-100",
        description: "Semantic and accessible markup for structuring modern web applications.",
        projects: "Created 30+ responsive layouts and landing pages",
        image: "https://www.webcup.fr/wp-content/uploads/2021/10/atelier-html-css-association-webcup.jpg"
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
        color: "bg-blue-100",
        description: "Styling techniques with Flexbox, Grid, animations, and responsive design.",
        projects: "Styled numerous websites with dynamic and consistent design systems",
        image: "https://www.hostitsmart.com/blog/wp-content/uploads/2024/12/Example-of-css.jpg"
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
        color: "bg-cyan-100",
        description: "Utility-first CSS framework for rapid UI development with consistent design.",
        projects: "Built full-featured web apps with modern, responsive Tailwind components",
        image: "https://www.animaapp.com/blog/wp-content/uploads/2023/08/Figma-to-Tailwind-768x539.png"
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" />,
        color: "bg-purple-100",
        description: "Responsive design and UI components using the Bootstrap framework.",
        projects: "Developed dashboards and prototypes using Bootstrap utilities and components",
        image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/da60ab70ac523deb1dcacc6a5dfdeb9ad2b1a268"
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400" />,
        color: "bg-yellow-100",
        description: "Proficient in ES6+, asynchronous programming, and DOM manipulation.",
        projects: "Implemented interactive features in web apps and solved algorithm challenges",
        image: "https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/Features-of-JavaScript.jpg"
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        color: "bg-blue-100",
        description: "Typed superset of JavaScript for scalable and maintainable applications.",
        projects: "Converted JS codebases to TypeScript and developed type-safe React apps",
        image: "https://www.digitalocean.com/cdn-cgi/image/quality=75,width=1920/https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FUKmRMCLDKAKNW4Wb5DeZeCQY&raw=1"
      },
      {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
        color: "bg-yellow-100",
        description: "Experience in scripting, automation, data analysis, and backend logic.",
        projects: "Built CLI tools, APIs, and scripts for automation and productivity",
        image: "https://www.aezion.com/wp-content/uploads/2020/06/Python_language.jpg"
      },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      University :"Sri Krishnadevaraya University",
      institution: "JCNRM Degree College",
      year: "2020 - 2024",
      icon: <FaUniversity className="text-purple-500" />,
      description: "Specialized in Web Technologies and Software Architecture with 7-%",
      highlights: [
        "Focus on   COMPUTER SCIENCE,ELECTRONICS,MATHEMATICS",
        
      ],
    
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "JCNRM Junior College",
      year: "2018 - 2020",
      icon: <FaGraduationCap className="text-blue-500" />,
      description: "Focus on Mathematics and Computer Science with 6.34G.PA",
      highlights: [
        "mATHEMATICS , PHYSICS,CHEMISTRY",
        
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const achievements = [
    {
      title: "Web Development Internship",
      description: "Gained practical experience in web development and agile methodologies ",
      icon: <FaLaptopCode className="text-indigo-500" />,
      count: "1500+"
    },
    {
      title: "Python Internship",
      description: "During python internship learned fundamentals of python programming and data structures",
      icon: <FaAward className="text-red-500" />,
      count: "3 Months"
    },
    {
      title: "6000+ Hours Coding practice",
      description: "Intensive hands-on development experience across multiple domains",
      icon: <FaLaptopCode className="text-indigo-500" />,
      count: "1500+"
    },
    
    {
      title: "15+ Projects",
      description: "Diverse portfolio including complex full-stack applications",
      icon: <FaProjectDiagram className="text-purple-500" />,
      count: "15+"
    },
    {
      title: "Problem Solver",
      description: "Exceptional algorithmic thinking with 500+ LeetCode solutions",
      icon: <FaBrain className="text-yellow-500" />,
      
    },
    {
      title: "Quick Leaner",
      description: "Adaptable to new technologies and frameworks with 100+ hours of online courses",
      icon: <FaRocket className="text-green-500" />,
     
      
    },
   
  ];

  const collegeMemories = [
    {
      title: "Tech Fest Lead",
      description: "Organized college tech fest with 100+ participants",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "2023"
    },
    {
      title: "Data Representation",
      description: "Developed AI-based solution for Data Representation project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "2022"
    },
    {
      title: "Web Development Internship",
      description:"Gained practical experience in web development and agile methodologies",
      image: "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/benefits-of-custom-web-development-and-web-design-12grids.webp",
      year: "2023"
    },
    {
      title: "Python Internship",
      description: "During python internship learned fundamentals of python programming and data structures",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PBY4bop57X2BNLXnoS0EMw.png",
      year: "2023"
    }
  ];

  const openTechModal = (tech) => {
    setSelectedTech(tech);
  };

  const closeTechModal = () => {
    setSelectedTech(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-16 md:px-20 lg:px-40 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Personal Intro Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-24 relative"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative w-full h-96 lg:h-[32rem] rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl z-10 transform transition duration-500 group-hover:shadow-blue-500/20">
                <img 
                  src="https://media-hosting.imagekit.io/67342460522843ad/WhatsApp%20Image%202025-04-14%20at%2014.26.15_990c9825.jpg?Expires=1839232318&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bW4u~gJOwdZTq0iyUAIuLCBFDKgU6ZfNZ3BuqEDutMk0CDtLT1ytUYQsjxZgR03Pa9tUsJiaZKf0nVx2moTVJmggRx~aVui5aWBL-p0quYUPsqAbrrLayjjgFLVgdaMt1hQpufp6S8S90ySEXAx38b7Lc3AjanOErrkWcFDZrGJhNxW9-pCywoh1czw35wNZ6kKHvjJLV3~wf1l-LSXP~YgBySMGVGn3vKR22nGM0BfUtPB4njLQEpngQvLRekRq4S7x~XwPQ-7OK-moYHWLPx51YLj2ABTBqBUfnLALgbE5QkKJldofNTq8W567sWbcIkuiTbGTEWykFUG09ell8A__" 
                  alt="Jagadeesh Vanganooru"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Jagadeesh Vanganooru</h1>
                  <div className="text-xl text-blue-300 font-mono">Full-Stack Developer</div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 z-0"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Innovative Developer
                </span> & Problem Solver
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  My journey in computer science has equipped me with both theoretical knowledge 
                  and practical skills to build robust, scalable applications.
                </p>
                <p>
                  With a strong foundation in data structures and algorithms, I approach problems 
                  methodically and deliver efficient solutions. My experience spans across multiple 
                  domains including web development.
                </p>
                <p>
                  Beyond coding, I'm an avid learner constantly exploring new technologies and 
                  contributing to open-source projects. I believe in writing clean, maintainable 
                  code that stands the test of time.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="text-blue-400 font-bold">Experience</div>
                  <div className="text-xl"> 0+ Years</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="text-purple-400 font-bold">Specialization</div>
                  <div className="text-xl">MERN Stack</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements */}
        
        <motion.div
  initial="hidden"
  animate={controls}
  variants={fadeIn}
  transition={{ delay: 0.3 }}
  className="mb-24 overflow-hidden"
>
  <h2 className="text-4xl font-bold text-center mb-16">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
      My Achievements
    </span>
  </h2>
  
  <div className="relative h-64">
     {/* Gradient overlay on left side */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
  {/* Gradient overlay on right side */}
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
    <motion.div 
      className="absolute flex space-x-6"
      animate={{ 
        x: ["0%", "-100%"],
      }}
      transition={{ 
        duration: 120,
        repeat: Infinity,
        ease: "linear"
      }}
    >
    {[...achievements,...achievements, ...achievements, ...achievements].map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ scale: 1.05, y: -5 }}
    onClick={() => setSelectedAchievement(item)}
    className="flex-shrink-0 w-64 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
  >
          <div className="text-5xl mb-4 group-hover:text-blue-400 transition-colors">
            {item.icon}
          </div>
          <div className="text-4xl font-bold text-blue-400 mb-2">{item.count}</div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      ))}
      {/* Duplicate items for seamless looping */}
      {achievements.map((item, index) => (
  <motion.div
    key={`copy-${index}`}
    onClick={() => setSelectedAchievement(item)}
    className="flex-shrink-0 w-64 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
  >
          <div className="text-5xl mb-4 group-hover:text-blue-400 transition-colors">
            {item.icon}
          </div>
          <div className="text-4xl font-bold text-blue-400 mb-2">{item.count}</div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>



        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Academic Journey
            </span>
          </h2>
          
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-blue-300">{edu.year}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`order-${index % 2 === 0 ? '2' : '1'} bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-700`}>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4 text-purple-400">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{edu.description}</p>
                  
                  <div className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-blue-400 mr-2 mt-1">✓</div>
                        <p className="text-gray-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* College Memories */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              College Memories
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collegeMemories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-blue-400 font-mono text-sm mb-1">{memory.year}</div>
                  <h3 className="text-xl font-bold text-white">{memory.title}</h3>
                  <p className="text-gray-300">{memory.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 0.9 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies I've mastered to build cutting-edge digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openTechModal(tech)}
                className={`flex flex-col items-center p-6 rounded-xl ${tech.color} bg-opacity-10 backdrop-blur-sm border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className="text-5xl mb-3 hover:text-blue-400 transition-colors">
                  {tech.icon}
                </div>
                <span className="font-semibold text-black">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl mb-8">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to <span className="text-blue-400">Collaborate</span> on Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                I'm always excited to work on challenging projects and create innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/projects"
                  
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-blue-400 font-bold border-2 border-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-900/30"
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Modal */}
      {selectedTech && (
        <TechModel tech={selectedTech} onClose={closeTechModal} />
      )}



{selectedAchievement && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-gray-800 rounded-2xl max-w-2xl w-full p-8 relative border border-gray-700"
    >
      <button 
        onClick={() => setSelectedAchievement(null)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="text-8xl text-center md:text-left text-blue-400">
          {selectedAchievement.icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
          <div className="text-5xl font-bold text-lime-400 mb-6">{selectedAchievement.count}</div>{selectedAchievement.title}</h3>
          
          <p className="text-gray-300 text-lg mb-6">{selectedAchievement.description}</p>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Additional Details</h4>
            <p className="text-gray-300">Click on other achievements to explore more about my journey and accomplishments.</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </div>
  );
};

export default About;