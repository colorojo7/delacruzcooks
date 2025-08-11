import colabList from "../../assets/content/colabs/colabsList";

const SectionColab = () => {
  

  return (
    <div className="h-full px-1 ">
      <div className="flex flex-col  justify-evenly h-full">
        <div className="w-full md:pb-0">
          <div className="flex flex-col justify-between bg-blue-100 p-6 h-full w-full rounded-t-3xl">
            <h2 className="px-4 text-4xl font-extrabold text-brand-2 md:text-center">
            These are some of my latest partnerships
            </h2>
       
          </div>
        </div>
        <div className="max-h-full w-full p-6 overflow-y-auto ">
          <div className=" flex flex-col justify-center h-full w-full">
            <div className="flex flex-row flex-wrap  min-h-96">
              {colabList.map((colab) => (
                <div
                  key={colab.id}
                  className="basis-6/12 md:basis-2/12 p-2 w-32 h-32"
                >
                  <div className="group relative h-full rounded-xl  overflow-hidden bg-white">
                    {/* Capa principal con la imagen */}
                    <div className="absolute inset-0   rounded-xl p-2 h-full flex items-center justify-center transition-all duration-500 ">
                      <img
                        src={colab.logo}
                        className="max-h-full max-w-full"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="  bg-blue-100 p-6 rounded-b-3xl flex justify-center items-center">
          <div className="max-w-80 border border-brand-1 hover:bg-brand-2 text-brand-1 px-2 py-1 rounded-lg hover:text-white font-bold text-2xl text-center">
            <a href="#contact">Let's work together</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionColab;
