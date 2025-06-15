import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0d0d15] text-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20"
    >
      {/* LEFT: Robot Section */}
      <div
        className="relative w-full md:w-1/2 flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Background Blue Gradient Card */}
        <div className="absolute w-[80%] h-[70%] bg-gradient-to-r from-[#95b0f9] to-[#0062ff] rounded-full transform rotate-6 z-0"></div>

        {/* Top-left Image */}
        <img
          src="./img_about1.png"
          alt="Top Left"
          className="absolute top-5 left-5 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg z-20"
          data-aos="fade-down-left"
        />

        {/* Bottom-right Image */}
        <img
          src="./img_about.png"
          alt="Bottom Right"
          className="absolute bottom-5 right-5 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg z-20"
          data-aos="fade-up-right"
        />

        {/* Robot Image */}
        <img
          src="./img_about2.png"
          alt="Robot"
          className="relative z-10 w-52 sm:w-64 md:w-72 levitate"
          data-aos="zoom-in"
        />
      </div>

      {/* RIGHT: About Me Text */}
      <div
        className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-12 text-center md:text-left"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg font-mono text-gray-300 mb-6">
          Hi, I'm Aagosh a Computer Science student driven by curiosity and a
          love for technology that has the power to reshape the future. Whether
          it's AI, Web3, or the next big thing in computing, I'm always eager to
          dive deep and explore how advanced innovations can change the game in
          the tech industry. When I’m not coding or learning about breakthrough
          technologies, you’ll probably find me enjoying a strong cup of tea or
          passionately watching (or playing) football. I believe the best ideas
          often come when you mix logic with a little bit of life’s simple joys.
          Let’s build something revolutionary. 🚀
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aagoshrajsrivastava/"
        >
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Let's Connect !
          </button>
        </a>
      </div>
    </section>
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
