'use client'
import Container from '@/components/containers/Container';
import Spacing from '@/components/layout/Spacing';
import Section from '@/components/templates/Section';
import React from 'react'
import CityCardGenerator from './components/CityCardGenerator';

const metadata = {
  title: "Sucursales | EASYLAV",
  description: "Generated by create next app",
};

const Sucursales = () => {
  return (
    <Section>
      <Container>
        <Spacing height={'h-12'} />
        <h2 className='text-4xl text-center font-semibold'>Morelia</h2>
        <Spacing height={'h-1'} />
        < CityCardGenerator city={'Morelia'} />
        <Spacing height={'h-20'} />
        <h2 className='text-3xl'>León</h2>
        <Spacing height={'h-6'} />
        <CityCardGenerator city={'León'} />
      </Container>
    </Section>
  )
}
export default Sucursales