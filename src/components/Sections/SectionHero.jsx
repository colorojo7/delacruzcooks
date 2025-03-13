import React , { useEffect, useState } from "react";

const heroImg = "images/juan/JuanHeroImg.jpeg"
const heroImgMob = "images/juan/JuanHeroImgMob.jpeg"
 
const SectionHero = () => {

    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 65%), url(${heroImgMob})`,
      });
    
      useEffect(() => {
        // Función para actualizar la dirección del gradiente y la imagen
        const updateBackgroundStyle = () => {
          if (window.matchMedia("(min-width: 768px)").matches) {
            // Para dispositivos md o mayores
            setBackgroundStyle({
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 60%), url(${heroImg})`,
            });
          } else {
            // Para dispositivos móviles
            setBackgroundStyle({
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 65%), url(${heroImgMob})`,
            });
          }
        };
    
        // Llamar una vez al montar
        updateBackgroundStyle();
    
        // Escuchar cambios en el tamaño de la pantalla
        window.addEventListener("resize", updateBackgroundStyle);
    
        // Limpieza del event listener
        return () => {
          window.removeEventListener("resize", updateBackgroundStyle);
        };
      }, []);
  return (
    <div className="h-full pt-5 md:pt-28 md:pb-8">

    
    <div
      className="bg-cover bg-top md:bg-top rounded-t-full md:rounded-full h-full pb-8"
      style={backgroundStyle}
    >
      {/* <img src={heroImg} alt="juan cruzado de brazos" /> */}

  

      {/* Contenido de la Hero */}
      <div className="relative h-full flex items-end md:items-center z-10">
        <div className="w-full md:w-1/2 px-8 lg:px-16 text-white">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">
          Join me on a flavour-packed trip to Latin America right from your kitchen!
          </h1>
          <p className="text-lg lg:text-xl mb-6">
          Discover bold flavors, easy gluten-free recipes, and events that bring Latin culture straight to you
          </p>
          <button className="bg-brand-1 hover:bg-brand-2 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          <a href="#recipes">
            Let's get cooking
            </a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionHero;
