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
      <h2
        id="hackathon"
        className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4"
      >
        HACKATHON PROJECT:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 1,
            title: "STATIC RESUME",
            link: "",
            img: "/images/projimg1.jpg",
          },
          {
            id: 2,
            title: "DYNAMIC RESUME",
            link: "",
            img: "/images/projimg2.jpg",
          },
          {
            id: 3,
            title: "EDITABLE RESUME",
            link: "",
            img: "/images/projimg3.jpg",
          },
          {
            id: 4,
            title: "SHARABLE RESUME",
            link: "",
            img: "/images/projimg4.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
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
      <h2
        id="nextjs"
        className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4"
      >
        NEXT.JS PROJECTS:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 5,
            title: "MOVIE SEARCH APP",
            link: "",
            description: "",
            img: "/images/projimg5.jpg",
          },
          {
            id: 6,
            title: "COUNTDOWN TIMER",
            link: "",
            description: "",
            img: "/images/projimg6.jpg",
          },
          {
            id: 7,
            title: "WEATHER APP",
            link: "",
            description: "",
            img: "/images/projimg7.jpg",
          },
          {
            id: 8,
            title: "BIRTHDAY WISH APP",
            link: "",
            description: "",
            img: "/images/projimg8.jpg",
          },
          {
            id: 9,
            title: "NUMBER GUESSING GAME",
            link: "",
            description: "",
            img: "/images/projimg9.jpg",
          },
          {
            id: 10,
            title: "DIGITAL CLOCK APP",
            link: "",
            description: "",
            img: "/images/projimg10.jpg",
          },
          {
            id: 11,
            title: "RANDOM JOKE GENERATOR",
            link: "",
            description: "",
            img: "/images/projimg11.jpg",
          },
          {
            id: 12,
            title: "COLOR PICKER APP",
            link: "",
            description: "",
            img: "/images/projimg12.jpg",
          },
          {
            id: 13,
            title: "PASSWORD GENERATOR APP",
            link: "",
            description: "",
            img: "/images/projimg13.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
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
      <h2
        id="ts-node"
        className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4"
      >
        TYPESCRIPT-NODE PROJECTS:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 14,
            title: "ATM PROJECT",
            link: "",
            description: "",
            img: "/images/projimg14.jpg",
          },
          {
            id: 15,
            title: "CURRENCY CONVERTER",
            link: "",
            description: "",
            img: "/images/projimg15.jpg",
          },
          {
            id: 16,
            title: "NUMBER GUESSING GAME",
            link: "",
            description: "",
            img: "/images/projimg16.jpg",
          },
          {
            id: 17,
            title: "SIMPLE CALCULATOR",
            link: "",
            description: "",
            img: "/images/projimg17.jpg",
          },
          {
            id: 18,
            title: "TODO LIST",
            link: "",
            description: "",
            img: "/images/projimg18.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
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
      <h2
        id="html,css&js"
        className="text-xl md:text-3xl font-Merienda font-semibold hover:text-cyan-300 ml-12 mb-4"
      >
        HTML, CSS & JS PROJECT:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            id: 19,
            title: "ONLINE CALCULATOR",
            link: "",
            description: "",
            img: "/images/projimg19.jpg",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap justify-center items-center"
          >
            <div
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