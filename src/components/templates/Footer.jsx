import React from 'react'
import Section from './Section'
import Container from '../containers/Container'
import Image from 'next/image'
import logo from '../../assets/images/logos/horizontal/logo-blanco.png'
import { TbPoint } from 'react-icons/tb';

const Footer = () => {
  return (
    <>
      <Section backgroundColor={'bg-secondary'} id={'footer'}>
        <Container>
          <div className='grid gap-16 justify-between sm:grid-cols-4'>
            <div id='footer-logo' className='w-full'>
              <Image src={logo} alt='logo' className='w-[230px] h-auto mx-auto sm:ml-auto' />
            </div>
            <div id='footer-sections' className='flex flex-col gap-8'>
              <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Secciones</h3>
              <ul className='flex flex-col gap-1'>
                <li><a href='/' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Inicio</span></a></li>
                <li><a href='/#nosotros' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Quienes Somos</span></a></li>
                <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Servicios</span></a></li>
                <li><a href='/sucursales' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Sucursales</span></a></li>
                <li><a href='/contacto' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Contacto</span></a></li>
                <li><a href='/franquicias' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Franquicias</span></a></li>
              </ul>
            </div>
            <div id='footer-services' className='flex flex-col gap-8'>
              <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Servicios</h3>
              <ul className='flex flex-col gap-1'>
                <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Lavado Regular</span></a></li>
                <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Lavado Especializado</span></a></li>
                <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Planchado y Doblez</span></a></li>
              </ul>
            </div>
            <div id='footer-privacy-terms' className='flex flex-col gap-8'>
              <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Políticas de Privacidad, Términos y Condiciones</h3>
              <ul className='flex flex-col gap-1'>
                <li><a href='/politica-privacidad' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Política de Privacidad</span></a></li>
                <li><a href='/terminos-condiciones' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Términos y Condiciones</span></a></li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <div className='text-light bg-primary py-6'>
        <div className='flex justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto w-[80%] flex-col sm:flex-row gap-4 text-center sm:text-left text-sm'>
          <h3>Derechos Reservados 2025</h3>
          <h3>Diseñado y Desarrollado por: <a href='https://dspwebstudio.com' target='_blank' className='text-secondary font-semibold'>dspwebstudio.com</a></h3>
        </div>
      </div>
    </>
  )
}
export default Footer