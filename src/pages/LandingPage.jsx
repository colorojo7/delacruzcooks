import React from 'react'
import Section from '../components/Section'
import SectionHero from '../components/Sections/SectionHero'
import NavBar from '../components/NavBar/NavBar'
import SectionRecipies from '../components/Sections/SectionRecipies'
import SectionContact from '../components/Sections/SectionContact'
import SectionColab from '../components/Sections/SectionColab'
import SectionChildfund from '../components/Sections/SectionChildfund'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>

        <Section className="h-dvh">
            <SectionHero/>
        </Section>
        <Section className="h-auto" id="recipes">
            <SectionRecipies/>
        </Section>
        <Section className='h-dvh'>
            <SectionChildfund/>
        </Section>
        <Section  className="h-svh" id="colabs">
            <SectionColab/>
        </Section>
        <Section className='bg-brand-4'>
            SctionProduct
        </Section>
        <Section className='bg-brand-6'>
            SctionMedia
        </Section>
        <Section id="contact" className="h-auto">
            <SectionContact/>
        </Section>
      
    </div>

  )
}

export default LandingPage