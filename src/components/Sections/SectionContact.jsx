import React from "react";
import SocialMediaLinks from "../NavBar/SocialMediaLinks";

const SectionContact = () => {
  return (

   
    <div className="my-8 px-12 py-10 md:py-16  flex flex-col-reverse md:flex-row  md:justify-center md:gap-16  bg-brand-1-light rounded-t-full md:rounded-full ">
      <div className="py-8 flex flex-col justify-center gap-4 text-center">
        <h1 className="font-bold text-2xl md:text-3xl md:font-extrabold"> Contact me</h1>

        <div className="p-4 text-xl select-all" >juancruztorales@gmail.com</div>
        
        <div className="bg-brand-1 flex justify-around rounded-xl"><SocialMediaLinks/></div>
      </div>
      <div className="flex justify-center">
        <img src="/images/juan/JuanContact.png" className=" rounded-full" />
      </div>
    </div>
  );
};

export default SectionContact;
