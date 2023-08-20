'use client'
import React, { useEffect, useState } from 'react';

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);
    // const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    useEffect(() => {

        if (!isMobile) {
            console.log('mobile naa');
            const numberOfBubbles = 20; // Adjust the number of bubbles
            const generateRandomBubble = () => {
                const left = Math.random() * 100; // Random left position
                const animationDuration = 5 + Math.random() * 5; // Random duration
                const bubbleColor = generateRandomColor(); // Generate random bubble color

                return (
                    <div
                        key={bubbles.length}
                        className={'bubble'}
                        style={{
                            left: `${left}%`,
                            animationDuration: `${animationDuration}s`,
                            backgroundColor: bubbleColor,
                        }}
                    ></div>
                );
            };

            const intervalId = setInterval(() => {
                if (bubbles.length < numberOfBubbles) {
                    setBubbles((prevBubbles) => [...prevBubbles, generateRandomBubble()]);
                } else {
                    clearInterval(intervalId);
                }
            }, 1000); // Add new bubble every second

            return () => {
                clearInterval(intervalId);
            };
        }else{
            setBubbles([])
        }


    }, [isMobile, bubbles.length]);

    // Generate random bubble color from red, green, blue, or white
    const generateRandomColor = () => {
        const colors = ['red', 'green', 'blue', 'white'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return <div className={'bubbleBackground'}>{bubbles}</div>;
};

export default Bubbles;