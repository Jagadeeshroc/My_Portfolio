import React from "react";
import  { useState } from 'react';
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
    // Use high contrast colors
    const colors = [
      '#ff4d4d', '#4dd2ff', '#33cc33', '#ffcc00', '#cc66ff', '#00cc99', '#ff66b2'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
const Home = () => {
    const [color, setColor] = useState(getRandomColor());
    const handleDownload = () => {
        // Replace with your actual CV file path
        const link = document.createElement('a');
        link.href = '/JagadeeshFullStackR4.pdf';
        link.download = 'JagadeeshFullStackR4.pdf';
        
    };

    return (
        <section id="home" className="min-h-screen flex items-center px-10 py-20 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 p-2">
            <div className="w-full">
                <div className="flex justify-between items-center flex-wrap gap-8">
                    {/* Text Content */}
                    <div className="flex-1 min-w-[300px]">
                        <h4 className="text-xl md:text-2xl text-blue-500 font-bold mb-10">Hello, I'm</h4>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" >Jagadeesh 
                        <span style={{ textShadow: '1px 1px 0px rgba(255, 0, 128, 0.5)' }} >Vanganooru </span> </h1>
                        <div className="h-12 md:h-16 text-2xl md:text-3xl font-semibold mb-6">
                            <TypeAnimation
                                sequence={roles.flatMap((role) => [
                                () => setColor(getRandomColor()), // change color
                                role,
                                1000
                                ])}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{ color }}
                            />
                            </div>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-[700px] leading-relaxed font-['Dancing_Script']">
                        A passionate and dedicated full-stack developer with a strong foundation in web development and design. I've built multiple projects that showcase both frontend and backend skills, with a focus on creating beautiful, functional, and user-friendly digital experiences. Always eager to learn and explore new technologies to stay ahead in the ever-evolving tech world.
                        </p>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Dancing+Script:wght@400..700&family=Lavishly+Yours&family=Underdog&display=swap');
                            </style>
                        
                        <div className="flex gap-4 flex-wrap">
                           
                            <button 
                                onClick={() => window.location.href = '/contact'}
                                className="px-6 py-3 rounded-full font-semibold text-white border-2 border-transparent hover:border-blue-500 transition-all duration-300 flex items-center gap-2 gradient-bg-animate hover:text-blue-100 cursor-pointer"
                                >
                                Hire Me
                                </button>

                                <button 
                                        onClick={handleDownload}
                                    className="px-6 py-3 rounded-full font-semibold text-blue-500 border-2 border-blue-500 
                                                hover:text-white hover:border-white 
                                                transition-all duration-300 
                                                flex items-center gap-2 
                                                relative overflow-hidden group cursor-pointer"
                                    >
                                    <span className="absolute inset-0 w-full h-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0 rounded-full"></span>
                                    <span className="flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
                                        <FaFileDownload className="text-lg" /> Download CV
                                    </span>
                                    </button>
                        </div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="flex-1 min-w-[300px] flex justify-center ml-40">
                        <div className="relative w-100 h-100 md:w-80 md:h-80 lg:w-100  lg:h-96">
                            <img 
                                src="https://media-hosting.imagekit.io/6d5419bef4394484/Web_Photo_Editor%20(2).jpg?Expires=1839224679&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Inbg-FVXLQSig-G~Uet0cDtXUX3j15Rs107~9qNtdvBpNDxxCR1XZAtTT3dYRcmQeNBe7v53liX5to-mMJLSkZZkoEBqvNvizPfx8sRIDh2aasl4-EZLY-IP~eQ7BYzkwDiGHb8GwNA67ONZIKVaT9pdmtOA2isLBI55rkgDi5Fp8HZ4XmAvp0bb5bbV69f85-rge1r3CdKWL-4sNA8LwQlYl0JZupQ8GnvPtcBUQYYHmDDrgs01uVxhUzm0kAokrR0r9w9eF7mXCgftJmX8WnFsuPEqF9ypsWbjIIySiVIfQOfZqP3WbfOcs5tCMSIJXgoelMrQmVQIipg4qiCqjA__" 
                                alt="Profile" 
                                className="w-100 h-100 object-cover rounded-full border-8 border-white shadow-xl relative z-10" 
                            />
                            <div className="absolute w-full h-full top-0 left-0 rounded-full border-8 border-blue-500 rotate-45 animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-6 mt-12 justify-center">
                    <a href="https://github.com/Jagadeeshroc" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/jagadeesh-vanganooru-117872336" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <FaTwitter />
                    </a>
                    <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;