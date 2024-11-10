"use client";
import Footer from "@/app/footer/page";
import Link from "next/link";
import Skills from "./skills/page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="bg-gradient-to-br from-slate-950 via-slate-700 to-slate-950
       min-h-screen flex flex-col justify-center w-screen "
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center container py-4 pb-20
         space-y-6 md:space-y-0 md:space-x-8 mx-auto px-4"
        >
          <div
            className="rounded-full shadow-blue-200 bg-slate-950 shadow-md
            w-[250px] h-[250px] md:w-[350px] md:h-[330px] bg-cover bg-center ring-2
            ring-cyan-300 hover:shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-200"
          >
            <Image
              src={"/images/myimage.jpg"}
              alt="profile image"
              height={330}
              width={350}
              className="rounded-full object-cover md:w-[350px] md:h-[330px] sm:w-[250px] sm:h-[250px]"
            />
          </div>

          <div
            className="rounded-full shadow-md shadow-blue-200 bg-gradient-to-br from-slate-950 via-slate-700
           to-slate-950 w-full md:w-[700px]
           h-auto md:h-[350px] bg-cover bg-center ring-2 ring-cyan-300 hover:shadow-lg p-4
           hover:shadow-black hover:scale-105 transition-all duration-200"
          >
            <div
              className="flex flex-col justify-center items-center text-center md:text-left md:mt-6 md:ml-6
              lg:mt-6 lg:ml-6"
            >
              <div
                className="text-stone-50 mb-4 text-2xl md:text-4xl font-Merienda font-extrabold
              text-center"
              >
                <span className="text-transparent bg-clip-text bg-cyan-500">
                  Hello! I'm <br />
                </span>
                <span className="text-transparent bg-clip-text bg-white">
                  FATIMA FAISAL
                </span>
                <span className="text-transparent bg-clip-text bg-cyan-500">
                  <br />A Frontend Developer <br />
                </span>
              </div>

              <p className="text-stone-50 text-base md:text-lg mb-5 leading-relaxed">
                I create responsive, visually appealing interfaces, web
                applications that deliver seamless user experiences.
              </p>

              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-10">
                <Link href="mailto:XYZ@gmail.com" target="_blank">
                  <button
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-50
                    to-cyan-500 hover:translate-y-1 text-black w-full md:w-auto hover:font-bold"
                  >
                    Hire Me
                  </button>
                </Link>

                <button
                  className="px-1 py-1 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-50 to-cyan-500
                  text-white border border-white hover:translate-y-1 shadow-lg"
                >
                  <span
                    className="block bg-slate-950 rounded-full px-5 py-2 text-stone-50 hover:bg-cyan-500
                    hover:font-bold"
                  >
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
