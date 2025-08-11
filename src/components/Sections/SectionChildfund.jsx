
const heroImg = "images/childfund/juanConNinos.webp";
const childFundLogo = "images/childfund/childfund-australiaLogo.png";
const SectionChildfund = () => {

  return (

    <div className="mb-10 px-1 md:w-11/12 ">
      <div className="border-8 rounded-2xl border-brand-1-light bg-brand-1-light py-10 ">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-20 px-4">
          <div className="flex justify-center">
            <img src={heroImg} className="md:block rounded-3xl max-w-80" />
          </div>
          <div className=" ">
            <div className="flex justify-center px-4 h-16 md:h-24 mt-3 md:mb-10">
              <img src={childFundLogo} className="" />
            </div>
            <div className="max-w-96 flex flex-col justify-between font-semibold p-3 text-center bg-brand-1-light rounded-3xl">
              <p className="mb-3">
                I am so pleased and proud to be a ChildFund ambassador. It is
                important that we live in a world where children have access to
                nutritious food, education, and healthy childhoods.
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
                <button className="bg-brand-1 hover:bg-brand-2 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                  Let's help together
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChildfund;
