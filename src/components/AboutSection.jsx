import React from "react";
import MarieImg from "../Img/MarieImg.webp";
import SocialMediaButtons from "./SocialMediaComponent";
import SkillsSection from "./SkillsSection";
const AboutSection = () => {
  return (
    <section id="about" className="h-full bg-gray-900 p-20">
      <h2 className="text-center text-7xl text-white relief-text pb-10 article">
        About me
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={MarieImg} alt="Marie" />
              </div>
            </div>
            <div className="chat-bubble bg-white text-black">
              "As a self-taught developer, I have a passion for learning and
              constantly strive to improve my skills and stay up-to-date with
              the latest trends and technologies."{" "}
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={MarieImg} alt="Marie" />
              </div>
            </div>
            <div className="chat-bubble  bg-white text-black">
              "I am always looking for new opportunities to apply my skills and
              expand my experience."{" "}
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={MarieImg} alt="Marie" />
              </div>
            </div>
            <div className="chat-bubble  bg-white text-black">
              "I enjoy taking on new challenges and am ready to work hard to
              create high-quality solutions that meet the needs of my clients."
            </div>
          </div>
        </div>
        <div>
          <SocialMediaButtons />
        </div>
      </div>
      <SkillsSection />
    </section>
  );
};

export default AboutSection;
