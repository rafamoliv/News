import React from "react";
import CarouselHome from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import { ContainerLanding, GridLanding } from "./styled";

export default function Landing() {
  return (
    <ContainerLanding>
      <Navbar />

      <CarouselHome />
      <GridLanding>
        <h3>teste</h3>
        <h3>teste</h3>
      </GridLanding>
    </ContainerLanding>
  );
}
