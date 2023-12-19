// @ts-nocheck
import React, { useEffect, useRef } from "react";

const Header = () => {
  const aboutRef = useRef(null);
  const navbarRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Utilisez l'opérateur optionnel de chaînage pour vérifier que `current` n'est pas `null`.
      const sectionTop = aboutRef.current?.getBoundingClientRect().top;
      const navbarBottom = navbarRef.current?.getBoundingClientRect().bottom;

      // Avant d'accéder à `style`, assurez-vous que `btnRef.current` n'est pas `null`.
      if (btnRef.current) {
        if (sectionTop <= 0) {
          btnRef.current.style.display = "none";
        } else if (navbarBottom > 0) {
          btnRef.current.style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Observateur d'intersection pour les articles
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".article").forEach((article) => {
      observer.observe(article);
    });

    // Nettoyez l'écouteur d'événement lorsque le composant se démonte
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gray-900 text-center fixed w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <div className="md:flex md:items-center md:gap-12">
            <nav
              id="navbar"
              aria-label="Global"
              className="slide-in-top hidden md:block"
              ref={navbarRef}
            >
              <ul className="flex items-center gap-6 text-sm text-white">
                <li>
                  <a className="gradient-on-hover" href="#about">
                    ABOUT ME
                  </a>
                </li>
                <li>
                  <a className="gradient-on-hover" href="#skills">
                    SKILLS
                  </a>
                </li>
                <li>
                  <a className="gradient-on-hover" href="#projects">
                    PROJECTS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
