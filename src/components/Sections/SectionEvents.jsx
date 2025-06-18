import React from 'react'
import EventsCarrusel from '../EventsCarrusel'

const SectionEvents = () => {
  return (
     <div className="pt-8 h-full flex flex-col justify-center gap-6 ">
        <h2 className=" px-4  text-6xl font-extrabold text-center text-brand-2">
          My upcomming events!
        </h2>
       
      <div className=""> 
        <EventsCarrusel/>
      </div> 
    </div>
  )
}

export default SectionEvents