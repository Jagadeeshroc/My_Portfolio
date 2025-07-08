import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import 'tailwindcss'


const roles = [
    'Frontend Developer',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Quick Learner',
    'Problem Solver',
];

const getRandomColor = () => {
    
    const colors = [
        '#ff4d4d', '#4dd2ff', '#33cc33', '#ffcc00', '#cc66ff', '#00cc99', '#ff66b2'
    ];
   
    return colors[Math.floor(Math.random() * colors.length)];
};

const Home = () => {
    const [color, setColor] = useState(getRandomColor());
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/Jagadeesh_14FullStack.pdf'; // Direct path from public folderD:\P\p2\portfolio\public\Jagadeesh_React_Fresher_Resume13.pdf
        link.download = 'JagadeeshResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
            <div className="w-full mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Text Content */}
                    <div className="flex-1 min-w-[280px] order-2 lg:order-1 mt-8 lg:mt-0">
                        <h4 className="text-lg sm:text-xl md:text-2xl text-blue-500 font-bold mb-4 sm:mb-6">Hello, I'm</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Jagadeesh 
                            <span style={{ textShadow: '1px 1px 0px rgba(255, 0, 128, 0.5)' }}> Vanganooru</span>
                        </h1>
                        
                        <div className="h-12 md:h-16 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                            <TypeAnimation
                                sequence={roles.flatMap((role) => [
                                () => setColor(getRandomColor()),
                                role,
                                1000
                                ])}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{ color }}
                            />
                        </div>
                        
                        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-[700px] leading-relaxed">
                            A passionate and dedicated full-stack developer with a strong foundation in web development and design. I've built multiple projects that showcase both frontend and backend skills, with a focus on creating beautiful, functional, and user-friendly digital experiences.
                        </p>
                        
                        <div className="flex gap-3 sm:gap-4 flex-wrap">
                            <button 
                               
                                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-white border-2 border-transparent hover:border-blue-500 transition-all duration-300 flex items-center gap-2 gradient-bg-animate hover:text-blue-100 cursor-pointer text-sm sm:text-base"
                            >
                                <Link to='/contact'>
                                Hire Me
                                </Link>
                            </button>

                            <button 
                                onClick={handleDownload}
                                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-blue-500 border-2 border-blue-500 
                                            hover:text-white hover:border-white 
                                            transition-all duration-300 
                                            flex items-center gap-2 
                                            relative overflow-hidden group cursor-pointer text-sm sm:text-base"
                            >
                                <span className="absolute inset-0 w-full h-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0 rounded-full"></span>
                                <span className="flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
                                    <FaFileDownload className="text-sm sm:text-lg" /> Download CV
                                </span>
                            </button>
                        </div>
                    </div>
                    
                    
                    <div className="flex-1 min-w-[280px] flex justify-center order-1 lg:order-2 lg:ml-10">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                            <img 
                                src="assets/photo1.png" 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-full border-6 sm:border-8 border-white shadow-2xl relative z-10  rotate-x-0 rotate-z-360 transform transition-transform duration-500 hover:rotate-x-0 hover:rotate-z-0 shadow-cyan-500/100" 
                            />
                            <div className="absolute w-full h-full top-0 left-0 rounded-full border-6 sm:border-8 border-blue-500 rotate-45 animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center">
                    <a href="https://github.com/Jagadeeshroc" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/jagadeesh-vanganooru-117872336" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaTwitter />
                    </a>
                    <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;