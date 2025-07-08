import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaNode, FaDownload } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Section = ({ title, children, id }) => (
  <motion.div
    id={id}
    className="mb-12 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
      <span className="mr-2">{title.split(" ")[0]}</span>
      <span className="text-white">{title.split(" ").slice(1).join(" ")}</span>
    </h2>
    <div className="text-lg leading-relaxed text-gray-100">{children}</div>
  </motion.div>
);

const SkillPill = ({ icon, name, level }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center mb-3">
      <div className="text-2xl mr-3 text-blue-400">
        <IconComponent />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-white">{name}</span>
          <span className="text-xs text-gray-300">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, technologies, link }) => (
  <motion.div 
    className="p-5 rounded-lg bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-white/10 mb-4"
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
    <p className="text-gray-200 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {technologies.map((tech, index) => (
        <span key={index} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-200">
          {tech}
        </span>
      ))}
    </div>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-200 text-sm flex items-center"
      >
        View Project <span className="ml-1">→</span>
      </a>
    )}
  </motion.div>
);

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jagadeeshvanganooru@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const projects = [
    {
      title: "Jobby App",
      description: "Role-based job search platform with JWT authentication, Redux state management, and REST API integration.",
      technologies: ["React", "Redux", "JWT", "REST API", "Tailwind CSS"],
      link: "https://jobby-app-demo.com"
    },
    {
      title: "E-Commerce Shopping App",
      description: "Full-featured e-commerce platform with Stripe payment integration and responsive design.",
      technologies: ["MERN Stack", "Stripe", "Tailwind CSS", "JWT"],
      link: "https://ecommerce-demo.com"
    },
    {
      title: "Big Basket Clone",
      description: "Grocery delivery app clone with real-time updates and scalable front-end architecture.",
      technologies: ["React", "AWS S3", "Firebase", "Context API"],
      link: "https://bigbasket-clone.com"
    }
  ];

  return (
    <div className="relative min-h-screen font-['Poppins'] bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars 
          radius={100} 
          depth={50} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          {/* Profile Header */}
          <motion.div 
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-8 shadow-2xl border border-white/10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="w-32 h-32 rounded-full border-4 border-blue-400 overflow-hidden mb-6 md:mb-0 md:mr-8 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="assets\WhatsApp Image 2025-04-14 at 14.26.15_a1165c67.jpg" 
                  alt="Jagadeesh Vanganooru" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Jagadeesh Vanganooru
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-blue-200 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  React.js Developer
                </motion.p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <motion.a
                    href="mailto:jagadeeshvanganooru@gmail.com"
                    className="flex items-center px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 rounded-full text-sm border border-blue-400/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      copyEmail();
                    }}
                    data-tooltip-id="email-tooltip"
                  >
                    📧 {isCopied ? "Copied!" : "jagadeeshvanganooru@gmail.com"}
                  </motion.a>
                  <Tooltip id="email-tooltip" place="top" effect="solid">
                    Click to copy
                  </Tooltip>
                  
                  <motion.a
                    href="tel:+919949565677"
                    className="flex items-center px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-full text-sm border border-purple-400/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📞 +91-9949565677
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/jagadeesh-vanganooru-117872336"
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-blue-700/30 hover:bg-blue-700/50 rounded-full text-sm border border-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div 
            className="flex overflow-x-auto mb-8 bg-gray-800/50 rounded-xl p-1 border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {["about", "skills", "projects", "experience", "education"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab 
                    ? "bg-blue-600/50 text-white shadow-md" 
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  document.getElementById(tab)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Download Button */}
          <motion.a
            href="/assets/Jagadeesh_React_Fresher_Resume13.pdf"
            download="Jagadeesh_Vanganooru_Resume.pdf"
            className="fixed bottom-8 right-8 z-50 flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg text-white font-medium transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement("a");
              link.href = "/assets/Jagadeesh_React_Fresher_Resume13.pdf"; // Ensure this path is correct  
              link.download = "Jagadeesh_Vanganooru_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
            }
            data-tooltip-id="download-tooltip"
            data-tooltip-content="Download Resume"
          >
            <FaDownload className="mr-2" /> Download Resume
          </motion.a>

          {/* Main Content */}
          <div className="space-y-8">
            <Section title="👨‍💻 About Me" id="about">
              <p className="text-lg leading-relaxed">
                Passionate <span className="text-blue-300 font-medium">React.js Developer</span> with hands-on experience in building responsive and interactive web applications. 
                Specialized in creating reusable components, optimizing UI/UX, and implementing modern frontend architectures. 
                Strong advocate for clean code, performance optimization, and continuous learning in the ever-evolving JavaScript ecosystem.
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-300">2+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-300">15+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <div className="text-3xl font-bold text-green-300">10K+</div>
                  <div className="text-sm text-gray-300">Lines of Code</div>
                </div>
                <div className="text-center p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-gray-300">Passion for Coding</div>
                </div>
              </div>
            </Section>

            <Section title="🚀 Skills & Expertise" id="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                  <SkillPill icon={FaReact} name="React.js" level={90} />
                  <SkillPill icon={SiJavascript} name="JavaScript" level={85} />
                  <SkillPill icon={SiTypescript} name="TypeScript" level={75} />
                  <SkillPill icon={SiRedux} name="Redux" level={80} />
                  <SkillPill icon={FaHtml5} name="HTML5" level={95} />
                  <SkillPill icon={FaCss3Alt} name="CSS3" level={90} />
                  <SkillPill icon={SiTailwindcss} name="Tailwind CSS" level={85} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Additional Skills</h3>
                  <SkillPill icon={FaNode} name="Node.js" level={70} />
                  <SkillPill icon={SiExpress} name="Express.js" level={65} />
                  <SkillPill icon={SiMongodb} name="MongoDB" level={60} />
                  <SkillPill icon={FaGithub} name="Git/GitHub" level={80} />
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Problem Solving", "Team Collaboration", "Agile Methodology", "Communication", "Time Management"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="💼 Projects" id="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <motion.a
                  href="https://github.com/Jagadeeshroc"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-all border border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="mr-2" /> View More on GitHub
                </motion.a>
              </div>
            </Section>

            <Section title="📈 Experience" id="experience">
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-blue-900"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">React Developer Trainee</h3>
                    <span className="text-blue-300 text-sm sm:text-base">June 2023 - Present</span>
                  </div>
                  <p className="text-blue-400 mb-2">AR Technologies</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Developed responsive UIs using React.js, Flexbox, and CSS Grid</li>
                    <li>Implemented JWT authentication for simulated 500+ users</li>
                    <li>Translated Figma designs into functional, accessible components</li>
                    <li>Collaborated with backend developers to integrate RESTful APIs</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-400 border-4 border-purple-900"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
                    <span className="text-purple-300 text-sm sm:text-base">Dec 2022 - May 2023</span>
                  </div>
                  <p className="text-purple-400 mb-2">G-tech Group</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Participated in Agile-based development workflows</li>
                    <li>Optimized application performance reducing load times by 30%</li>
                    <li>Implemented responsive designs using media queries and flex layouts</li>
                    <li>Conducted code reviews and debugging sessions</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="🎓 Education" id="education">
              <div className="relative pl-8 border-l-2 border-green-400/30 space-y-6">
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-400 border-4 border-green-900"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">B.Sc. Computer Science</h3>
                    <span className="text-green-300 text-sm sm:text-base">2021 - 2024</span>
                  </div>
                  <p className="text-green-400">Sri Krishnadevaraya University</p>
                  <p className="text-gray-300 mt-1">Specialized in Software Development and Web Technologies</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-yellow-400 border-4 border-yellow-900"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">Intermediate (MPC)</h3>
                    <span className="text-yellow-300 text-sm sm:text-base">2018 - 2020</span>
                  </div>
                  <p className="text-yellow-400">JCNRM School</p>
                  <p className="text-gray-300 mt-1">Mathematics, Physics, Chemistry</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-400 border-4 border-red-900"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-semibold text-white">SSC</h3>
                    <span className="text-red-300 text-sm sm:text-base">2017 - 2018</span>
                  </div>
                  <p className="text-red-400">JCNRM School</p>
                </div>
              </div>
            </Section>

            <Section title="🌟 Certifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-lg border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-blue-300">Advanced React</h3>
                  <p className="text-sm text-gray-300">Meta (Coursera) - 2023</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-300">JavaScript Algorithms and Data Structures</h3>
                  <p className="text-sm text-gray-300">freeCodeCamp - 2022</p>
                </div>
              </div>
            </Section>

            <Section title="📝 Declaration">
              <p className="text-gray-200 italic">
                I hereby declare that all the information furnished above is true to the best of my knowledge and belief.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                <div>
                  <p className="text-gray-300">Place: Tadipatri</p>
                  <p className="text-gray-300">Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <p className="text-blue-300 font-medium">Jagadeesh Vanganooru</p>
                </div>
              </div>
            </Section>
          </div>

          {/* Footer */}
          <footer className="mt-16 py-8 text-center text-gray-400 border-t border-gray-800/50">
            <div className="flex justify-center space-x-6 text-2xl mb-4">
              {[
                { icon: FaGithub, url: "https://github.com/Jagadeeshroc", tooltip: "GitHub" },
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/jagadeesh-vanganooru-117872336", tooltip: "LinkedIn" },
                { icon: FaReact, url: "https://jagadeesh-portfolio-4yb5.vercel.app", tooltip: "Portfolio" }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <motion.a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-300 transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    data-tooltip-id={`footer-tooltip-${index}`}
                    data-tooltip-content={item.tooltip}
                  >
                    <item.icon />
                  </motion.a>
                  <Tooltip id={`footer-tooltip-${index}`} />
                </React.Fragment>
              ))}
            </div>
            <p>© {new Date().getFullYear()} Jagadeesh Vanganooru. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, Framer Motion, and Three.js</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;