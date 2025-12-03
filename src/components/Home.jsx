import React, { useState, useRef, Suspense, lazy } from "react"; // Added useState, useRef
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Added volume icons
import { SiLeetcode } from "react-icons/si";
import "tailwindcss";

// --- Configuration ---
const roles = [
  "Frontend Developer", 1000,
  "Full Stack Developer", 1000,
  "UI/UX Enthusiast", 1000,
  "Problem Solver", 1000,
];

// Lazily load the expensive background component (kept for structural reference, but not used)
const GalaxyBackground = lazy(() => import("./galaxy/Galaxy"));

// Helper component for cleaner social icon rendering
const SocialIcon = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-2xl sm:text-3xl text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
  >
    <Icon />
  </a>
);

const Home = () => {
  // STATE & REF FOR AUDIO CONTROL
  // Start muted to guarantee video autoplay
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef(null); // Ref to access the actual <video> DOM element

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Jagadeesh_14FullStack.pdf"; 
    link.download = "JagadeeshResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // TOGGLE FUNCTION: Flips the mute state and controls the video element
  const toggleMute = () => {
    if (videoRef.current) {
      const newState = !isMuted;
      // Directly modify the DOM property
      videoRef.current.muted = newState; 
      // Update React state to change the icon
      setIsMuted(newState); 
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      
      {/* 💡 Gradient Aura Background Layer */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(at 70% 30%, #4f46e5 0%, transparent 50%), radial-gradient(at 20% 80%, #10b981 0%, transparent 50%)`,
          opacity: 0.4,
          mixBlendMode: 'lighten',
        }}></div>
      </div>
      
      {/* --- Foreground Content --- */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-20">
        <div className="w-full mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            {/* Left Text & Actions */}
            <div className="flex-1 min-w-[280px] order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
              <h4 className="text-xl sm:text-2xl font-light text-indigo-400 mb-2 tracking-widest uppercase">
                Hello, I'm
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                Jagadeesh 
                <span className="text-indigo-500 block lg:inline"> Vanganooru</span>
              </h1>

              {/* Type Animation */}
              <div className="h-16 text-xl sm:text-2xl md:text-3xl font-mono font-semibold mb-6">
                <TypeAnimation
                  sequence={roles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ color: '#00cc99' }} 
                />
              </div>

              <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                A dedicated **Full Stack Developer** specializing in building beautiful, functional, and performance-focused digital experiences. I solve problems with clean code and a relentless focus on **UI/UX excellence**.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap">
                <button className="relative overflow-hidden px-6 py-3 rounded-lg font-bold text-white transition-transform duration-300 transform hover:scale-105 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/50">
                  <Link to='/contact'>Hire Me</Link>
                </button>

                <button 
                  onClick={handleDownload}
                  className="relative overflow-hidden px-6 py-3 rounded-lg font-bold text-indigo-400 border-2 border-indigo-400 
                             hover:bg-indigo-400 hover:text-gray-900 
                             transition-all duration-300 
                             flex items-center gap-2 transform hover:scale-105"
                >
                  <FaFileDownload className="text-lg" /> 
                  Download CV
                </button>
              </div>
            </div>

            {/* Right Video Profile */}
            <div className="flex-1 min-w-[280px] flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                
                {/* 📹 THE VIDEO ELEMENT 📹 */}
                <video 
                  ref={videoRef} // Attach ref for JavaScript control
                  autoPlay 
                  loop 
                  muted={isMuted} // Controlled by state
                  playsInline 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
                >
                  <source 
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" // Placeholder URL
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* 🔊 MUTE/UNMUTE BUTTON UI 🔇 */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 
                             p-2 rounded-full bg-black/50 text-white hover:bg-indigo-500 
                             transition-colors duration-200"
                >
                  {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>

                {/* Subtle, pulsing border animation remains */}
                <div 
                  className="absolute w-full h-full top-0 left-0 rounded-full border-4 border-indigo-500 animate-pulse-slow z-0"
                  style={{ animationDuration: '6s' }} 
                ></div>
              </div>
            </div>
          </div>

          {/* Social Icons - Clean and Centered */}
          <div className="flex gap-6 sm:gap-8 mt-16 justify-center">
            <SocialIcon href="https://github.com/Jagadeeshroc" icon={FaGithub} />
            <SocialIcon href="https://linkedin.com/in/jagadeesh-vanganooru-117872336" icon={FaLinkedin} />
            <SocialIcon href="https://twitter.com/yourusername" icon={FaTwitter} />
            <SocialIcon href="https://leetcode.com/yourusername" icon={SiLeetcode} />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);