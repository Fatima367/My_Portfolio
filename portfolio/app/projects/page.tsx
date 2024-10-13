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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-10">
        {[
          {
            title: "CALCULATOR",
            description:
              "A command-line interface calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division.",
          },
          {
            title: "ATM",
            description:
              "This project is a command-line interface (CLI) ATM simulator built with TypeScript and Inquirer.js, offering a virtual banking experience.",
          },
          {
            title: "TODO APP",
            description:
              "This project is a command-line interface (CLI) to-do list application built with TypeScript and Inquirer.js, enabling users to effectively manage their tasks.",
          },
          {
            title: "COUNTDOWN",
            description:
              "This command-line interface (CLI) countdown timer application, developed with TypeScript and Inquirer.js, is designed to help users effectively manage and track their time.",
          },
          {
            title: "Quiz App",
            description:
              "A command-line interface calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division.",
          },
          {
            title: "CURRENCY CONVERTER",
            description:
              "This project is a command-line interface (CLI) currency converter built with TypeScript and Inquirer.js, offering an interactive text-based experience for currency conversion.",
          },
          {
            title: "WORD COUNTER",
            description:
              "This project is a command-line interface (CLI) word counter developed with TypeScript and Inquirer.js, providing an interactive text-based experience for counting words.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="h-40 w-full sm:w-80 bg-gradient-to-br hover:shadow-lg hover:shadow-black
             from-cyan-900 via-white to-cyan-900 shadow-md shadow-slate-950 rounded-xl 
             transform hover:scale-105 transition-all duration-200"
          >
            <div className="flex flex-col gap-y-4 items-center p-4">
              <Image
                src=""
                alt="Project Thumbnail"
                height={60}
                width={60}
                className="rounded-full border border-cyan-700 shadow-md shadow-black"
              />
              <Link href="/" target="_blank">
                <p
                  className="text-2xl text-slate-950 font-Merienda font-semibold hover:font-bold 
                cursor-pointer"
                >
                  {project.title}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>{" "}
      <br />
    </section>
  );
};

export default Projects;
