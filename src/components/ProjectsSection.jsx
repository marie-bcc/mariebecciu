// @ts-nocheck
import React from "react";
import ProjectCard from "./ProjectCard"; // Assurez-vous que le chemin d'importation est correct
import argentBankImg from "../Img/ArgentBank.png";
import ninaImg from "../Img/Nina.png";
import kasaImg from "../Img/Kasa.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Argent Bank",
      description:
        "ARGENT BANK, a modern banking platform built with React, At the heart of our user management system is a robust and secure authentication method. It is managed using React for the frontend, and communicates with a RESTful API to interact with the server-side database.",
      imageUrl: argentBankImg,
      githubUrl: "https://github.com/marie-bcc/Application-bancaire",
    },
    {
      title: "Nina Carducci",
      description:
        "Optimizing the search engine ranking of your website, the main goal is to make your site faster, more accessible, and better referenced, while maintaining its aesthetic and functionality.",
      imageUrl: ninaImg,
      githubUrl: "https://github.com/marie-bcc/Nina-Carducci-Portfolio",
    },
    {
      title: "Kasa",
      description: "Real estate rental web application with React",
      imageUrl: kasaImg,
      githubUrl: "https://github.com/marie-bcc/kasa-",
    },
  ];

  return (
    <section id="projects" className="p-5 md:p-28">
      <h2 className="text-center text-3xl md:text-7xl text-black relief-text pb-5 article">
        Projects
      </h2>
      <p className="italic mt-5 mb-5 text-sm md:text-base">
        "Highlight the unique qualities of your services to persuade potential
        clients to choose your expertise. Showcase striking photos and videos
        that illustrate the excellence of your brand, while creating captivating
        and meticulously crafted content to enhance your visibility on search
        engines."
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
