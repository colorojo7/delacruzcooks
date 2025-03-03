import React from "react";
import recipiesList from "../../assets/content/recipies/recipies.js";
import RecipeCarousel from "../RecipiesCarrusel.jsx";

const SectionRecipies = () => {
  return (
    <div className="pt-8 h-full flex flex-col justify-center gap-6 ">
        <h2 className=" px-4  text-6xl font-extrabold text-start text-brand-2">
            My most YUMMYY recipies!
        </h2>
       
      <div className=""> 
        <RecipeCarousel/>
      </div> 
    </div>
  );
};

export default SectionRecipies;
