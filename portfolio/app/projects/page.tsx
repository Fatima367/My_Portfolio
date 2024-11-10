"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-stone-50 bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 w-screen py-8"
    >
      <div className="flex justify-center flex-wrap mb-6">
        <h1 className="text-3xl md:text-5xl font-Merienda font-semibold hover:text-cyan-300">
          PROJECTS
        </h1>
       </div>
      <h2 id="hackathon" className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4">
        HACKATHON PROJECT:
        </h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "STATIC RESUME",
            link: "",
            img : "/images/projimg1.jpg"
            },
          {
            title: "DYNAMIC RESUME",
            link: "",
            img : "/images/projimg2.jpg"
            },
          {
            title: "EDITABLE RESUME",
            link: "",
            img : "/images/projimg3.jpg"
            },
          {
            title: "SHARABLE RESUME",
            link: "",
            img : "/images/projimg4.jpg"
           },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
          <div
            key={index}
            className="h-30 w-72 sm:w-72 bg-gradient-to-br hover:shadow-lg hover:shadow-black
             from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl 
             transform hover:scale-105 transition-all duration-200 ring-1 ring-[#c1c2c2]"
          >
            <div className="flex flex-row gap-x-4 items-center p-4">
              <Image
                src={project.img}
                alt="Project Thumbnail"
                height={60}
                width={60}
                className="rounded-full border h-60px w-60px border-cyan-700 shadow-md shadow-black"
              />
              <Link href={project.link} target="_blank">
                <p
                  className="text-slate-950 text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                >
                  {project.title}
                </p>
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>
      <br />      
      <h2 id="nextjs" className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4">
        NEXT.JS PROJECTS:
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "MOVIE SEARCH APP",
            link: "",
            description:"",
            img:"/images/projimg5.jpg"
          },
          {
            title: "COUNTDOWN TIMER",
            link: "",
            description:"",
            img:"/images/projimg6.jpg"
          },
          {
            title: "WEATHER APP",
            link: "",
            description:"",
            img:"/images/projimg7.jpg"
          },
          {
            title: "BIRTHDAY WISH APP",
            link: "",
            description:"",
            img:"/images/projimg8.jpg"
          },
          {
            title: "NUMBER GUESSING GAME",
            link: "",
            description:"",
            img:"/images/projimg9.jpg"
          },
          {
            title: "DIGITAL CLOCK APP",
            link: "",
            description:"",
            img:"/images/projimg10.jpg"
          },
          {
            title: "RANDOM JOKE GENERATOR",
            link: "",
            description:"",
            img:"/images/projimg11.jpg"
          },
          {
            title: "COLOR PICKER APP",
            link: "",
            description:"",
            img:"/images/projimg12.jpg"
          },
          {
            title: "PASSWORD GENERATOR APP",
            link: "",
            description:"",
            img:"/images/projimg13.jpg"
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
          <div
            key={index}
            className="h-30 w-72 sm:w-72 bg-gradient-to-br hover:shadow-lg hover:shadow-black
             from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl 
             transform hover:scale-105 transition-all duration-200 ring-1 ring-[#c1c2c2]"
          >
            <div className="flex flex-row gap-x-4 items-center p-4">
              <Image
                src={project.img}
                alt="Project Thumbnail"
                height={60}
                width={60}
                className="rounded-full border w-60px h-60px border-cyan-700 shadow-md shadow-black"
              />
              <Link href={project.link} target="_blank">
                <p
                  className="text-slate-950 text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                >
                  {project.title}
                </p>
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>{" "}
      <br />
      <h2 id="ts-node" className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4">
        TYPESCRIPT-NODE PROJECTS:
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "ATM PROJECT",
            link: "",
            description:"",
            img: "/images/projimg14.jpg"
          },
          {
            title: "CURRENCY CONVERTER",
            link: "",
            description:"",
            img:"/images/projimg15.jpg"
          },
          {
            title: "NUMBER GUESSING GAME",
            link: "",
            description:"",
            img:"/images/projimg16.jpg"
          },
          {
            title: "SIMPLE CALCULATOR",
            link: "",
            description:"",
            img:"/images/projimg17.jpg"
          },
          {
            title: "TODO LIST",
            link: "",
            description:"",
            img:"/images/projimg18.jpg"
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
          <div
            key={index}
            className="h-30 w-72 sm:w-72 bg-gradient-to-br hover:shadow-lg hover:shadow-black
             from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl 
             transform hover:scale-105 transition-all duration-200 ring-1 ring-[#c1c2c2]"
          >
            <div className="flex flex-row gap-x-4 items-center p-4">
              <Image
                src={project.img}
                alt="Project Thumbnail"
                height={60}
                width={60}
                className="rounded-full border w-60px h-60px border-cyan-700 shadow-md shadow-black"
              />
              <Link href={project.link} target="_blank">
                <p
                  className="text-slate-950 text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                >
                  {project.title}
                </p>
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>{" "}
      <br />
      <h2 id="html,css&js" className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4">
        HTML, CSS & JS PROJECT:
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "ONLINE CALCULATOR",
            link: "",
            description:"",
            img:"/images/projimg19.jpg"
          },
        ].map((project, index) => (
          <div className="flex flex-wrap justify-center items-center">
          <div
            key={index}
            className="h-30 w-72 sm:w-72 bg-gradient-to-br hover:shadow-lg hover:shadow-black
             from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl 
             transform hover:scale-105 transition-all duration-200 ring-1 ring-[#c1c2c2]"
          >
            <div className="flex flex-row gap-x-4 items-center p-4">
              <Image
                src={project.img}
                alt="Project Thumbnail"
                height={60}
                width={60}
                className="rounded-full w-60px h-60px border border-cyan-700 shadow-md shadow-black"
              />
              <Link href={project.link} target="_blank">
                <p
                  className="text-slate-950 text-lg font-Merienda font-semibold hover:font-bold 
          cursor-pointer text-center sm:text-left"
                >
                  {project.title}
                </p>
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>{" "}
      <br />

    </section>
  );
};

export default Projects;
