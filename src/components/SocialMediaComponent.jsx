import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaBriefcase } from "react-icons/fa"; // Remplacez FaDiscord par FaBriefcase

const SocialButton = ({ Icon, additionalClasses, href, hoverClasses }) => (
  <div
    className={`w-28 h-28 flex justify-center items-center m-2 rounded-full ${additionalClasses}`}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        className={`w-24 h-24 outline-none border-none bg-white shadow-lg rounded-full transition duration-200 ease-in-out flex items-center justify-center ${hoverClasses}`}
      >
        <Icon className="text-6xl" />
      </button>
    </a>
  </div>
);

const SocialMediaButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <SocialButton
          Icon={FaLinkedin}
          href="https://www.linkedin.com/in/marie-becciu-630904212/"
          additionalClasses="rounded-tl-full"
          hoverClasses="hover:bg-blue-500"
        />
        <SocialButton
          Icon={FaEnvelope}
          href="mailto:marie.becciupro@gmail.com"
          additionalClasses="rounded-tr-full"
          hoverClasses="hover:bg-blue-300"
        />
      </div>
      <div className="flex">
        <SocialButton
          Icon={FaGithub}
          href="https://github.com/marie-bcc"
          additionalClasses="rounded-bl-full"
          hoverClasses="hover:bg-blue-300"
        />
        <SocialButton
          Icon={FaBriefcase} // Icône pour Malt
          href="https://www.malt.fr/profile/mariebecciu?modifyAvailability=true&source=ON_LOGIN"
          additionalClasses="rounded-br-full"
          hoverClasses="hover:bg-blue-500"
        />
      </div>
    </div>
  );
};

export default SocialMediaButtons;
