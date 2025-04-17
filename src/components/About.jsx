import React, { useRef, useState, useEffect } from "react";
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
  FaPython,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
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
  const achievementsContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
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

  useEffect(() => {
    const container = achievementsContainerRef.current;
    if (!container) return;
  
    let animationId;
    let scrollAmount = 0;
    const speed = 0.5;
  
    const scroll = () => {
      if (!isHovered && container) {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;
        
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
  
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

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
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      University: "Sri Krishnadevaraya University",
      institution: "JCNRM Degree College",
      year: "2020 - 2024",
      icon: <FaUniversity className="text-purple-500" />,
      description: "Specialized in Web Technologies and Software Architecture with 7-%",
      highlights: [
        "Focus on COMPUTER SCIENCE,ELECTRONICS,MATHEMATICS",
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
      description: "Gained practical experience in web development and agile methodologies",
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
    }
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
      description: "Gained practical experience in web development and agile methodologies",
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

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 sm:px-6 py-12 md:px-20 lg:px-40 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Personal Intro Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mb-16 sm:mb-24 relative"
        >
          <div className="hidden sm:block absolute -top-20 -left-20 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="hidden sm:block absolute -bottom-20 -right-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            
            <motion.div 
  whileHover={{ scale: 1.02 }}
  className="relative group w-full lg:w-1/2"
>
  <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl z-10 transform transition duration-500 group-hover:shadow-blue-500/20">
    <img 
      src="https://media-hosting.imagekit.io/e195aeebd1284614/WhatsApp%20Image%202025-04-14%20at%2014.26.15_a1165c67.jpg?Expires=1839402081&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VL-~9nI-wKhzuXgrQA9ES1HfPuNXTIEFx4RXHfgBmbDL7vFiax3E0nnFtKLUmBZPMJ2L4E9oEzjuIpRfq7tLvB0Q~0BAMQonwLEFnKN6ITpvyLVZDtwowD4aedFxOOZ~RJggS3hASrn~AlCB7bPuTCe8nFUr1w-t7Jf7WPQ2m0yrb0jN1qFm8xKlGUt9lBsGU-yxq8ux2kkxwGGB4z7v0We7GH~oaCf2SJj1Y2dxLdTx0A9zWnr8hWPgRzgqFjtIGsWpH5HHoufXz9M1kr~fy187-uBonEHMuSMjgV~7QOD5uM7IqE-xB0~wjHPA~hbbILokHDL90k8jCXLxBK~fyw__"
      alt="Jagadeesh Vanganooru"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent" />
    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Jagadeesh Vanganooru</h1>
      <div className="text-xs sm:text-base md:text-lg text-blue-300 font-mono">Full-Stack Developer</div>
    </div>
  </div>
  
  {/* Glow effect */}
  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 z-0"></div>
  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 z-0"></div>
</motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-1/2 bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-700/50"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Innovative Developer
                </span> & Problem Solver
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
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
              
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-xl">
                  <div className="text-sm sm:text-base text-blue-400 font-bold">Experience</div>
                  <div className="text-lg sm:text-xl">0+ Years</div>
                </div>
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-xl">
                  <div className="text-sm sm:text-base text-purple-400 font-bold">Specialization</div>
                  <div className="text-lg sm:text-xl">MERN Stack</div>
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
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              My Achievements
            </span>
          </h2>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="sm:hidden flex justify-between items-center mb-4 px-4">
              <button 
                onClick={() => {
                  const container = achievementsContainerRef.current;
                  if (container) container.scrollLeft -= 200;
                }}
                className="p-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={() => {
                  const container = achievementsContainerRef.current;
                  if (container) container.scrollLeft += 200;
                }}
                className="p-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>

            <div 
              ref={achievementsContainerRef}
              className="overflow-x-auto pb-4 hide-scrollbar"
            >
              <div className="flex space-x-4 px-4 w-max">
                {[...achievements, ...achievements].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setSelectedAchievement(item)}
                    className="flex-shrink-0 w-64 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-4xl sm:text-5xl mb-4 group-hover:text-blue-400 transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-2">{item.count}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Academic Journey
            </span>
          </h2>
          
          <div className="space-y-8 sm:space-y-16">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index }}
                className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center"
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.institution}</h3>
                      <p className="text-blue-300">{edu.year}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700`}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 text-purple-400">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-sm sm:text-base text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{edu.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-blue-400 mr-2 mt-1">✓</div>
                        <p className="text-sm sm:text-base text-gray-300">{highlight}</p>
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
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              College Memories
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {collegeMemories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className="text-blue-400 font-mono text-xs sm:text-sm mb-1">{memory.year}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{memory.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{memory.description}</p>
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
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Technical Expertise
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies I've mastered to build cutting-edge digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openTechModal(tech)}
                className={`flex flex-col items-center p-4 sm:p-6 rounded-xl ${tech.color} bg-opacity-10 backdrop-blur-sm border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 hover:text-blue-400 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-1 shadow-2xl mb-6 sm:mb-8">
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Ready to <span className="text-blue-400">Collaborate</span> on Something Amazing?
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto">
                I'm always excited to work on challenging projects and create innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-blue-400 font-bold border-2 border-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-900/30 text-sm sm:text-base"
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

      {/* Achievement Modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeAchievementModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-800 rounded-xl sm:rounded-2xl max-w-md w-full p-6 sm:p-8 relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeAchievementModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="text-6xl sm:text-7xl md:text-8xl text-center md:text-left text-blue-400">
                {selectedAchievement.icon}
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-400 mb-4">
                  {selectedAchievement.count}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {selectedAchievement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  {selectedAchievement.description}
                </p>
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Additional Details
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Click on other achievements to explore more about my journey and accomplishments.
                  </p>
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