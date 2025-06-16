import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <Navbar />
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5]
      to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Aagosh Raj Srivastava
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold font-mono text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Full Stack Web Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-white mb-6">
            Learning Relentlessly. Building Purposefully.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://github.com/AagoshRajSri" target="_blank">
              <img
                src={`${import.meta.env.BASE_URL}git.png`}
                alt="GitHub"
                className="w-11 h-11"
              />
            </a>
            {/* <a href="#">
              <img src="/facebook.png" alt="Facebook" className="w-11 h-11" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/aagoshrajsrivastava/"
              target="_blank"
            >
              <img
                src={`${import.meta.env.BASE_URL}linked.png`}
                alt="LinkedIn"
                className="w-11 h-11"
              />
            </a>

            <a
              className="ml-2"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aagoshrajsrivastava10@gmail.com&su=Subject%20Here&body=Body%20text%20here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}email.png`}
                alt="Email"
                className="w-9 h-9"
              />
            </a>
          </div>
          <a href="/myresume.pdf" download>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128, 0, 128, 0.7)] rounded-full text-lg">
              Download Resume
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}heroimg.png`}
            alt="Hero"
            className="w-[250px] h-[300px] sm:w-[480px] md:h-[485px] sm:h-[400px] object-cover rounded-lg levitate"
          />
        </figure>
      </main>
    </div>
  );
  <style>
    {`
    @keyframes levitate {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .levitate {
      animation: levitate 3s ease-in-out infinite;
    }
  `}
  </style>;
}
