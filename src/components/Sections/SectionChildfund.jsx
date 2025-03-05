import React, { useEffect, useState } from "react";

const heroImg = "images/childfund/juanConNinos.webp";
const heroImgMob = "images/childfund/childfund_handsup.jpg";
const childFundLogo = "images/childfund/childfund-australiaLogo.png";
const SectionChildfund = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 65%), url(${heroImgMob})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  useEffect(() => {
    // Función para actualizar la dirección del gradiente y la imagen
    const updateBackgroundStyle = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // Para dispositivos md o mayores
        setBackgroundStyle({
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 60%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        });
      } else {
        // Para dispositivos móviles
        setBackgroundStyle({
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 65%), url(${heroImgMob})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
    <div className="mb-10 px-1 ">
      <div className="border-8 rounded-2xl border-brand-1-light bg-brand-1-light">
        <div className="flex justify-center px-4 h-24 md:h-36 mt-3 md:mb-10">
          <img src={childFundLogo} className="" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 px-4">
          <div className="flex justify-center">
            <img src={heroImg} className="md:block rounded-3xl max-w-80" />
          </div>
          <div className="max-w-96 flex flex-col justify-between font-semibold p-3 text-center bg-brand-1-light rounded-3xl">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum
              justo himenaeos vulputate posuere aliquet, mus quis mollis laoreet
              parturient molestie cum, commodo fusce in fermentum sem. Massa
              curabitur ac platea porta egestas augue, et tellus dignissim urna
              cras, molestie vehicula est orci enim. Fames hendrerit natoque
              gravida commodo pretium ad montes duis risus, purus feugiat
              imperdiet non sodales nostra nunc facilisi, posuere netus leo
              cursus dignissim venenatis suspendisse cubilia.
            </p>

            <button className="bg-brand-1 hover:bg-brand-2 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              <a
                href="https://www.childfund.org.au/donate-monthly/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I will help you to help!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChildfund;
