'use client'
import "../../node_modules/animate.css/animate.css";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import ButtonContainer from "@/components/containers/ButtonContainer";
import Spacing from "@/components/layout/Spacing";
import Hero from "@/components/sections/Hero";
import { Fragment } from "react";
import heroImage from "../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-2400.jpg";
import SobreNosotros from "@/components/sections/SobreNosotros";
import NuestrosServicios from "@/components/sections/NuestrosServicios";
import NuestrasSucursales from "@/components/sections/NuestrasSucursales";
import Testimonios from "@/components/sections/Testimonios";
import PorqueElegirnos from "@/components/sections/PorqueElegirnos";

export default function Home() {
  return (
    <Fragment>
      <Hero
        titleSection="Bienvenida"
        backgroundImage={heroImage}
        height="min-h-[60vh]"
        backgroundColor=""
        opacity={"opacity-35"}
        opacityColor={"bg-dark"}
        textColor={"text-light"}
      >
        <div className="sm:text-4xl tracking-wide text-balance flex flex-col  gap-8 ">
          <h1>
            <span className="mr-2 font-semibold text-3xl">En Lavanderías</span><br />
            <span className="text-primary font-semibold text-5xl">Easy</span>
            <span className="text-primary font-semibold text-5xl">lav</span>
            <span className="font-normal mr-4">,</span>
            <Spacing height="h-4" />

            <p className="text-xl xl:text-3xl">
              Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto.
            </p>
          </h1>
        </div>
        <ButtonContainer>
          <ButtonPrimary title={"Nuestros Servicios"} href={"/#servicios"} border={'border-2 border-light'} />
          <ButtonSecondary title={"Sucursales"} href={"/sucursales"} border={'border-2 border-light'} />
        </ButtonContainer>
      </Hero>
      <SobreNosotros />
      <NuestrosServicios />
      <PorqueElegirnos />
      <NuestrasSucursales />
      <Testimonios />
    </Fragment>
  );
}
