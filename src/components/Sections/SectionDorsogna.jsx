
const heroImg = "images/juan/JuanHeroImgMob.jpeg";
const dorsognaLogo = "images/colabs/dorsognaLogo.jpeg";
const SectionDorsogna = () => {

  return (

    <div className="mb-10 px-1 w-11/12 ">
      <div className=" rounded-2xl  py-10 ">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-4">
          
          <div className="flex  flex-col justify-between py-10">
            <div className="flex justify-center px-4 h-28 md:h-40 md:mt-3 md:mb-10">
              <img src={dorsognaLogo} className="" />
            </div>
            <div className="max-w-96 flex flex-col justify-between font-semibold p-3 text-center  rounded-3xl border-8 border-emerald-600">
              <p className="mb-3">
                I am so pleased and proud to be a Dorsogna ambassador. text text text
                text text text text text text text text text text text text 
                text text text text text text text text text text text text text text text 
                text text text text text text text text text  
                {/* I’m humbled and proud of being collaborating with the ChildFund
              team and embarking on this new project. Being one of nine children
              in a big family in Argentina my mother showed me the positive
              impact cooking and nutrition could have on a child’s life. You can
              help me help them. */}
              </p>
              <a
                href="https://www.childfund.org.au/donate-monthly/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold ">
                  Let's help together
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={heroImg} className="md:block rounded-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDorsogna;
