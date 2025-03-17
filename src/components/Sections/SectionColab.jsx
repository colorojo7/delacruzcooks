import React from "react";
import colabList from "../../assets/content/colabs/colabsList";

const SectionColab = () => {
  console.log(colabList);

  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row md:gap-3 justify-evenly md:h-full">
        <div className="h-full w-full md:p-6">
          <div className="flex flex-col justify-between bg-blue-100 p-6 h-full w-full rounded-3xl">
            <h2 className="  px-4 text-6xl font-extrabold text-brand-2 md:text-center">
              I'm proud to colab with...
            </h2>
            <div className="hidden md:block border border-brand-1 hover:bg-brand-2 text-brand-1 px-2 py-1 rounded-lg hover:text-white font-bold text-2xl text-center">
              <a href="#contact">Let's work together</a>
            </div>
          </div>
        </div>
        <div className="h-full w-full p-6">
          <div className=" flex flex-col justify-center h-full w-full">
            <div className="flex flex-row flex-wrap  min-h-96 overflow-y-auto max-h-[600px]">
              {colabList.map((colab) => (
                <div
                  key={colab.id}
                  className="basis-6/12 md:basis-4/12 p-2 w-36 h-36"
                >
                  <div className="group relative h-full rounded-xl shadow-xl overflow-hidden">
                    {/* Capa principal con la imagen */}
                    <div className="absolute inset-0 border-2 border-brand-1-light rounded-xl p-2 h-full flex items-center justify-center transition-all duration-500 group-hover:translate-y-full">
                      <img
                        src={colab.logo}
                        className="max-h-full max-w-full"
                        alt="logo"
                      />
                    </div>

                    {/* Capa oculta que baja al hacer hover */}
                    <div className="absolute inset-0 h-36 w-full bg-brand-1-light px-4 text-center text-slate-200 flex flex-col items-center gap-2 py-2 transition-all duration-500 translate-y-[-100%] group-hover:translate-y-0">
                      <img src={colab.logo} className="max-w-20 max-h-7" />
                      <a
                        href={colab.link}
                        target="_blank"
                        className="border border-brand-1 hover:bg-brand-2 hover:text-white text-brand-1 px-2 py-1 rounded-lg"
                      >
                        Website
                      </a>
                      {colab?.job && (
                        <a className="border bg-brand-1 border-brand-1 hover:bg-brand-2 text-white px-2 py-1 rounded-lg">
                          See my job
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden block bg-blue-100 p-6">
          <div className=" border border-brand-1 hover:bg-brand-2 text-brand-1 px-2 py-1 rounded-lg hover:text-white font-bold text-2xl text-center">
            <a href="#contact">Let's work together</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionColab;
