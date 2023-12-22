import React from "react";
import myPhoto from "../Img/MarieImg.webp";

const Section = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center lg:justify-center">
        <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
          <div className="slide-in-top text-left">
            <p className="sm:text-xl/relaxed">HI, THERE! 👋🏽 I'M</p>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-9xl">
              MARIE
              <span className="sm:block"> CODE </span>
            </h1>
            <p className="sm:text-xl/relaxed">
              A FRONTEND DEVELOPER -
              <span className="font-thin ml-1">
                Passionate about every pixel, obsessed with every detail.
              </span>
            </p>
          </div>

          <img
            src={myPhoto}
            alt="Marie"
            className="rounded-full w-32 h-32 lg:w-48 lg:h-48 object-cover object-center grayscale mt-4 lg:mt-0" // Ajustez la taille et le filtre ici
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
