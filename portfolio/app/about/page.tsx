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
          className="text-2xl md:text-6xl font-bold font-Merienda text-white p-6
        hover:text-cyan-300"
        >
          About Me
        </h1>

        <div
          className="max-w-4xl w-full md:w-11/12 rounded-xl shadow-lg leading-relaxed 
          md:leading-10 p-6 text-md md:text-xl font-sans text-stone-50 tracking-wide"
        >
          <p className="font-serif">
            "I’m a passionate Front-End Web Developer with expertise in crafting
            visually appealing, responsive, and user-friendly websites. I
            specialize in HTML, CSS, JavaScript, and modern frameworks like
            Next.js and React, with a deep focus on Tailwind CSS for rapid,
            customizable UI design. My goal is to turn creative ideas into
            functional, high-performing websites that deliver seamless user
            experiences across devices. With a strong eye for design and
            attention to detail, I prioritize clean, maintainable code and
            optimized performance. Whether building dynamic single-page
            applications or robust websites, I aim to bridge the gap between
            design and development. Let’s create something amazing together!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
