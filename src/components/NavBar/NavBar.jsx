import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Detectar si el usuario está desplazándose hacia abajo
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      // Detectar si el mouse está en el 25% superior de la pantalla
      if (e.clientY < window.innerHeight * 0.25) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`hidden md:block fixed z-50 top-4 left-0 w-full md:h-20  text-white px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="rounded-3xl  bg-brand-1 h-full bg-opacity-95 flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center max-h-full">
          <div className="flex space-x-4">
          <NavLinks/>
          </div>
          <div className="">
            <img src="/images/juan/JuanLogoWhite.png" className="h-20 border-8 border-brand-1-light"/>
          </div>
          <div className="flex space-x-4">
            
            <SocialMediaLinks/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
