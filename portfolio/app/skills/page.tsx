"use client";
import React from "react";

const Skills = () => {
  return (
    <div
      className="h-max bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950
     text-stone-50 py-12 scroll-snap w-screen"
    >
      <section id="skills" className="text-center mx-auto container ">
        <div className="pb-10">
          <h1 className="text-3xl md:text-5xl font-Merienda font-semibold hover:text-cyan-300">
            My Skills
          </h1>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
         mx-auto text-center md:px-12"
        >
          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md 
          shadow-slate-950 rounded-xl transform hover:shadow-lg hover:shadow-black
          hover:scale-105 transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              HTML
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Building structured web content.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md 
          shadow-slate-950 rounded-xl transform hover:shadow-lg hover:shadow-black
          hover:scale-105 transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              CSS
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Styling responsive, visually appealing interfaces.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md 
          shadow-slate-950 rounded-xl transform hover:scale-105 hover:shadow-lg hover:shadow-black
          transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              JavaScript
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Creating dynamic, interactive front-end experiences.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md 
          shadow-slate-950 rounded-xl transform hover:scale-105 hover:shadow-lg hover:shadow-black
           transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              TypeScript
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Writing scalable, error-free code with strong typing.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md
           shadow-slate-950 rounded-xl transform hover:scale-105 hover:shadow-lg hover:shadow-black
          transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              React.js
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Building reusable components for interactive UIs.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md
           shadow-slate-950 rounded-xl transform hover:scale-105 hover:shadow-lg hover:shadow-black
          transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              Node.js
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Creating efficient server-side applications.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl transform hover:scale-105 
          hover:shadow-lg hover:shadow-black
          transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              Front-End Development
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Developing responsive, user-centric front-end interfaces.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-cyan-900 via-white to-cyan-900 shadow-md
           shadow-slate-950 rounded-xl transform hover:shadow-lg hover:shadow-black
          hover:scale-105 transition-all duration-200 p-6"
          >
            <h2 className="text-2xl text-slate-950 font-semibold font-Merienda">
              UI Design
            </h2>
            <p className="text-md mt-3 text-black font-serif">
              Crafting intuitive, aesthetically pleasing interfaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
