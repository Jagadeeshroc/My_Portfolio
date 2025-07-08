import React from "react";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import'tailwindcss'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileData = {
    name: "Vanganooru Jagadeesh",
    title: "full Stack Developer",
    location: "Tadipatri,Ananthapur, AP",
    email: "jagadeeshvanganooru@gmail.com",
    about: "Passionate full-stack developer with 1 years of learning practice building scalable web applications. Specialized in React, Node.js, and cloud architecture. Love solving complex problems and mentoring junior developers.",
    experience: [
      {
        role: "python program Internship",
        company: "G-tech group of education",
        period: "2023"
      },
      {
        role: "Web Development Internship",
        company: "DigitalCraft Inc.",
        period: "2023"
      }
     
    ],
    education: [
      {
        degree: "B.Sc. Computer Science",
        institution: "Sri krishnadeveraya University",
        year: "2024"
      },
      {
        Intermediate: "MPC",
        institution: "Jcnrm jr college",
        year: "2020"
      }
    ],
    skills: [
      "React.js", "Node.js", "TypeScript", "Tailwindcss", "AWS", 
      "Docker", "Python", "UX Design", "MongoDB", "Express.js",'HTML', 'CSS', 'JavaScript', 'Git', 'Figma','Bootstrap', 'MySQL',  'REST APIs',  'Problem Solving', 'Team Leadership', 'Communication Skills'
,    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
       <div className="h-full w-full object-cover bg-[url('/assets/eagleFull.png')] p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                 <img
        src="\assets\IMG_20250621_131258.png"
        alt="Profile"
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking the button itself
              setIsOpen(false);
            }}
          >
            &times; {/* HTML entity for X */}
          </button>

          {/* Enlarged image */}
          <img
            src="\assets\IMG_20250621_131258.png"
            alt="Enlarged"
            className="max-w-full max-h-full rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
        </div>
      )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <p className="text-xl opacity-90">{profileData.title}</p>
                <div className="flex items-center mt-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2">
                {/* About Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {profileData.about}
                  </p>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    <FaBriefcase className="inline mr-2 text-indigo-600" />
                    Experience
                  </h2>
                  <div className="space-y-6">
                    {profileData.experience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4">
                        <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education Section */}
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    <FaGraduationCap className="inline mr-2 text-indigo-600" />
                    Education
                  </h2>
                  <div className="space-y-6">
                    {profileData.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4">
                        <h3 className="text-xl font-medium text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600 font-medium">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div>
                {/* Contact Section */}
                <section className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    Contact
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaEnvelope className="text-indigo-600 mr-3" />
                      <a href={`mailto:${profileData.email}`} className="text-gray-700 hover:text-indigo-600">
                        {profileData.email}
                      </a>
                    </div>
                    <div className="flex space-x-4 mt-4 pt-3 border-t border-gray-200">
                      <a href="https://www.linkedin.com/in/jagadeesh-vanganooru-117872336/" className="text-gray-600 hover:text-indigo-600">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/Jagadeeshroc" className="text-gray-600 hover:text-indigo-600">
                        <FaGithub size={24} />
                      </a>
                      <a href="twitter.com" className="text-gray-600 hover:text-indigo-600">
                        <FaTwitter size={24} />
                      </a>
                    </div>
                  </div>
                </section>

                {/* Skills Section */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;