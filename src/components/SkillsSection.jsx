import React from "react";
import { FaReact, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const getIcon = (skill) => {
  switch (skill) {
    case "React":
      return <FaReact style={{ color: "#61DAFB" }} />;
    case "Javascript":
      return <IoLogoJavascript style={{ color: "#F0DB4F" }} />;
    case "Figma":
      return <FaFigma style={{ color: "#F24E1E" }} />;
    case "Tailwind":
      return <SiTailwindcss style={{ color: "#38B2AC" }} />;
    case "Git / Github":
      return (
        <>
          <FaGitAlt style={{ color: "#F05032" }} />
          <DiGithubBadge style={{ color: "#171515" }} />
        </>
      );
    case "HTML":
      return <FaHtml5 style={{ color: "#E34F26" }} />;
    case "CSS":
      return <FaCss3Alt style={{ color: "#1572B6" }} />;
    default:
      return null;
  }
};

const SkillItem = ({ category, skills }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h2 className="text-2xl md:text-3xl font-bold">{category}</h2>
      <ul className="mt-4 md:mt-8 text-lg md:text-xl text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            {getIcon(skill)}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    { category: "Design", skills: ["Figma", "Tailwind"] },
    { category: "Front End", skills: ["React", "Javascript"] },
    { category: "Other", skills: ["Git / Github"] },
  ];

  const FormationsSection = () => {
    const formations = [
      {
        title: "OpenClassroom",
        skills: ["HTML", "CSS", "Javascript", "React", "Figma"],
      },
      { title: "CodeLine BeginJavascript", skills: ["Javascript"] },
      { title: "CodeLine BeginReact", skills: ["React"] },
      {
        title: "Autres formations en ligne",
        skills: ["React", "Javascript", "Git / Github"],
      },
    ];

    return (
      <div id="formations" className="bg-gray-800 mt-10 p-10 md:p-20">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-white relief-text pb-5 md:pb-10">
          Formations
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 text-white place-items-center">
          {formations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <ul className="flex gap-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx}>{getIcon(skill)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="../Img/cv.pdf"
            className="text-lg text-blue-500 hover:underline"
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-gray-900 p-10 md:p-20 lg:p-28">
      <h2 className="text-center text-5xl md:text-6xl lg:text-7xl text-white relief-text pb-5 md:pb-10">
        Skills
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 text-white place-items-center">
        {skillCategories.map((item, index) => (
          <SkillItem
            key={index}
            category={item.category}
            skills={item.skills}
          />
        ))}
      </div>
      <FormationsSection />
    </section>
  );
};

export default SkillsSection;
