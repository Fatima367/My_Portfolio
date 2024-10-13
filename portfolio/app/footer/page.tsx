"use client";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0b0517] h-max w-screen ">
      <div
        className="container mx-auto p-4 pt-10 md:pt-20 flex flex-col 
      md:flex-row md:justify-evenly md:space-x-10 items-center text-white"
      >
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className=" font-bold text-5xl text-stone-50 font-Merienda">
            F<span className="text-white font-Merienda">F</span>
          </div>
          <div className="p-2 text-xs md:text-sm tracking-wide">
            <p className="font-sans font-light">
              copyrights2024 | All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="text-xl md:font-Merienda font-thin mb-6 md:mb-0">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link
                href="/"
                className="text-slate-50 hover:text-cyan-300 hover:border-b
         border-blue-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-50 hover:text-cyan-300 hover:border-b
         border-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-slate-50 hover:text-cyan-300 
        hover:border-b border-blue-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-50
         hover:text-cyan-300 hover:border-b border-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-xl md:font-Merienda font-thin">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link
                href=""
                target="_blank"
                className="text-slate-50
         hover:text-cyan-300"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href=""
                target="_blank"
                className="text-slate-50
         hover:text-cyan-300"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-2 pt-10 md:pt-12 pb-12">
        <SocialIcon
          url=""
          target="_blank"
          className="border-2 border-white rounded-full hover:scale-110 duration-300"
          style={{ height: 40, width: 40 }}
        />

        <SocialIcon
          url=""
          target="_blank"
          className="border-2 border-white rounded-full hover:scale-110 duration-300"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </footer>
  );
};

export default Footer;
