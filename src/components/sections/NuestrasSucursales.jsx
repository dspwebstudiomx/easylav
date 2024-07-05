'use client'
import React from 'react'
import { AdvancedMarker, APIProvider, Map, Marker, Pin } from '@vis.gl/react-google-maps';
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from '../layout/Spacing'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from 'react-icons/fa6'
import icon from '../../assets/images/favicon/favicon.png'

const localservices = [
  {
    id: 1,
    title: 'Madero Oriente',
    gmap: '',
    position: { lat: 19.70764, lng: -101.17192 },
    place: 'Av Francisco I. Madero Ote 2162, Isaac Arriaga, 58210 Morelia, Mich.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '8:00 a.m a 8:30 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '8:30 a.m a 8:00 p.m'
  },
  {
    id: 2,
    title: 'Nueva Chapultepec',
    gmap: '',
    position: { lat: 19.68546, lng: -101.16852 },
    place: 'Av Solidaridad 1167-A, Nueva Chapultepec, 58280 Morelia, Mich.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '7:00 a.m a 9:00 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '7:00 a.m a 9:00 p.m'
  },
  {
    id: 3,
    title: 'Jardines de Jerez',
    gmap: '',
    position: { lat: 21.10240, lng: -101.63745 },
    place: 'Blvd. Paseo de Jerez Sur 229-LOCAL 5, Jardines de Jerez, 37530 León de los Aldama, Gto.',
    serviceday1: 'Lunes-Sabado:',
    servicehour1: '7:30 a.m a 9:30 p.m',
    serviceday2: 'Domingo:',
    servicehour2: '7:30 a.m a 9:30 p.m'
  },
]


const NuestrasSucursales = () => {
  return (
    <Section id={'sucursales'}>
      <Container >
        <div className='grid place-content-center'>
          <h2 className='text-4xl'>Sucursales</h2>
        </div>
        <Spacing height={'h-24'} />

        <div className='grid place-content-center'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto'>
            {localservices.map((localservice) => {
              return (
                <article id={`sucursal-${localservice.title}`} key={localservice.id} className='flex flex-col gap-5 border-2 p-8 border-primary rounded-xl'>
                  <APIProvider apiKey='AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'>
                    <h3 className='text-center font-semibold text-xl'>{localservice.title}</h3>
                    <div className='w-full h-[180px] rounded-lg'>
                      <Map center={localservice.position} zoom={17} id={`gmap-${localservice.title}`}>
                        <AdvancedMarker position={localservice.position}>
                          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                        </AdvancedMarker>
                      </Map>
                    </div>
                    <a href={localservice.gmap} target="_blank" rel="noopener noreferrer"></a>
                    <p className='w-full mx-auto text-pretty text-sm flex gap-3 items-center'>
                      <span className='text-secondary text-xl'><FaMapMarkerAlt /></span>
                      <span>{localservice.place}</span>
                    </p>
                    <div className='w-full mx-auto text-pretty text-sm flex gap-4 items-center'>
                      <span className='text-secondary text-sm'><FaRegClock /></span>
                      <div className='flex flex-col gap-3 xl:gap-1'>
                        <div className='flex gap-1 flex-col lg:flex-row'>
                          <span>{localservice.serviceday1}</span>
                          <span>{localservice.servicehour1}</span>
                        </div>
                        <div className='flex flex-col gap-1 lg:flex-row'>
                          <span>{localservice.serviceday2}</span>
                          <span>{localservice.servicehour2}</span>
                        </div>
                      </div>
                    </div>
                  </APIProvider>
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