import { Link } from "react-router-dom";
import eventList from "../assets/content/events/eventList.js";


const EventsCarrusel = () => {
  return (
    <div className="">
      <div
        className="absolute inset-0 z-10 pointer-events-none scrollbar-hide "
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 0%, rgba(194, 226, 214, 0) 05%, rgba(194, 226, 214, 0) 95%, #FFFFFF 100%)",
        }}
      ></div>

      {/* Carousel Container */}
      <div className="flex md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 py-5">
        {eventList.map((recipe, index) => (
          <div
            key={index}
            className="snap-center shrink-0 flex justify-center items-center w-[80%] md:w-2/4 px-2"
          >
            <div className="flex flex-col justify-center pb-10 ">
              <div className="group h-96 w-64 md:w-80 [perspective:1000px]">
                <div className="relative h-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full rounded-xl object-cover shadow-xl"
                      src={recipe.image_1}
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 md:px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                    <div className="p-4 h-full flex flex-col justify-between pb-5 ">
                      <div className="pt-5 flex flex-col justify-center gap-5 ">
                        <h2 className="text-4xl font-bold text-center">
                          {recipe.title}
                        </h2>
                        <h3 className="text-xl">{recipe.subtitle}</h3>
                        <h4 className="text-sm">{recipe.description}</h4>
                      </div>
                      <div className="flex flex-row justify-center gap-5 font-bold bg-brand-6 rounded-2xl">
                        <div>{recipe.difficulty}</div>
                        <div>{recipe.time}</div>
                      </div>
                      </div>
                      <Link
                        to={`/recipe/${recipe.id}`}
                        className="bg-brand-1 hover:bg-brand-2 text-white px-6 py-3 rounded-lg text-lg font-semibold "
                      >
                        Let's make it!!
                      </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsCarrusel