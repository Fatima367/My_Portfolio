"use client";
import React from "react";
import Footer from "../footer/page";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="h-screen bg-gradient-to-br from-slate-950 via-slate-700
         to-slate-950 w-screen
          flex flex-col justify-center items-center text-center opacity-90"
      >
        <h1
          className="text-xl md:text-5xl font-bold font-Merienda text-white p-6
        hover:text-cyan-300"
        >
          ABOUT ME
        </h1>

        <div
          className="max-w-4xl w-full md:w-11/12 rounded-xl shadow-lg leading-relaxed 
          md:leading-10 p-6 text-md md:text-xl font-sans text-stone-50 tracking-wide"
        >
          <p className=" font-Merienda">
          "I'm a dedicated Front-End Web Developer with skills in building
            visually attractive, responsive, and user-friendly websites. I work
            with HTML, CSS, JavaScript, and modern frameworks like Next.js and
            React. I also have strong experience with Tailwind CSS for building
            fast, flexible, and scalable UIs. I thrive on turning creative
            concepts into functional and high-performing websites that provide
            seamless user experiences across all devices. I focus on clean,
            maintainable code and improving performance. Whether it's dynamic
            single-page or full websites, I strive to connect design with
            development. Ready to build exceptional web experiences that exceed
            expectations!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
