import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "HTML5", level: 95, icon: "🖥️" },
        { name: "CSS3/Tailwind", level: 90, icon: "🎨" },
        { name: "Bootstrap", level: 80, icon: "🅱️" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express", level: 70, icon: "🚂" },
        { name: "Python", level: 65, icon: "🐍" },
        { name: "MongoDB", level: 60, icon: "🍃" },
      ],
    },
    {
      category: "Tools & Other",
      skills: [
        { name: "GitHub", level: 85, icon: "🔄" },
        { name: "Figma", level: 55, icon: "✏️" },
        { name: "Docker", level: 50, icon: "🐳" },
        { name: "AWS", level: 40, icon: "☁️" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeInOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-300 to-green-500 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-500 to-red-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h1>
          <motion.p 
            className="text-xl text-black-300 font-bold max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Here's what I bring to the table. These are the technologies and tools I work with to create amazing digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                {category.category}
              </h2>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{skill.icon}</span>
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        custom={skill.level}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 bg-white-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">UI/UX Design</h3>
              <p className="text-gray-300">
                Creating intuitive and beautiful user interfaces with a focus on user experience.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-700 p-6 rounded-lg border-l-4 border-purple-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Frontend Development</h3>
              <p className="text-gray-300">
                Building responsive, performant web applications with modern frameworks.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-700 p-6 rounded-lg border-l-4 border-green-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Problem Solving</h3>
              <p className="text-gray-300">
                Analytical thinking and creative solutions to complex technical challenges.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
            Ready to Collaborate?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          ><Link to='/contact'>
            Contact Me
          </Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;