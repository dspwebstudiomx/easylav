import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import ButtonContainer from "@/components/containers/ButtonContainer";
import Spacing from "@/components/layout/Spacing";
import Hero from "@/components/sections/Hero";
import { Fragment } from "react";
import "../../node_modules/animate.css/animate.css";
import heroImage from "../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-2400.jpg";
import SobreNosotros from "@/components/sections/SobreNosotros";

export default function Home() {
  return (
    <Fragment>
      <Hero
        titleSection="Bienvenida"
        backgroundImage={heroImage}
        height="min-h-[45vh]"
        backgroundColor=""
        opacity={"opacity-35"}
        opacityColor={"bg-secondary"}
        textColor={"text-light"}
      >
        <div className="text-4xl sm:text-5xl tracking-wide text-balance flex flex-col  gap-12 sm:w-1/2 px-6 sm:px-0">
          <h1>
            <span className="mr-2">
              En Lavanderías
            </span>
            <span className="text-primary">Easy</span>
            <span className="text-primary">lav</span>
            <span className="font-normal mr-4">
              ,
            </span>
            <Spacing height="h-4" />

            <p className="text-2xl">
              Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto.
            </p>
          </h1>
        </div>
        <Spacing height="h-10" />
        <ButtonContainer>
          <ButtonPrimary title={"Nuestros Servicios"} href={"/#servicios"} />
          <ButtonSecondary title={"Sucursales"} href={"/sucursales"} />
        </ButtonContainer>
      </Hero>
      <SobreNosotros />
    </Fragment>
  );
}
