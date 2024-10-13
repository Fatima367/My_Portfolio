"use client";
import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-br from-slate-950 via-slate-700 to-slate-950 bg-opacity-80
    w-screen"
    >
      <section id="contact" className="text-stone-50 text-center py-10">
        <h1 className="font-Merienda text-3xl md:text-5xl font-semibold hover:text-cyan-300 mb-8">
          CONTACT ME:
        </h1>
        <div className="flex justify-center">
          <form className=" p-6 rounded-3xl w-full max-w-lg shadow-2xl">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-md md:text-xl font-Merienda mb-2"
              >
                Enter Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-2xl border-2 border-cyan-300
                 text-stone-50 text-center bg-slate-950 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-md md:text-xl font-Merienda mb-2"
              >
                Enter Your Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-2xl border-2 border-cyan-300
                 text-stone-50 text-center bg-slate-950 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-md md:text-xl font-Merienda mb-2"
              >
                Write Message:
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 rounded-2xl border-2 border-cyan-300 
                text-stone-50 text-center bg-slate-950 focus:outline-none"
                required
              />
            </div>

            <button
              className="border-2 border-black p-2 rounded-xl w-full text-black 
            bg-gradient-to-r from-cyan-500 via-cyan-50 to-cyan-500 hover:translate-y-1
            font-Merienda text-lg font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
