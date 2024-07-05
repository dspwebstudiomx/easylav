import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'
import imageSection from '../../assets/images/images/Placeholder.webp'
import { TbPoint } from 'react-icons/tb';
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'


const PorqueElegirnos = ({ id }) => {
  return (
    <Section id={'seccion-porquelegirnos'}>
      <Container >
        <article className='grid sm:grid-cols-2 gap-x-20 gap-y-16 mx-auto'>
          <div className='grid place-content-center gap-12'>
            <div className='border-l-4 border-primary pl-3'>
              <h2 className='text-4xl'>Porqué Elegirnos?</h2>
            </div>
            <div className='text-balance text-2xl flex flex-col gap-6'>
              <div className='flex'>
                <span className='text-primary text-2xl'><TbPoint /></span>
                <span className='font-semibold'>Compromiso con la Calidad</span>
              </div>
              <div className='ml-6 text-xl'>
                Utilizamos solo productos y técnicas de lavado <br></br> de primera categoría.
              </div>
            </div>
            <div className='text-balance text-2xl flex flex-col gap-6'>
              <div className='flex'>
                <span className='text-primary text-2xl'><TbPoint /></span>
                <span className='font-semibold'>Experiencia y Profesionalismo</span>
              </div>
              <div className='ml-6 text-xl'>
                Nuestro equipo está altamente capacitado y comprometido con tu satisfacción.
              </div>
            </div>
          </div>
          <div className='justify-end items-center'>
            <Image src={imageSection} alt="alt" width={520} className='shadow-image rounded' />
          </div>
        </article>
      </Container>
    </Section>
  )
}

export default PorqueElegirnos