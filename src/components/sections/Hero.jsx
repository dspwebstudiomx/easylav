import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'


const Hero = ({ children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor }) => {
  return (
    <Section id={`seccion-${titleSection}`} backgroundImage={backgroundImage} height={height} backgroundColor={backgroundColor} className={`${textColor} relative overflow-hidden sm:px-32 w-full z-0 flex items-center`}>
      <div id={`imagen-${titleSection}`} className='inset-0 -z-20 h-full w-full object-cover object-center opacity-100 absolute top:0'>
        <Image src={backgroundImage} alt={titleSection} className='h-full w-full object-cover' />
      </div>
      <div id={`opacidad-${titleSection}`} className={`${opacity} absolute inset-0 -z-10 ${opacityColor}`}></div>
      <Container id={`contenido-${titleSection}`} className='absolute inset-0 top-0 left-0 w-full h-auto z-0'>
        {children}
      </Container>
    </Section>
  )
}

export default Hero