const bottleImg = "images/crossRoots/label.png";

const SectionCrossRoots = () => {
  return (
    <div className="md:max-h-[500px] pb-5">
      {/* //items-center  */}
      <div className=" flex flex-col md:flex-row md:justify-around items-center md:gap-0">
        <div className=" ">
          <img src={bottleImg} className="max-h-[350px] md:max-h-[500px]" />
        </div>
        <div className="md:w-5/12 md:pe-32 flex flex-col gap-4 px-10">
          <div>
            <p className="text-xl text-white tracking-wider font-serif uppercas tangerine-regular">
              “I want to share a dream with you. A bold, small-batch
              Shiraz-Malbec crafted by two friends from Mendoza, now living in
              Australia. — a tribute to our roots, our journey, and the moments
              we share around a glass of wine”—.
            </p>
            <p className="text-lg text-white tracking-widest font-serif uppercas windsong-medium pt-5 text-right">
              Juan de la Cruz
            </p>
          </div>
          <div className="w-full">
            <button className=" w-full bg-sky-300 hover:bg-sky-900 text-white px-6 py-3 rounded-lg text-lg font-semibold border border-gold">
              <p className="text-white text-2xl font-bold tracking-wide uppercase">
                SHOP
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCrossRoots;
