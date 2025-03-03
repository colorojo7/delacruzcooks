import React from 'react'

const Section = ({className, children, id}) => {
  return (
    <section className={`md:px-14  ${className}`} id={id}>
            {children}
    </section>
  )
}

export default Section