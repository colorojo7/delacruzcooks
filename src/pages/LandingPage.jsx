import React from 'react'
import Section from '../components/Section'
import SectionHero from '../components/Sections/SectionHero'
import NavBar from '../components/NavBar/NavBar'
import SectionRecipies from '../components/Sections/SectionRecipies'
import SectionContact from '../components/Sections/SectionContact'
import SectionColab from '../components/Sections/SectionColab'
import SectionChildfund from '../components/Sections/SectionChildfund'
import SectionEvents from '../components/Sections/SectionEvents'
import SectionDorsogna from '../components/Sections/SectionDorsogna'
import SectionCrossRoots from '../components/Sections/SectionCrossRoots'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='flex justify-center'>
        <img src="/images/juan/JuanLogoBlack.jpeg" className="md:hidden h-32 "/>
        </div>
        <Section className="h-dvh">
            <SectionHero/>
        </Section>
        <Section className="h-auto" id="recipes">
            <SectionRecipies/>
        </Section>
        <Section  className="min-h-96 md:px-0 my-5 mb-8 bg-black">
          <SectionCrossRoots/>
      </Section>
      <Section className="max-h-fit pb-16" id="events">
            <SectionEvents/>
        </Section> 
        <Section className='flex justify-start'>
            <SectionChildfund />
        </Section>
          {/* <Section className=' flex md:justify-end'>
            <SectionDorsogna />
        </Section> */}
        <Section  className="h-dvh" id="colabs">
            <SectionColab/>
        </Section>
     
        <Section id="contact" className="h-auto">
            <SectionContact/>
        </Section>
      
    </div>

  )
}

export default LandingPage