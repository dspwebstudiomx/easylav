import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'
import Spacing from '../layout/Spacing'
import imageService1 from '../../assets/images/gif/lavadero.gif'
import imageService2 from '../../assets/images/gif/lavar-la-ropa.gif'
import imageService3 from '../../assets/images/gif/planchar.gif'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'

const services = [
  {
    id: 1,
    title: 'Lavado Regular',
    description: 'Confía en nosotros para mantener tus prendas limpias y frescas semana tras semana. Utilizamos técnicas avanzadas para eliminar las manchas y preservar la calidad de tus telas.',
    image: imageService1
  },
  {
    id: 2,
    title: 'Lavado Especializado',
    description: '¿Tienes prendas delicadas o difíciles de limpiar? Nuestro servicio especializado está diseñado para manejar incluso los textiles más sensibles, asegurando resultados excepcionales',
    image: imageService2
  },
  {
    id: 3,
    title: 'Planchado y Doblez',
    description: 'El toque final perfecto para tus prendas. Nuestro servicio de planchado garantiza que cada artículo luzca impecable y listo para usar.',
    image: imageService3
  },
]

const NuestrosServicios = () => {
  return (
    <Section id={'servicios'}>
      <Container >
        <div className='grid place-content-center'>
          <h2 className='text-4xl'>Nuestros Servicios</h2>
        </div>
        <Spacing height={'h-32'} />
        <div className='grid place-content-center gap-8'>
          <ul className='grid sm:grid-cols-3 gap-x-20'>
            {services.map((service) => {
              return (
                <li key={service.id} className='flex flex-col gap-8'>
                  <Image src={service.image} alt="alt" width={210} className='mx-auto' />
                  <h3 className='text-3xl text-center'>{service.title}</h3>
                  <p className='w-2/3 sm:w-full mx-auto text-pretty text-lg'>{service.description}</p>
                </li>
              )
            })
            }
          </ul>
          <ButtonContainer position={'justify-center'} distance={'mt-16'}>
            <ButtonSecondary title={'Conoce nuestras Sucursales'} href={'/sucursales'} width={'xl:w-[340px]'} border={'border-none'} />
          </ButtonContainer>
        </div>
      </Container>

    </Section>
  )
}

export default NuestrosServicios