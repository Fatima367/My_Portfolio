"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav
        className="bg-gradient-to-br from-slate-950 via-slate-700 to-slate-950 
      w-screen z-10 p-2 pb-0 "
      >
        <div className="justify-between px-2 lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-4 md:block">
              <Link
                href="/"
                className="text-2xl md:text-3xl pl-1 text-cyan-300 font-Poppins font-semibold"
              >
                <span className="font-Merienda font-semibold text-white mt-3 mb-0">
                  F
                </span>
                <span className="text-stone-50 font-Merienda font-semibold mt-5 mb-0">
                  F
                </span>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className=" text-white hover:text-cyan-300 absolute cursor-pointer top-[1rem] 
                  right-[1rem] w-[2rem] h-[1rem]"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="text-xl " />
                  ) : (
                    <Bars3Icon className="text-xl " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mx-auto ">
                <li
                  className="pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda 
                hover:text-cyan-300 hover:font-bold py-2 md:px-4 text-center  "
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li
                  className="pb-5 text-lg md:text-sm text-stone-50 font-Merienda hover:font-bold
                hover:text-cyan-300 py-2 md:px-4 text-center "
                >
                  <Link href="./about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li
                  className="pb-5 text-lg md:text-sm text-stone-50 font-Merienda hover:font-bold
                hover:text-cyan-300 py-2 md:px-4 text-center "
                >
                  <Link href="./skills" onClick={() => setNavbar(!navbar)}>
                    SKILLS
                  </Link>
                </li>
                <li className="relative group pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda
                 hover:font-bold hover:text-cyan-300 py-2 md:px-4 text-center">
                  <Link href="./projects" onClick={() => setNavbar(!navbar)}>
                    PROJECTS
                  </Link>

                  <ul className="absolute hidden group-hover:block bg-slate-800 text-stone-50 mt-2 w-40 
                  rounded-lg shadow-lg">
                    <li className="px-4 py-2 hover:bg-slate-700 hover:text-cyan-300">
                      <Link href="/projects#hackathon">Hackathons</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700 hover:text-cyan-300">
                      <Link href="/projects#nextjs">NextJs Projects</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700 hover:text-cyan-300">
                      <Link href="/projects#ts-node">Typescript-Node Projects</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700 hover:text-cyan-300">
                      <Link href="/projects#html,css&js">HTML,CSS & JS Project</Link>
                    </li>
                  </ul>
                </li>

                <li
                  className="pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda hover:font-bold
                 hover:text-cyan-300 py-2 md:px-4 text-center "
                >
                  <Link href="./contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
