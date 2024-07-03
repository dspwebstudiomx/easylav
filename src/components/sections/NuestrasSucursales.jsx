'use client'
import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'
import Spacing from '../layout/Spacing'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from 'react-icons/fa6'

const localservices = [
  {
    id: 1,
    title: 'Madero',
    gmap: '',
    lat: '',
    lng: '',
    place: 'Av Francisco I. Madero Ote 2162, Isaac Arriaga, 58210 Morelia, Mich.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '8:00 a.m a 8:30 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '8:30 a.m a 8:00 p.m'
  },
  {
    id: 2,
    title: 'Solidaridad',
    gmap: '',
    lat: '',
    lng: '',
    place: 'Av Solidaridad 1167-A, Nueva Chapultepec, 58280 Morelia, Mich.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '7:00 a.m a 9:00 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '7:00 a.m a 9:00 p.m'
  },
  {
    id: 3,
    title: 'Jerez',
    gmap: '',
    lat: '21.1017566',
    lng: '-102.2498605,10',
    place: 'Blvd. Paseo de Jerez Sur 229-LOCAL 5, Jardines de Jerez, 37530 León de los Aldama, Gto.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '7:30 a.m a 9:30 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '7:30 a.m a 9:30 p.m'
  },
]


const NuestrasSucursales = () => {

  function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }

  return (
    <Section id={'servicios'}>
      <Container >
        <div className='grid place-content-center'>
          <h2 className='text-4xl'>Sucursales</h2>
        </div>
        <Spacing height={'h-24'} />

        <div className='grid place-content-center gap-8'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20'>
            {localservices.map((localservice) => {
              return (
                <article key={localservice.id} className='flex flex-col gap-5 border-2 p-8 border-primary rounded-xl'>
                  <h3 className='text-center font-semibold text-3xl'>{localservice.title}</h3>
                  <div id='map'></div>
                  <p className='w-2/3 sm:w-full mx-auto text-pretty text-md flex gap-3 items-center'>
                    <span className='text-secondary text-xl'><FaMapMarkerAlt /></span>
                    <span>{localservice.place}</span>
                  </p>
                  <div className='w-2/3 sm:w-full mx-auto text-pretty text-md flex gap-4 items-center'>
                    <span className='text-secondary text-xl'><FaRegClock /></span>
                    <div className='flex flex-col gap-1'>
                      <div className='flex gap-2'>
                        <span>{localservice.serviceday1}</span>
                        <span>{localservice.servicehour1}</span>
                      </div>
                      <div className='flex gap-2'>
                        <span>{localservice.serviceday2}</span>
                        <span>{localservice.servicehour2}</span>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
            }
          </div>
          <ButtonContainer position={'justify-center'} distance={'mt-16'}>
            <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'xl:w-[340px]'} border={'border-none'} />
          </ButtonContainer>
        </div>
      </Container>

    </Section >
  )
}
export default NuestrasSucursales