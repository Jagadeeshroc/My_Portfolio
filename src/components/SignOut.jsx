import React from "react";
import { FaBriefcase, FaGraduationCap, FaCode, FaTools, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Resume = () => {
  // Resume data - replace with your actual information
  const resumeData = {
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    contact: {
      email: "alex.johnson@example.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/alexjohnson",
      github: "github.com/alexjohnson"
    },
    summary: "Full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture. Passionate about creating efficient, user-friendly solutions.",
    experience: [
      {
        position: "Senior Software Engineer",
        company: "TechSolutions Inc.",
        duration: "2020 - Present",
        responsibilities: [
          "Led development of customer portal using React and Node.js",
          "Implemented CI/CD pipeline reducing deployment time by 40%",
          "Mentored junior developers and conducted code reviews"
        ]
      },
      {
        position: "Software Developer",
        company: "WebCraft LLC",
        duration: "2018 - 2020",
        responsibilities: [
          "Developed responsive web applications using modern JavaScript frameworks",
          "Collaborated with UX team to improve customer experience",
          "Optimized application performance reducing load time by 30%"
        ]
      }
    ],
    education: [
      {
        degree: "M.Sc. Computer Science",
        institution: "Stanford University",
        year: "2018"
      },
      {
        degree: "B.Sc. Software Engineering",
        institution: "University of California",
        year: "2016"
      }
    ],
    skills: {
      technical: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "GraphQL"],
      soft: ["Team Leadership", "Problem Solving", "Agile Methodologies", "Communication"]
    },
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a full-stack e-commerce solution with React frontend and Node.js backend",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        name: "Task Management App",
        description: "Developed a collaborative task management application with real-time updates",
        technologies: ["React", "Firebase", "Material UI"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Resume Header */}
        <header className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{resumeData.name}</h1>
              <h2 className="text-xl text-indigo-600">{resumeData.title}</h2>
              <p className="text-gray-600 mt-2">{resumeData.summary}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-indigo-500 mr-2" />
                <span>{resumeData.contact.email}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-indigo-500 mr-2" />
                <span>{resumeData.contact.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-indigo-500 mr-2" />
                <span>{resumeData.contact.location}</span>
              </div>
              <div className="flex space-x-4 mt-3">
                <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <FaLinkedin size={20} />
                </a>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Experience Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaBriefcase className="text-indigo-500 mr-2" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-indigo-200 pl-4">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>{exp.company}</span>
                      <span>{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaCode className="text-indigo-500 mr-2" />
                Projects
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-indigo-200 pl-4">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaGraduationCap className="text-indigo-500 mr-2" />
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-indigo-200 pl-4">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaTools className="text-indigo-500 mr-2" />
                Skills
              </h2>
              <div>
                <h3 className="font-semibold mb-2">Technical</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resumeData.skills.technical.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.soft.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            Download PDF Version
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;