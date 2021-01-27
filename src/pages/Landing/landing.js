import React from "react";
import CarouselHome from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import NewsList from "../../components/News/news";
import { ContainerLanding, GridLanding, Grid6, Body } from "./styled";
import logo from "../../assets/images/news.png";
import Ads from "../../components/Ads/ads";
import Footer from "../../components/Footer/footer";

export default function Landing() {
  return (
    <ContainerLanding>
      <Navbar />
      <CarouselHome />

      <Body>
        <GridLanding>
          <img src={logo} />
          <div>
            <h3>News - Uma história de sucesso</h3>
            <h6>Lorem Ipsum</h6>
          </div>
        </GridLanding>

        <GridLanding>
          <Grid6>
            <NewsList />
          </Grid6>
          <Grid6>
            <Ads />
          </Grid6>
        </GridLanding>
      </Body>
      <Footer />
    </ContainerLanding>
  );
}
