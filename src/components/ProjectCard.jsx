import React from "react";
import { FaGithub, FaArrowDown } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  downloadUrl,
}) => {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg transition hover:shadow-xl">
      <article className="relative group">
        <img
          alt={title}
          src={imageUrl}
          className="w-full h-56 md:h-64 object-cover transition-transform group-hover:blur-sm"
        />
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50 text-white p-5">
          {description}
        </div>
      </article>
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <div className="flex space-x-4 mt-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <FaGithub />
          </a>
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaArrowDown />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
