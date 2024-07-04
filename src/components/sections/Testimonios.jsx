'use client'
import React from 'react'
import { APIProvider, Map, Marker, Pin } from '@vis.gl/react-google-maps';
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from '../layout/Spacing'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from 'react-icons/fa6'
import icon from '../../assets/images/favicon/favicon.png'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";



const testimonios = [
  {
    id: 1,
    nombre: 'María G.',
    testimonio: '¡Increíble servicio en Lavanderías Easylav! Mi ropa nunca había estado tan limpia y fresca. Definitivamente volveré.',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStarHalf key={4} />,
    ],
    calificacion: 9.5
  },
  {
    id: 2,
    nombre: 'Juan S.',
    testimonio: 'Excelente atención al cliente y calidad de lavado impecable en Lavanderías Easylav. ¡Recomendado al 100%!',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
    ],
    calificacion: 10
  },
  {
    id: 3,
    nombre: 'Ana M.',
    testimonio: 'Rápido, eficiente y muy conveniente. Lavanderías Easylav hizo que el lavado de mi ropa fuera una experiencia sin complicaciones.',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
    ],
    calificacion: 10
  },
  {
    id: 4,
    nombre: 'Carlos R.',
    testimonio: 'Desde que descubrí Lavanderías Easylav, no puedo dejar de utilizar sus servicios. Siempre cumplen con mis expectativas.',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
    ],
    calificacion: 10
  },
  {
    id: 5,
    nombre: 'Laura P.',
    testimonio: 'Los resultados son siempre consistentes y el personal es muy amable. Confío plenamente en Lavanderías Easylav para el cuidado de mi ropa.',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStarHalf key={4} />,
    ],
    calificacion: 9.8
  },
  {
    id: 6,
    nombre: 'Pedro D',
    testimonio: '¡No puedo decir suficientes cosas buenas sobre Lavanderías Easylav! Mi ropa nunca ha estado tan limpia y suave. ¡Gracias por el excelente servicio!',
    estrellas: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
    ],
    calificacion: 10
  },
]



const Testimonios = () => {
  return (
    <Section id={'testimonios'}>
      <Container >
        <div className='grid place-content-center'>
          <h2 className='text-4xl'>Testimonios</h2>
        </div>
        <Spacing height={'h-20'} />
        <div className='grid place-content-center'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-[100%] mx-auto'>
            {testimonios.map((testimonio) => {
              return (
                <article className='shadow-lg px-6 py-16 flex flex-col justify-between' key={testimonio.id}>
                  <p className='text-pretty'>{testimonio.testimonio}</p>
                  <div className='flex flex-col md:flex-row mt-6 gap-2 justify-between items-center'>
                    <h3 className='font-semibold text-lg'>{testimonio.nombre}</h3>
                    <div className='text-dark'>
                      <div className='flex gap-2'>
                        {testimonio.estrellas.map((estrella) => {
                          return (
                            <div key={estrella.key} className='flex items-center justify-center text-yellow-400'>{estrella}</div>
                          )
                        })}
                        <h4>{testimonio.calificacion}</h4>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
            }
          </div>
        </div>
      </Container>
    </Section >
  )
}
export default Testimonios