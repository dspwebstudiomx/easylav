import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from '../layout/Spacing'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'
import SucursalCard from '../cards/SucursalCard';
import { localservices } from '@/app/data/sucursales'

const NuestrasSucursales = () => {
  return (
    <Section id="nuestras-sucursales">
      <Container >
        <div className='grid place-content-center'>
          <h2>Sucursales</h2>
        </div>
        <Spacing height={'h-6'} />

        <div className='grid place-content-center'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto'>
            {localservices.map(localservice => {
              return (
                <SucursalCard
                  key={localservice.id}
                  title={localservice.title}
                  gmap={localservice.gmap}
                  position={localservice.position}
                  place={localservice.place}
                  serviceday1={localservice.serviceday1}
                  servicehour1={localservice.servicehour1}
                  serviceday2={localservice.serviceday2}
                  servicehour2={localservice.servicehour2}
                  ciudad={localservices.ciudad}
                />
              )
            })}
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