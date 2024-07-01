import React from "react";
import ListenUpImage from "../imags/ListenUp.png";
import FitConnectImage from "../imags/FitConnect.png";
import WeatherImage from "../imags/weather.png";

const Project = () => {
  return (
    <div name="Project" className="w-full bg-gradient-to-tr from-slate-700 to-black py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-wider text-emerald-400 mb-8 text-center font-raleway">Projects</h2>
        <p className="text-sky-100 text-xl text-center mb-8">(Click to view Full Project)</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Project 1: ListenUp */}
          <div className="bg-stone-900 rounded-lg overflow-hidden shadow-md hover:scale-105 shadow-teal-400">
            <a href="https://ethnus-project-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={ListenUpImage} alt="ListenUp" className="w-full h-48 object-cover object-center" />
            </a>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-100 mb-2">ListenUp</h3>
              <p className="text-sky-100 text-base leading-relaxed">
                Welcome to ListenUp - Your Podcast Destination. Our mission is to connect you with the world of podcasts, providing a platform for both listeners and creators to thrive.
              </p>
            </div>
          </div>

          {/* Project 2: FitConnect */}
          <div className="bg-stone-900 rounded-lg overflow-hidden shadow-md hover:scale-105 shadow-teal-400">
            <a href="https://fit-connect-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={FitConnectImage} alt="FitConnect" className="w-full h-48 object-cover object-center" />
            </a>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-lime-500 mb-2">FitConnect</h3>
              <p className="text-sky-100 text-base leading-relaxed">
                Our platform goes beyond traditional fitness trackers by incorporating a holistic approach to wellness, including sleep and wake-up time tracking, personalized goal setting, progress visualization, and social interaction with friends.
              </p>
            </div>
          </div>

          {/* Project 3: Weather-Whymsi */}
          <div className="bg-stone-900 rounded-lg overflow-hidden shadow-md hover:scale-105 shadow-teal-400">
            <a href="https://weather-whymsi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={WeatherImage} alt="Weather-Whymsi" className="w-full h-48 object-cover object-center" />
            </a>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-2">Weather-Whymsi</h3>
              <p className="text-sky-100 text-base leading-relaxed">
                A Weather information providing web page which provides accurate weather updates of each and every city of the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sky-100">
        Find more exciting projects on my <a href="https://github.com/aditya-04kashyap?tab=repositories" className="text-emerald-500 hover:text-emerald-200 ">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
