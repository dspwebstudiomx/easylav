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
        opacity={"opacity-45"}
        opacityColor={"bg-dark"}
        textColor={"text-light"}
      >
        <h1 className="font-bold text-5xl tracking-wide">
          <span className="font-normal mr-4">
            En Lavanderías
          </span>
          <span className="text-primary">Easy</span>
          <span className="text-primary">lav</span>
          <span className="font-normal mr-4">
            ,
          </span>
        </h1>
        <p className="text-4xl">
          Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto.
        </p>
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
