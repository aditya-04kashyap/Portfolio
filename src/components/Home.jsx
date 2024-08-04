import React, { useEffect, useState } from 'react';
import pp from './pp.png';

const Home = () => {
  // State to manage the animation sequence
  const [currentIndex, setCurrentIndex] = useState(0);
  const letters = ['A', 'd', 'i', 't', 'y', 'a', '.', '.'];

  // Effect to manage animation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 1000); // Adjust delay as needed

    return () => clearInterval(interval);
  }, []);

  // Render the component
  return (
    <div name="Home" className="w-full bg-gradient-to-tr from-slate-700 to-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-10 sm:flex-row">
        <div className="text-center sm:text-left sm:flex-1 sm:px-10">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-wider text-emerald-400 pt-28 font-raleway">
            Hello!
          </h2>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-wider text-emerald-400 pb-4 pt-5 font-raleway mb-10">
            I am{' '}
            <span className="font-bodd">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={`letter ${index === currentIndex ? 'focused' : ''}`}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h2>
          <p className="text-white text-xl pb-5 tracking-wide font-mono leading-relaxed mb-8">
            Welcome to my portfolio. I am Aditya, a proficient full-stack web developer with expertise
            in DSA, AWS Cloud, and creating dynamic, user-friendly applications. Explore my work to see
            how I combine creativity and technical skill to deliver exceptional digital solutions.
          </p>
          <h2 className="text-xl sm:text-4xl font-raleway font-bold text-emerald-400 pb-4 mb-6">
            Why I code ?
          </h2>
          <p className="text-sky-100 text-xl mb-10 tracking-wide font-mono leading-relaxed">
            Coding is my passion because it allows me to transform ideas into reality. It’s a field
            where I can continuously learn and grow, pushing the boundaries of technology and
            creativity. Every line of code I write brings me closer to creating innovative solutions
            that can make a difference in the digital world.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={pp}
            alt="Profile"
            className="rounded-full mx-auto w-3/4 sm:w-4/5 sm:h-4/5 shadow-md shadow-emerald-200 md:ml-10 animate-image transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
      <style jsx>{`
        .letter {
          display: inline-block;
          font-size: 3rem; /* Adjust font size */
          transition: all 0.3s ease-out;
          opacity: 0.3; /* Initial opacity */
        }

        .focused {
          opacity: 1; /* Focused letter opacity */
        }

        @media (max-width: 640px) {
          .letter {
            font-size: 2rem; /* Decrease font size for smaller screens */
          }
        }

        .animate-image {
          animation: rotateFlipBounce 3s ease-in-out forwards;
        }

        @keyframes rotateFlipBounce {
          0% {
            transform: rotate(0) scale(0);
            opacity: 0;
          }
          50% {
            transform: rotate(360deg) scale(1.5);
            opacity: 0.5;
          }
          75% {
            transform: rotateY(180deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotateY(0) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
