import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'
import imageSection from '../../assets/images/images/Placeholder.webp'
const SobreNosotros = ({ id }) => {
  return (
    <Section id={'nosotros'}>
      <Container >
        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-16 py-32'>
          <div className='grid place-content-center gap-8'>
            <div className='border-l-4 border-primary pl-3'>
              <h2>Sobre Nosotros</h2>
            </div>
            <p className='text-balance md:text-xl'>
              En <span className='text-secondary font-semibold'>Easylav</span>, somos un equipo apasionado por el cuidado de la ropa. Con muchos años de experiencia, hemos perfeccionado nuestra técnica para asegurarnos de que cada prenda se vea y se sienta como nueva. Usamos solo los mejores equipos y productos porque creemos que tu ropa merece lo mejor.
            </p>
          </div>
          <div className='justify-end items-center'>
            <Image src={imageSection} alt="alt" width={520} className='shadow-image rounded' />
          </div>
        </div>
      </Container>

    </Section>
  )
}

export default SobreNosotros