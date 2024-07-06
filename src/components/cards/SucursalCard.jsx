'use client'
import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'

const SucursalCard = ({ title, id, position, gmap, serviceday1, serviceday2, servicehour1, servicehour2, place }) => {
  return (
    <article id={`sucursal-${title}`} key={id} className='flex flex-col gap-5 border-2 p-8 border-primary rounded-xl'>
      <APIProvider apiKey='AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'>
        <h3 className='text-center font-semibold text-xl'>{title}</h3>
        <div className='w-full h-[180px] rounded-lg'>
          <Map center={position} zoom={17} id={`gmap-${title}`}>
            <AdvancedMarker position={position}>
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
          </Map>
        </div>
        <a href={gmap} target="_blank" rel="noopener noreferrer">
          <p className='w-full mx-auto text-pretty text-sm flex gap-3 items-center'>
            <span className='text-secondary text-xl'><FaMapMarkerAlt /></span>
            <span>{place}</span>
          </p>
        </a>
        <div className='w-full mx-auto text-pretty text-sm flex gap-4 items-center'>
          <span className='text-secondary text-sm'><FaRegClock /></span>
          <div className='flex flex-col gap-3 xl:gap-1'>
            <div className='flex gap-1 flex-col lg:flex-row'>
              <span>{serviceday1}</span>
              <span>{servicehour1}</span>
            </div>
            <div className='flex flex-col gap-1 lg:flex-row'>
              <span>{serviceday2}</span>
              <span>{servicehour2}</span>
            </div>
          </div>
        </div>
      </APIProvider>
    </article>
  )
}

export default SucursalCard