import React from "react";
import CarouselHome from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import NewsList from "../../components/News/news";
import { ContainerLanding, GridLanding, Grid6 } from "./styled";

export default function Landing() {
  return (
    <ContainerLanding>
      <Navbar />
      <CarouselHome />
      <GridLanding>
        <Grid6>
          <h3>Notícias</h3>
          <NewsList />
        </Grid6>
        <h3>Anuncie aqui</h3>
      </GridLanding>
    </ContainerLanding>
  );
}
