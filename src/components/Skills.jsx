import React from "react";

const skillsData = [
  {
    id: 1,
    image: "./node.png",
    title: "Node.js",
    description:
      "JavaScript runtime for fast, scalable server-side applications.",
  },
  {
    id: 2,
    image: "./icon_react.png",
    title: "React.js",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 3,
    image: "./tailwindcss.png",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    id: 4,
    image: "./gsap.png",
    title: "G-SAP",
    description: "JavaScript library for web animations.",
  },
];

// ✅ FIXED: Added return to this component
const SkillBox = ({ image, title, description }) => {
  return (
    <article
      className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </article>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      {/* Purple Blur Background */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#3c88f5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      {/* Left Image */}
      <img
        src={`${import.meta.env.BASE_URL}heroimg.png`}
        alt="Left Picture"
        className="absolute z-10 left-2 top-2 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />

      {/* Text and Skill Cards */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Experience <br /> and{" "}
            <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-gray-400 sm:mt-4 text-sm sm:text-base mt-2">
            To be completed soon -
            <span className="text-green-500 cursor-default">
              {" "}
              [ Next.Js, Flutter, Blockchain ]
            </span>
          </p>
        </header>

        {/* Skill Cards Grid */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>

      {/* Right Image */}
      <img
        src={`${import.meta.env.BASE_URL}heroimg.png`}
        alt="Right Picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
