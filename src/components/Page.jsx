import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Page.css'; // Import your CSS file for styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
const Page = () => {
    const navigate = useNavigate(); // Initialize navigate function
    // Initialize navigate function
    
    useEffect(() => {
        const createSnowFlower = () => {
          const flower = document.createElement('div');
          flower.className = 'snow-flower';
          
          // Choose between snowflake or flower randomly
          const types = ['❄', '❅', '❆', '🌸'];
          flower.innerHTML = types[Math.floor(Math.random() * types.length)];
          
          // Randomize position and animation
          const leftIni = Math.random() * window.innerWidth;
          const leftEnd = leftIni + (Math.random() * 1000 - 50);
          
          flower.style.setProperty('--left-ini', `${leftIni}px`);
          flower.style.setProperty('--left-end', `${leftEnd}px`);
          
          // Adjust size based on device
          const size = window.innerWidth > 768 ? 
            (Math.random() * 1.5 + 0.5) : 
            (Math.random() * 0.8 + 0.3);
          flower.style.fontSize = `${size}rem`;
          
          // Adjust duration based on device
          const duration = window.innerWidth > 768 ? 
            (Math.random() * 10 + 5) : 
            (Math.random() * 15 + 10);
          flower.style.setProperty('--duration', `${duration}s`);
          flower.style.animationDuration = `${duration}s`;
          
          // Randomize delay
          flower.style.animationDelay = `${Math.random() * 5}s`;
          
          document.body.appendChild(flower);
          
          // Remove flower after animation completes
          setTimeout(() => {
            flower.remove();
          }, duration * 1000);
        };
      
        // Adjust quantity based on screen size
        const flowerCount = window.innerWidth > 768 ? 20 : 
                           window.innerWidth > 480 ? 12 : 8;
        
        // Create initial flowers
        for (let i = 0; i < flowerCount; i++) {
          setTimeout(createSnowFlower, Math.random() * 3000);
        }
        
        // Create new flowers periodically with adjusted frequency
        const intervalTime = window.innerWidth > 768 ? 800 : 1500;
        const interval = setInterval(createSnowFlower, intervalTime);
        
        return () => clearInterval(interval);
      }, []);
      let lastScrollY = window.scrollY;
        let isScrollingDown = false;
        let scrollTimeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Clear any existing timeout
            clearTimeout(scrollTimeout);
            
            // Determine scroll direction
            isScrollingDown = currentScrollY > lastScrollY;
            lastScrollY = currentScrollY;
            
            // If scrolling down, set a timeout to navigate
            if (isScrollingDown) {
                scrollTimeout = setTimeout(() => {
                    navigate('/home');
                }, 3000); // 500ms delay after scrolling stops
            }
        };
        window.addEventListener('scroll', handleScroll);
        
   
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  bg-cover bg-center relative overflow-hidden">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0  backdrop-blur-sm"></div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl">
                {/* Animated heading */}
                <h1 className="font-['Lavishly_Yours'] text-5xl md:text-7xl m-5 pb-6 animate-fade-in bg-gradient-to-r from-red-500 via-yellow-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
    Welcome To My Creative Space
</h1>
                
                {/* Improved text with animation */}
                <p className="font-['Lavishly_Yours'] text-2xl md:text-3xl text-black-100 mb-8 opacity-0 animate-fade-in-delayed animate-duration-1000 animate-fill-forwards">
                    Explore my projects and skills to see what I can do!
                </p>
                
                {/* Enhanced button container with gradient background */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Animated button with hover effects */}
                    <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full mt-4 overflow-hidden group transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <span className="relative z-10 font-[underdog]" ><Link to='/home'>View My Work</Link></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    
                    {/* Additional call-to-action */}
                    <p className="text-black/80 mt-6 text-sm md:text-base">
                        Scroll down or click above to discover more
                    </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-pink-500/20 blur-xl"></div>
            </div>
            
            {/* Animated scrolling indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce onClick={() => navigate('/home')} cursor-pointer">
                <svg className="w-8 h-8 text-black-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            
            {/* Add this to your global CSS or as a style tag */}
            <style jsx="true">{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .animate-fade-in-delayed {
                    animation: fade-in 1s ease-out 0.5s forwards;
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-20px);}
                    60% {transform: translateY(-10px);}
                }
                     @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 5s ease infinite;
    }
            `}</style>
        </div>
    );
}

export default Page;