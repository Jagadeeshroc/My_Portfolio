import React, { useEffect, useRef } from 'react';


// Helper function from the original JS snippet
function randomColors(count) {
    return new Array(count).fill(0).map(
        () =>
            '#' +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')
    );
}

const ThreeDHome = () => {
    const canvasRef = useRef(null);
    const appRef = useRef(null); // Ref to hold the TubesCursor instance

    useEffect(() => {
        if (canvasRef.current && window.TubesCursor) {
            // 1. Initialize the TubesCursor App
            const app = window.TubesCursor(canvasRef.current, {
                tubes: {
                    // Initial colors from your snippet
                    colors: ['#f967fb', '#53bc28', '#6958d5'], 
                    lights: {
                        intensity: 200,
                        // Initial light colors
                        colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
                    },
                },
            });

            appRef.current = app; // Save the instance to the ref

            // 2. Add Global Click Listener for Color Change
            const colorChangeListener = () => {
                if (appRef.current) {
                    const colors = randomColors(3);
                    const lightsColors = randomColors(4);
                    console.log('New colors:', colors, lightsColors);
                    appRef.current.tubes.setColors(colors);
                    appRef.current.tubes.setLightsColors(lightsColors);
                }
            };
            
            document.body.addEventListener('click', colorChangeListener);

            // 3. Cleanup Function
            return () => {
                // Important: Clean up the event listener when the component unmounts
                document.body.removeEventListener('click', colorChangeListener);
                
                // Optional: Dispose of the Three.js scene/renderer if the library provides a dispose method
                // (Assuming the library handles its own cleanup internally if the canvas is removed)
            };
        }
    }, []); // Empty dependency array means this runs only on mount

    return (
        <div id="app">
            {/* The canvas element where the 3D background is rendered */}
            <div id="canvas" ref={canvasRef} /> 
            
            {/* Foreground content wrapper */}
            <div className="hero">
                <h1>Jagadeesh</h1>
                <h2>Full Stack Developer</h2>
                <p>Click anywhere to change the background colors!</p>
            </div>
        </div>
    );
};

export default ThreeDHome;