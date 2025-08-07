
import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Event 1",
    subtitle: "Subtitle for event 1",
    date: "2023-10-01",
    time: "10:00 AM",
    location: "Location for event 1",
    description:
      "Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1 Description for event 1",
    link: "https://example.com/event1",
  },
  {
    id: 2,
    title: "Event 2",
    subtitle: "Subtitle for event 2",
    date: "2023-10-02",
    time: "11:00 AM",
    location: "Location for event 2",
    description: "Description for event 2",
    link: "https://example.com/event2",
  },
  {
    id: 3,
    title: "Event 3",
    subtitle: "Subtitle for event 3",
    date: "2023-10-03",
    time: "12:00 PM",
    location: "Location for event 3",
    description: "Description for event 3",
    link: "https://example.com/event3",
  },
];

const dateIcon = "images/icons/calendar.png"
const timeIcon = "images/icons/timeIcon.png"
const locationIcon = "images/icons/locationIcon.png"

const SectionEvents = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="pt-8 h-full flex flex-col justify-center gap-6">
      <h2 className="px-4 text-5xl font-extrabold text-brand-2">
        My upcoming events!
      </h2>

      <div className="flex flex-wrap gap-5 justify-center px-4">
        {events.map((event) => {
          const isHovered = hoveredId === event.id;
          return (
            <div
              key={event.id}
              onMouseEnter={() => setHoveredId(event.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-white p-6 rounded-lg shadow-md basis-80 overflow-hidden transition-all duration-500 ease-in-out transform ${
                isHovered ? "scale-x-105 scale-y-105 max-h-[1000px]" : "max-h-[280px]"
              }`}
            >
              <h3 className="text-2xl font-bold text-brand-1">{event.title}</h3>
              <p className="text-gray-600">{event.subtitle}</p>
              <div className="flex gap-2 align-bottom">
                <img src={dateIcon} className="h-5 pt-1"/>
                <p className="text-gray-500">{event.date}  </p>
              </div>
               <div className="flex gap-2 align-bottom">
                <img src={timeIcon} className="h-5 pt-1"/>
                <p className="text-gray-500">{event.time}  </p>
              </div>
               <div className="flex gap-2 align-bottom">
                <img src={locationIcon} className="h-5 pt-1"/>
                <p className="text-gray-500">{event.location}  </p>
              </div>
               
            

              <p
                className={`mt-2 text-gray-700 transition-all duration-300 ${
                  isHovered ? "line-clamp-none" : "line-clamp-4"
                }`}
              >
                {event.description}
              </p>

              <a
                href={event.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                More details
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionEvents;
