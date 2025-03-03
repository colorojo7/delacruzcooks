import React, { useEffect, useState } from 'react'

const heroImg = "images/childfund/childfund_handsup.jpg"
const heroImgMob = "images/childfund/childfund_handsup.jpg"
const SectionChildfund = () => {

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
    <div className="h-full" style={backgroundStyle}>SectionChildfund yeeeea</div>
  )
}

export default SectionChildfund