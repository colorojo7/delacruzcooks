import React from "react";
import { Link, useParams } from "react-router-dom";
import recipiesList from "../assets/content/recipies/recipies.js";

const RecipePage = () => {
  const { id } = useParams();

  const recipe = recipiesList.find((recipe) => recipe.id === id);

  console.log(recipe);

  return (
    <div className="bg-brand-1-light min-h-dvh flex flex-col md:px-24">
      <div className="flex p-2 ">
        <Link
          to="/"
          className="bg-brand-1 hover:bg-brand-2 text-white px-6 py-3 rounded-lg text-lg font-semibold  "
        >
          Go back
        </Link>
      </div>

      <div className="flex justify-center py-3">
        <h1 className="font-extrabold text-4xl md:text-7xl">{recipe.title}</h1>
      </div>

      <div className="bg-slate-40  pt-1 md:p-10 min-h-full flex-grow">
        <div className="flex flex-wrap flex-col md:flex-row gap-5 md:gap-10 justify-around">
          <div className="p-2  flex justify-center rounded-3xl md:basis-5/12">
            <img
              className="h-full min-w-full md:min-h-96 md:min-w-96   object-cover rounded-2xl border-8 border-brand-3"
              src={recipe.image_1}
            />
          </div>

          <div className="p-2  flex justify-center rounded-3xl md:basis-5/12">
            <div className="p-5 pt-2 min-h-full min-w-full  md:max-w-60  object-cover rounded-2xl bg-slate-100 border-8 border-brand-3">
              <h2 className="mb-3 text-center font-bold text-xl md:text-2xl italic">
                Ingredients
              </h2>
              <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-2 bg-brand-3 flex justify-center rounded-3xl md:basis-full">
            <div className="p-5 pt-2 min-h-full min-w-full md:max-w-60  object-cover rounded-2xl bg-slate-200">
              <h2 className="mb-3 text-center font-bold text-xl md:text-2xl italic">
                Steps
              </h2>

              <ul className="list-disc pl-5">
                {recipe.steps.map((step) => (
                  <li>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {recipe.galery.map((photo) => (
            <div>
              <img src={photo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
