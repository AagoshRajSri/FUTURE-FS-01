import React from "react";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: "./portfolio.png",
      title: "First Portfolio Website",
      description:
        "The first portfolio website I ever made using HTML, CSS, JS and GSAP",
      link: "https://aagoshrajsri.github.io/",
    },
    {
      image: "./sundown.png",
      title: "Sundown Studio Clone",
      description:
        "Sundown Studio website clone made using HTML, CSS, JS and GSAP",
      link: "https://aagoshrajsri.github.io/Sundown-Studio-Clone/",
    },
    {
      image: "./quiz.png",
      title: "Quiz",
      description: "A small quiz game made using HTML, CSS and JavaScript",
      link: "https://aagoshrajsri.github.io/QUIZ/",
    },
    {
      image: "./tictactoe.png",
      title: "TicTacToe Game",
      description: "A game involving X and O, made using HTML, CSS and JS",
      link: "https://aagoshrajsri.github.io/Tic-Tac-Toe/",
    },
    {
      image: "./stonepaperscissor.png",
      title: "Rock Paper Scissors Game",
      description: "A classic game made to learn the basics of JavaScript",
      link: "https://aagoshrajsri.github.io/Rock-Paper-Scissors/",
    },
    {
      image: "./pizza.png",
      title: "Restaurant",
      description:
        "A fiction website for a restaurant made using HTML, CSS and JS",
      link: "https://aagoshrajsri.github.io/RAJ/",
    },
  ];
  return (
    <main className="p-4">
      <section id="projects" data-aos="fade-up" data-aos-delays="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            This page includes a few of my projects — raw and unfiltered — with
            every mistake and milestone from beginner to experienced developer.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delays="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
